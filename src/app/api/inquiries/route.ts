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
    const avgBill = parseInt(formData.get('avgBill') as string, 10) || 0;
    const fixRent = parseInt(formData.get('fixRent') as string, 10) || 0;
    const connectionKw = parseFloat(formData.get('connectionKw') as string) || 0;
    const roofSpace = parseInt(formData.get('roofSpace') as string, 10) || 0;
    const roofType = (formData.get('roofType') as string) || 'rooftop';
    const recommendedKw = parseFloat(formData.get('recommendedKw') as string) || 0;
    const monthlySavings = parseInt(formData.get('monthlySavings') as string, 10) || 0;
    const annualSavings = parseInt(formData.get('annualSavings') as string, 10) || 0;
    const grossCost = parseInt(formData.get('grossCost') as string, 10) || 0;
    const subsidy = parseInt(formData.get('subsidy') as string, 10) || 0;
    const netInvestment = parseInt(formData.get('netInvestment') as string, 10) || 0;
    const paybackYears = parseFloat(formData.get('paybackYears') as string) || 0;

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

    // Send instant email notification if Resend is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.NOTIFICATION_EMAIL || 'info@paasolar.com';
    const customFromEmail = process.env.RESEND_FROM_EMAIL || 'Paa Solar <notifications@paasolar.com>';

    if (resendApiKey) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(resendApiKey);

        const emailContent = {
          subject: `☀️ New Solar Inquiry from ${fullName} (${city})`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
              <div style="background-color: #f59e0b; padding: 20px; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 22px;">☀️ Paa Solar — New Website Inquiry</h1>
                <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Turnkey Engineering & PM Surya Ghar Lead</p>
              </div>

              <div style="padding: 24px; color: #1e293b;">
                <h3 style="color: #0f172a; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">👤 Customer Details</h3>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
                <p><strong>Location:</strong> ${city}${district ? `, ${district}` : ''}</p>

                <h3 style="color: #0f172a; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px; margin-top: 24px;">⚡ System Sizing & Financial Estimates</h3>
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                  <tr><td style="padding: 6px 0; color: #64748b;">Recommended Capacity:</td><td style="font-weight: bold; color: #0f172a;">${recommendedKw} kW Solar</td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b;">Est. Monthly Savings:</td><td style="font-weight: bold; color: #10b981;">₹${monthlySavings.toLocaleString('en-IN')} / mo</td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b;">Annual Bill Savings:</td><td style="font-weight: bold; color: #f59e0b;">₹${annualSavings.toLocaleString('en-IN')} / yr</td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b;">PM SGY Govt Subsidy:</td><td style="font-weight: bold; color: #10b981;">₹${subsidy.toLocaleString('en-IN')}</td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b;">Net System Cost:</td><td style="font-weight: bold; color: #0f172a;">₹${netInvestment.toLocaleString('en-IN')}</td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b;">Est. Payback Period:</td><td style="font-weight: bold; color: #0f172a;">~${paybackYears} Years</td></tr>
                </table>

                ${
                  billFileName
                    ? `<div style="margin-top: 20px; padding: 12px; background-color: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px;">
                        <p style="margin: 0; font-size: 13px; color: #334155;">📄 <strong>Electricity Bill Attached:</strong> ${billFileName}</p>
                       </div>`
                    : ''
                }

                <div style="margin-top: 28px; text-align: center;">
                  <a href="https://paasolar.com/admin" style="background-color: #0f172a; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px; display: inline-block;">Open Admin Panel</a>
                </div>
              </div>

              <div style="background-color: #f8fafc; padding: 12px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
                Paa Solar System Automation • Lead Inquiry ID: ${inquiry.id}
              </div>
            </div>
          `,
        };

        // Try primary domain sending
        const sendResult = await resend.emails.send({
          from: customFromEmail,
          to: [notifyEmail],
          ...emailContent,
        });

        // If domain is unverified, fallback to test sender
        if (sendResult.error) {
          console.warn('Primary domain send failed, falling back to onboarding sender:', sendResult.error.message);
          await resend.emails.send({
            from: 'Paa Solar Website <onboarding@resend.dev>',
            to: ['lonewolfdev3019@gmail.com', 'admin.ekchakra@gmail.com'],
            ...emailContent,
          });
        }
      } catch (emailErr) {
        console.error('Failed to send inquiry email notification via Resend:', emailErr);
      }
    }

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
