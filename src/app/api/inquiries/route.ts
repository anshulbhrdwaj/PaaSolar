import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { uploadToR2, isR2Configured } from '@/lib/r2';

// GET /api/inquiries — Fetch all inquiries for admin panel
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const search = searchParams.get('search');

    const where: Record<string, unknown> = {};

    if (status && status !== 'All') {
      where.status = status;
    }

    if (search) {
      where.OR = [
        { fullName: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search, mode: 'insensitive' } },
        { city: { contains: search, mode: 'insensitive' } },
        { district: { contains: search, mode: 'insensitive' } },
        { id: { contains: search, mode: 'insensitive' } },
      ];
    }

    const inquiries = await prisma.solarInquiry.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ inquiries }, { status: 200 });
  } catch (error) {
    console.error('GET /api/inquiries error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch inquiries' },
      { status: 500 }
    );
  }
}

// POST /api/inquiries — Save a new calculator submission
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const city = formData.get('city') as string;
    const district = (formData.get('district') as string) || '';
    const avgBill = parseInt(formData.get('avgBill') as string, 10);
    const fixRent = parseInt(formData.get('fixRent') as string, 10) || 0;
    const connectionKw = parseFloat(formData.get('connectionKw') as string);
    const roofSpace = parseInt(formData.get('roofSpace') as string, 10);
    const roofType = (formData.get('roofType') as string) || 'rooftop';
    const recommendedKw = parseFloat(formData.get('recommendedKw') as string);
    const monthlySavings = parseInt(formData.get('monthlySavings') as string, 10);
    const annualSavings = parseInt(formData.get('annualSavings') as string, 10);
    const grossCost = parseInt(formData.get('grossCost') as string, 10) || 0;
    const subsidy = parseInt(formData.get('subsidy') as string, 10) || 0;
    const netInvestment = parseInt(formData.get('netInvestment') as string, 10);
    const paybackYears = parseFloat(formData.get('paybackYears') as string);

    // Handle file upload to R2
    let billFileUrl: string | null = null;
    let billFileName: string | null = null;
    const billFile = formData.get('billFile') as File | null;

    if (billFile && billFile.size > 0 && isR2Configured()) {
      const buffer = Buffer.from(await billFile.arrayBuffer());
      const key = await uploadToR2(buffer, billFile.name, billFile.type);
      billFileUrl = key;
      billFileName = billFile.name;
    } else if (billFile && billFile.size > 0) {
      // R2 not configured — store filename only
      billFileName = billFile.name;
    }

    const inquiry = await prisma.solarInquiry.create({
      data: {
        fullName,
        email,
        phone,
        city,
        district,
        avgBill,
        fixRent,
        connectionKw,
        roofSpace,
        roofType,
        recommendedKw,
        monthlySavings,
        annualSavings,
        grossCost,
        subsidy,
        netInvestment,
        paybackYears,
        billFileUrl,
        billFileName,
        status: 'New',
      },
    });

    return NextResponse.json(
      { success: true, inquiry },
      { status: 201 }
    );
  } catch (error) {
    console.error('POST /api/inquiries error:', error);
    return NextResponse.json(
      { error: 'Failed to save inquiry' },
      { status: 500 }
    );
  }
}
