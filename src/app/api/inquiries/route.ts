import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { uploadToR2, getSignedDownloadUrl, isR2Configured } from '@/lib/r2';
import { sendInquiryWorkflows, EmailAttachment } from '@/lib/email';

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

// POST /api/inquiries — Process form submission, database save & dual email workflow
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const fullName = (formData.get('fullName') as string) || '';
    const email = (formData.get('email') as string) || '';
    const phone = (formData.get('phone') as string) || '';
    const city = (formData.get('city') as string) || 'India';
    const district = (formData.get('district') as string) || '';
    const category = (formData.get('category') as string) || '';
    const capacity = (formData.get('capacity') as string) || '';
    const message = (formData.get('message') as string) || '';
    const address = (formData.get('address') as string) || '';
    const gst = (formData.get('gst') as string) || '';
    const experience = (formData.get('experience') as string) || '';

    // Numeric parameters for solar quote calculator
    const avgBill = parseInt(formData.get('avgBill') as string, 10) || 0;
    const fixRent = parseInt(formData.get('fixRent') as string, 10) || 0;
    const connectionKw = parseFloat(formData.get('connectionKw') as string) || 0;
    const roofSpace = parseInt(formData.get('roofSpace') as string, 10) || 0;
    const roofType = (formData.get('roofType') as string) || category || 'General Inquiry';
    const recommendedKw = parseFloat(formData.get('recommendedKw') as string) || 0;
    const monthlySavings = parseInt(formData.get('monthlySavings') as string, 10) || 0;
    const annualSavings = parseInt(formData.get('annualSavings') as string, 10) || 0;
    const grossCost = parseInt(formData.get('grossCost') as string, 10) || 0;
    const subsidy = parseInt(formData.get('subsidy') as string, 10) || 0;
    const netInvestment = parseInt(formData.get('netInvestment') as string, 10) || 0;
    const paybackYears = parseFloat(formData.get('paybackYears') as string) || 0;

    // Detect Form Type
    let formType: 'quote' | 'vendor' | 'careers' | 'contact' =
      (formData.get('formType') as any) || 'contact';

    if (!formData.get('formType')) {
      if (roofType.toLowerCase().includes('vendor')) {
        formType = 'vendor';
      } else if (roofType.toLowerCase().includes('career')) {
        formType = 'careers';
      } else if (avgBill > 0 || recommendedKw > 0) {
        formType = 'quote';
      } else {
        formType = 'contact';
      }
    }

    // Server-side validation
    if (!fullName || fullName.trim().length < 2) {
      return NextResponse.json({ error: 'Valid name is required' }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json({ error: 'Valid email address is required' }, { status: 400 });
    }

    // Extract attached file (if any)
    const billFile = formData.get('billFile') as File | null;
    const attachments: EmailAttachment[] = [];
    let publicFileUrl: string | null = null;
    let r2FileKey: string | null = null;

    if (billFile && billFile.size > 0) {
      const buffer = Buffer.from(await billFile.arrayBuffer());
      attachments.push({
        filename: billFile.name,
        content: buffer,
        contentType: billFile.type,
      });

      // Upload to Cloudflare R2 if configured
      if (isR2Configured()) {
        try {
          r2FileKey = await uploadToR2(buffer, billFile.name, billFile.type || 'application/octet-stream');
          publicFileUrl = await getSignedDownloadUrl(r2FileKey);
        } catch (r2Err) {
          console.error('R2 upload error:', r2Err);
        }
      }
    }

    // Save to Database
    let savedInquiry = null;
    try {
      savedInquiry = await prisma.solarInquiry.create({
        data: {
          fullName: fullName.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim() || 'N/A',
          city: city.trim(),
          district: address || district || '',
          avgBill,
          fixRent,
          connectionKw,
          roofSpace,
          roofType: `[${formType.toUpperCase()}] ${roofType}`,
          recommendedKw,
          monthlySavings,
          annualSavings,
          grossCost,
          subsidy,
          netInvestment,
          paybackYears,
          billFileUrl: publicFileUrl,
          billFileName: billFile ? billFile.name : null,
          status: 'New',
          notes: message || (capacity ? `Capacity: ${capacity}` : null),
        },
      });
    } catch (dbErr) {
      console.warn('Database save skipped or failed, proceeding with email delivery:', dbErr);
    }

    // Build specific additional details based on form type
    const additionalDetails: Record<string, string | number | undefined> = {};

    if (formType === 'quote' && recommendedKw > 0) {
      additionalDetails['Recommended Solar Capacity'] = `${recommendedKw} kW`;
      additionalDetails['Monthly Electricity Bill'] = `₹${avgBill.toLocaleString('en-IN')}`;
      additionalDetails['Estimated Monthly Savings'] = `₹${monthlySavings.toLocaleString('en-IN')}`;
      additionalDetails['Estimated Annual Savings'] = `₹${annualSavings.toLocaleString('en-IN')}`;
      additionalDetails['PM SGY Subsidy'] = `₹${subsidy.toLocaleString('en-IN')}`;
      additionalDetails['Gross System Cost'] = `₹${grossCost.toLocaleString('en-IN')}`;
      additionalDetails['Net Investment Cost'] = `₹${netInvestment.toLocaleString('en-IN')}`;
      additionalDetails['Payback Period'] = `~${paybackYears} Years`;
      additionalDetails['Sanctioned Load'] = `${connectionKw} kW`;
      additionalDetails['Roof Space Available'] = `${roofSpace} Sq. Ft.`;
      additionalDetails['Structure Type'] = roofType;
    } else if (formType === 'vendor') {
      additionalDetails['Vendor Category'] = category;
      additionalDetails['Years of Experience'] = experience;
      additionalDetails['GST / Registration'] = gst || 'Not Provided';
      additionalDetails['Office / Factory Address'] = address;
    } else if (formType === 'careers') {
      additionalDetails['Position Applied For'] = category || roofType;
      additionalDetails['Application Notes'] = message;
    } else {
      if (category) additionalDetails['Project Category'] = category;
      if (capacity) additionalDetails['Estimated Capacity'] = capacity;
    }

    // Trigger dual email workflow: Admin Notification + 48-Hour User Confirmation
    const emailResult = await sendInquiryWorkflows({
      formType,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      city: city.trim(),
      district: address || district,
      category,
      capacity,
      message,
      additionalDetails,
      attachments,
      publicFileUrl,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry received successfully! Confirmation email sent.',
        id: savedInquiry?.id || 'SUBMITTED',
        emails: emailResult,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('POST /api/inquiries error:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry submission: ' + error.message },
      { status: 500 }
    );
  }
}
