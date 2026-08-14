import nodemailer from 'nodemailer';
import { Resend } from 'resend';

export interface EmailAttachment {
  filename: string;
  content: Buffer;
  contentType?: string;
}

export interface SendInquiryEmailParams {
  formType: 'quote' | 'vendor' | 'careers' | 'contact';
  fullName: string;
  email: string;
  phone?: string;
  city?: string;
  district?: string;
  category?: string;
  capacity?: string;
  message?: string;
  additionalDetails?: Record<string, string | number | undefined>;
  attachments?: EmailAttachment[];
  publicFileUrl?: string | null;
}

/**
 * Creates and returns a Nodemailer transporter configured for Zoho Mail SMTP.
 */
function getZohoTransporter() {
  const host =
    process.env.ZOHO_SMTP_HOST ||
    process.env.SMTP_HOST ||
    'smtppro.zoho.in'; // Supports Zoho India (smtppro.zoho.in / smtp.zoho.in) and global (smtp.zoho.com)
  const port = parseInt(process.env.ZOHO_SMTP_PORT || process.env.SMTP_PORT || '465', 10);
  const user = process.env.ZOHO_EMAIL || process.env.SMTP_USER || 'info@paasolar.com';
  const pass = process.env.ZOHO_PASSWORD || process.env.SMTP_PASSWORD || '';

  if (!pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for 587
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

/**
 * Sends an email via Zoho SMTP or falls back to Resend / logging.
 */
export async function sendEmail({
  to,
  subject,
  html,
  attachments,
  replyTo,
}: {
  to: string | string[];
  subject: string;
  html: string;
  attachments?: EmailAttachment[];
  replyTo?: string;
}): Promise<{ success: boolean; provider: string; error?: string }> {
  const zohoTransporter = getZohoTransporter();
  const fromAddress = process.env.ZOHO_EMAIL || 'info@paasolar.com';
  const fromHeader = `PAA SOLAR <${fromAddress}>`;

  // 1. Try Zoho Mail SMTP if configured
  if (zohoTransporter) {
    try {
      await zohoTransporter.sendMail({
        from: fromHeader,
        to: Array.isArray(to) ? to.join(', ') : to,
        replyTo: replyTo || fromAddress,
        subject,
        html,
        attachments: attachments?.map((att) => ({
          filename: att.filename,
          content: att.content,
          contentType: att.contentType,
        })),
      });
      return { success: true, provider: 'zoho' };
    } catch (zohoErr: any) {
      console.error('Zoho SMTP send failed, attempting fallback:', zohoErr.message);
    }
  }

  // 2. Fallback to Resend API if available
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey);
      const customFrom = process.env.RESEND_FROM_EMAIL || 'PAA SOLAR <info@paasolar.com>';

      const resendAttachments = attachments?.map((att) => ({
        filename: att.filename,
        content: att.content,
      }));

      const res = await resend.emails.send({
        from: customFrom,
        to: Array.isArray(to) ? to : [to],
        replyTo: replyTo || fromAddress,
        subject,
        html,
        attachments: resendAttachments,
      });

      if (res.error) {
        // Fallback for unverified domains in development
        if (res.error.message.includes('domain')) {
          await resend.emails.send({
            from: 'PAA SOLAR <onboarding@resend.dev>',
            to: Array.isArray(to) ? to : [to],
            replyTo: replyTo || fromAddress,
            subject,
            html,
            attachments: resendAttachments,
          });
        }
      }
      return { success: true, provider: 'resend' };
    } catch (resendErr: any) {
      console.error('Resend fallback send failed:', resendErr.message);
    }
  }

  console.warn('No active email transport configured (Zoho password or Resend key missing). Email payload generated successfully.');
  return { success: true, provider: 'mock' };
}

/**
 * Formats and sends:
 * 1. Admin notification to info@paasolar.com
 * 2. User confirmation email to the applicant / inquirer stating contact within 48 hours.
 */
