import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSignedDownloadUrl, deleteFromR2, isR2Configured } from '@/lib/r2';

// PATCH /api/inquiries/[id] — Update status or notes
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const data: Record<string, unknown> = {};
    if (body.status !== undefined) data.status = body.status;
    if (body.notes !== undefined) data.notes = body.notes;

    const inquiry = await prisma.solarInquiry.update({
      where: { id },
      data,
    });

    return NextResponse.json({ success: true, inquiry }, { status: 200 });
  } catch (error) {
    console.error('PATCH /api/inquiries/[id] error:', error);
    return NextResponse.json(
      { error: 'Failed to update inquiry' },
      { status: 500 }
    );
  }
}

// DELETE /api/inquiries/[id] — Remove an inquiry and its attached bill from R2
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // 1. Fetch inquiry to check for billFileUrl
    const inquiry = await prisma.solarInquiry.findUnique({
      where: { id },
    });

    if (!inquiry) {
      return NextResponse.json({ error: 'Inquiry not found' }, { status: 404 });
    }

    // 2. Remove file from Cloudflare R2 if present
    if (inquiry.billFileUrl) {
      await deleteFromR2(inquiry.billFileUrl);
    }

    // 3. Delete inquiry from PostgreSQL DB
    await prisma.solarInquiry.delete({
      where: { id },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('DELETE /api/inquiries/[id] error:', error);
    return NextResponse.json(
      { error: 'Failed to delete inquiry' },
      { status: 500 }
    );
  }
}

// GET /api/inquiries/[id] — Get signed download URL for bill file
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const inquiry = await prisma.solarInquiry.findUnique({
      where: { id },
    });

    if (!inquiry) {
      return NextResponse.json({ error: 'Inquiry not found' }, { status: 404 });
    }

    let signedUrl: string | null = null;
    if (inquiry.billFileUrl && isR2Configured()) {
      signedUrl = await getSignedDownloadUrl(inquiry.billFileUrl);
    }

    return NextResponse.json({ inquiry, signedUrl }, { status: 200 });
  } catch (error) {
    console.error('GET /api/inquiries/[id] error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch inquiry' },
      { status: 500 }
    );
  }
}
