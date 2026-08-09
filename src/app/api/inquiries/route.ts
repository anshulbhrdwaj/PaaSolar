import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { uploadToR2, getSignedDownloadUrl, isR2Configured } from '@/lib/r2';

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

    // Extract attached electricity bill file
    const billFile = formData.get('billFile') as File | null;
    const attachments: Array<{ filename: string; content: Buffer }> = [];
    let publicFileUrl: string | null = null;
    let isImage = false;

    if (billFile && billFile.size > 0) {
      const buffer = Buffer.from(await billFile.arrayBuffer());
      attachments.push({
        filename: billFile.name,
        content: buffer,
      });

      isImage = billFile.type.startsWith('image/') || /\.(png|jpg|jpeg|webp)$/i.test(billFile.name);

      // If R2 is configured, generate direct URL for inline email preview
      if (isR2Configured()) {
        try {
          const key = await uploadToR2(buffer, billFile.name, billFile.type || 'application/octet-stream');
          publicFileUrl = await getSignedDownloadUrl(key);
        } catch (r2Err) {
          console.error('R2 upload error for email preview:', r2Err);
        }
      }
    }

    // Send direct email notification to info@paasolar.com
    const resendApiKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.NOTIFICATION_EMAIL || 'info@paasolar.com';
    const customFromEmail = process.env.RESEND_FROM_EMAIL || 'Paa Solar <notifications@paasolar.com>';

    if (resendApiKey) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(resendApiKey);

        const emailPayload = {
          subject: `☀️ New Solar Inquiry from ${fullName} (${city})`,
          attachments: attachments.length > 0 ? attachments : undefined,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
              <div style="background-color: #f59e0b; padding: 20px; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 22px;">☀️ Paa Solar — Customer Inquiry</h1>
                <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Turnkey Solar Engineering & Subsidy Lead</p>
              </div>

              <div style="padding: 24px; color: #1e293b;">
                <h3 style="color: #0f172a; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">👤 Customer Contact Details</h3>
                <p style="margin: 6px 0;"><strong>Name:</strong> ${fullName}</p>
                <p style="margin: 6px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
                <p style="margin: 6px 0;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></p>
                <p style="margin: 6px 0;"><strong>Location:</strong> ${city}${district ? `, ${district}` : ''}</p>

                <h3 style="color: #0f172a; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px; margin-top: 24px;">⚡ System Sizing & Energy Parameters</h3>
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                  <tr><td style="padding: 6px 0; color: #64748b;">Recommended System Capacity:</td><td style="font-weight: bold; color: #0f172a;">${recommendedKw} kW Solar</td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b;">Monthly Electricity Bill:</td><td style="font-weight: bold; color: #0f172a;">₹${avgBill.toLocaleString('en-IN')} / mo</td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b;">Estimated Monthly Savings:</td><td style="font-weight: bold; color: #10b981;">₹${monthlySavings.toLocaleString('en-IN')} / mo</td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b;">Annual Electricity Savings:</td><td style="font-weight: bold; color: #f59e0b;">₹${annualSavings.toLocaleString('en-IN')} / yr</td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b;">PM SGY Govt Subsidy:</td><td style="font-weight: bold; color: #10b981;">₹${subsidy.toLocaleString('en-IN')}</td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b;">Gross Project Cost:</td><td style="font-weight: bold; color: #0f172a;">₹${grossCost.toLocaleString('en-IN')}</td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b;">Net System Cost After Subsidy:</td><td style="font-weight: bold; color: #f59e0b;">₹${netInvestment.toLocaleString('en-IN')}</td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b;">Estimated Payback Period:</td><td style="font-weight: bold; color: #0f172a;">~${paybackYears} Years</td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b;">Sanctioned Grid Connection:</td><td style="font-weight: bold; color: #0f172a;">${connectionKw} kW</td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b;">Available Roof Space:</td><td style="font-weight: bold; color: #0f172a;">${roofSpace} Sq. Ft.</td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b;">Installation Structure:</td><td style="font-weight: bold; color: #0f172a;">${roofType}</td></tr>
                </table>

                ${
                  billFile
                    ? `<div style="margin-top: 24px; padding: 16px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px;">
                        <h4 style="margin: 0 0 8px 0; color: #0f172a; font-size: 14px;">📄 Attached Customer Electricity Bill</h4>
                        <p style="margin: 0 0 12px 0; font-size: 13px; color: #475569;">Filename: <strong>${billFile.name}</strong> (Attached to this email)</p>
                        ${
                          publicFileUrl && isImage
                            ? `<div style="margin-top: 10px; text-align: center; background-color: #ffffff; padding: 10px; border-radius: 8px; border: 1px solid #cbd5e1;">
                                <img src="${publicFileUrl}" alt="Customer Electricity Bill" style="max-width: 100%; max-height: 400px; border-radius: 6px; display: block; margin: 0 auto;" />
                                <p style="margin: 8px 0 0 0; font-size: 12px;"><a href="${publicFileUrl}" target="_blank" style="color: #2563eb; font-weight: bold;">🔍 Click to View Full High-Res Image</a></p>
                               </div>`
                            : publicFileUrl
                            ? `<p style="margin: 8px 0 0 0; font-size: 13px;"><a href="${publicFileUrl}" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: underline;">📥 Download Bill Copy Document</a></p>`
                            : ''
                        }
                       </div>`
                    : ''
                }
              </div>

              <div style="background-color: #f8fafc; padding: 12px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
                Paa Solar Instant Email Notification System
              </div>
            </div>
          `,
        };

        // Try sending via domain notifications@paasolar.com
        const sendResult = await resend.emails.send({
          from: customFromEmail,
          to: [notifyEmail],
          ...emailPayload,
        });

        // Fallback if domain verification is pending on Resend
        if (sendResult.error) {
          console.warn('Primary domain send failed, falling back to onboarding test sender:', sendResult.error.message);
          await resend.emails.send({
            from: 'Paa Solar Website <onboarding@resend.dev>',
            to: ['lonewolfdev3019@gmail.com', 'admin.ekchakra@gmail.com'],
            ...emailPayload,
          });
        }
      } catch (emailErr) {
        console.error('Failed to send inquiry email notification via Resend:', emailErr);
      }
    }

    return NextResponse.json(
      { success: true, message: 'Inquiry sent directly via email' },
      { status: 200 }
    );
  } catch (error) {
    console.error('POST /api/inquiries error:', error);
    return NextResponse.json(
      { error: 'Failed to send inquiry email' },
      { status: 500 }
    );
  }
}