export async function sendInquiryWorkflows(params: SendInquiryEmailParams) {
  const {
    formType,
    fullName,
    email,
    phone = 'N/A',
    city = 'N/A',
    district = '',
    category,
    capacity,
    message,
    additionalDetails = {},
    attachments = [],
    publicFileUrl,
  } = params;

  const adminEmail = process.env.NOTIFICATION_EMAIL || 'info@paasolar.com';
  const locationStr = district ? `${city}, ${district}` : city;

  // Form type labels & badge colors
  const formTitles = {
    quote: '☀️ Solar Sizing & Subsidy Quote Request',
    vendor: '🤝 Vendor & EPC Partner Registration',
    careers: '💼 Careers & Job Application',
    contact: '📩 Direct Contact / EPC Inquiry',
  };

  const formName = formTitles[formType] || 'Customer Submission';

  // 1. ADMIN NOTIFICATION EMAIL HTML
  const adminSubject = `[${formType.toUpperCase()}] New Submission from ${fullName} (${locationStr})`;

  const detailRows = Object.entries(additionalDetails)
    .filter(([_, val]) => val !== undefined && val !== null && val !== '')
    .map(
      ([key, val]) => `
        <tr>
          <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">${key}</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a; font-size: 13px;">${val}</td>
        </tr>
      `
    )
    .join('');

  const adminHtml = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8" /></head>
    <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      <div style="max-width: 620px; margin: 24px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #047857 0%, #10b981 100%); padding: 28px 24px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.02em;">PAA SOLAR</h1>
          <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.95; font-weight: 500;">${formName}</p>
        </div>

        <div style="padding: 28px 24px; color: #1e293b;">
          <h3 style="margin: 0 0 16px 0; font-size: 16px; color: #0f172a; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">
            👤 Applicant / Inquirer Information
          </h3>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; width: 35%;">Full Name:</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9; font-weight: 700; color: #0f172a; font-size: 14px;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Email Address:</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9; font-size: 13px;">
                <a href="mailto:${email}" style="color: #047857; font-weight: 600; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Phone Number:</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9; font-size: 13px;">
                <a href="tel:${phone}" style="color: #047857; font-weight: 600; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Location:</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 13px;">${locationStr}</td>
            </tr>
            ${category ? `<tr><td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Category / Role:</td><td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a; font-size: 13px;">${category}</td></tr>` : ''}
            ${capacity ? `<tr><td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Estimated Capacity:</td><td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #047857; font-size: 13px;">${capacity}</td></tr>` : ''}
          </table>

          ${
            detailRows
              ? `
            <h3 style="margin: 24px 0 16px 0; font-size: 16px; color: #0f172a; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">
              ⚡ Submission Specifications
            </h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              ${detailRows}
            </table>
          `
              : ''
          }

          ${
            message
              ? `
            <h3 style="margin: 24px 0 12px 0; font-size: 16px; color: #0f172a; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">
              📝 Message / Overview
            </h3>
            <div style="padding: 16px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; font-size: 13px; line-height: 1.6; color: #334155;">
              ${message}
            </div>
          `
              : ''
          }

          ${
            attachments.length > 0
              ? `
            <div style="margin-top: 24px; padding: 16px; background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 12px;">
              <h4 style="margin: 0 0 6px 0; color: #065f46; font-size: 14px;">📎 Attached Documents (${attachments.length})</h4>
              <p style="margin: 0; font-size: 12px; color: #047857;">
                ${attachments.map((a) => `<strong>${a.filename}</strong>`).join(', ')} attached to this email.
              </p>
              ${publicFileUrl ? `<p style="margin: 8px 0 0 0; font-size: 12px;"><a href="${publicFileUrl}" target="_blank" style="color: #047857; font-weight: bold; text-decoration: underline;">View Online Document</a></p>` : ''}
            </div>
          `
              : ''
          }
        </div>

        <!-- Footer -->
        <div style="background-color: #f8fafc; padding: 16px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
          PAA SOLAR Global Portal • EKCHAKRA GROUP
        </div>
      </div>
    </body>
    </html>
  `;

  // 2. USER CONFIRMATION EMAIL (We'll contact within 48 hours)
  const userSubject = `Thank you for contacting PAA SOLAR — We will reach out within 48 hours`;

  const userHtml = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8" /></head>
    <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      <div style="max-width: 600px; margin: 24px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
        
        <!-- Brand Header -->
        <div style="background: linear-gradient(135deg, #047857 0%, #10b981 50%, #059669 100%); padding: 32px 24px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 26px; font-weight: 900; letter-spacing: -0.03em;">PAA SOLAR</h1>
          <p style="margin: 6px 0 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 600; opacity: 0.95;">
            Blessing from this generation to next generation
          </p>
        </div>

        <!-- Body Content -->
        <div style="padding: 32px 24px; color: #1e293b; line-height: 1.6;">
          <h2 style="margin: 0 0 16px 0; font-size: 20px; color: #0f172a; font-weight: 700;">
            Dear ${fullName},
          </h2>

          <p style="font-size: 15px; color: #334155; margin: 0 0 16px 0;">
            Thank you for reaching out to <strong>PAA SOLAR (EKCHAKRA GROUP)</strong>. We have successfully received your submission for <strong>${formName}</strong>.
          </p>

          <!-- 48-Hour Guarantee Banner -->
          <div style="margin: 24px 0; padding: 20px; background-color: #ecfdf5; border: 1px solid #10b981; border-radius: 12px; text-align: center;">
            <p style="margin: 0; font-size: 16px; font-weight: 700; color: #065f46;">
              ⏱️ We will review your details and contact you within 48 hours.
            </p>
            <p style="margin: 6px 0 0 0; font-size: 13px; color: #047857;">
              Our dedicated engineering and project management desk is reviewing your requirements to provide the most optimal long-term solar solution.
            </p>
          </div>

          <!-- Summary Box -->
          <div style="margin: 24px 0; padding: 18px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px;">
            <h4 style="margin: 0 0 10px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">
              Submission Summary
            </h4>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <tr>
                <td style="padding: 4px 0; color: #64748b;">Reference Form:</td>
                <td style="padding: 4px 0; font-weight: 600; color: #0f172a;">${formName}</td>
              </tr>
              ${category ? `<tr><td style="padding: 4px 0; color: #64748b;">Category:</td><td style="padding: 4px 0; font-weight: 600; color: #0f172a;">${category}</td></tr>` : ''}
              ${locationStr ? `<tr><td style="padding: 4px 0; color: #64748b;">Location:</td><td style="padding: 4px 0; font-weight: 600; color: #0f172a;">${locationStr}</td></tr>` : ''}
            </table>
          </div>

          <p style="font-size: 14px; color: #475569; margin: 0 0 24px 0;">
            If you need urgent assistance or wish to speak to our project coordinators right away, feel free to reply directly to this email or connect on our official channels:
          </p>

          <!-- Contact Options -->
          <div style="margin: 20px 0; display: flex; gap: 12px;">
            <div style="padding: 14px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; font-size: 13px;">
              <strong style="color: #0f172a; display: block; margin-bottom: 4px;">📧 Direct Email:</strong>
              <a href="mailto:info@paasolar.com" style="color: #047857; text-decoration: none; font-weight: 600;">info@paasolar.com</a>
            </div>
          </div>

          <div style="margin-top: 32px; border-top: 1px solid #f1f5f9; padding-top: 20px;">
            <p style="margin: 0; font-size: 14px; font-weight: 700; color: #0f172a;">Warm regards,</p>
            <p style="margin: 4px 0 0 0; font-size: 13px; color: #64748b;">The PAA SOLAR Team</p>
            <p style="margin: 2px 0 0 0; font-size: 12px; color: #94a3b8;">EKCHAKRA GROUP • Jaipur, Rajasthan, India</p>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f8fafc; padding: 16px 24px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0;">© ${new Date().getFullYear()} PAA SOLAR. All rights reserved.</p>
          <p style="margin: 4px 0 0 0;">Visit our portal at <a href="https://paasolar.com" style="color: #047857; text-decoration: none;">paasolar.com</a></p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Send both emails concurrently
  const [adminResult, userResult] = await Promise.allSettled([
    sendEmail({
      to: adminEmail,
      subject: adminSubject,
      html: adminHtml,
      attachments,
      replyTo: email,
    }),
    sendEmail({
      to: email,
      subject: userSubject,
      html: userHtml,
      replyTo: adminEmail,
    }),
  ]);

  return {
    adminSent: adminResult.status === 'fulfilled' && adminResult.value.success,
    userSent: userResult.status === 'fulfilled' && userResult.value.success,
  };
}
