import nodemailer from "nodemailer";

export interface FormSubmissionPayload {
  formType:
    | "Service Pop-up Booking"
    | "Appointment Booking"
    | "Website Booking Form"
    | "Contact Inquiry"
    | "Callback Request"
    | "Newsletter Subscription"
    | string;
  clientName?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  service?: string;
  date?: string;
  time?: string;
  subject?: string;
  message?: string;
  notes?: string;
  contactMethod?: string;
  bestTime?: string;
  reason?: string;
  sourceUrl?: string;
  extraDetails?: Record<string, unknown>;
}

export async function sendNotificationEmail(payload: FormSubmissionPayload) {
  const host = process.env.ZOHO_SMTP_HOST || "smtppro.zoho.com";
  const port = Number(process.env.ZOHO_SMTP_PORT) || 465;
  const secure = process.env.ZOHO_SMTP_SECURE !== "false";
  const user = process.env.ZOHO_SMTP_USER || "eva@stellrit.com";
  const pass = process.env.ZOHO_SMTP_PASS || "PAcTFwaJ3E6t";
  const recipient = process.env.CONTACT_DELIVERY_EMAIL || "eva@stellrit.com";

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const clientFullName =
    payload.clientName ||
    [payload.firstName, payload.lastName].filter(Boolean).join(" ") ||
    "Website Visitor";

  const emailSubject = `[${payload.formType}] ${clientFullName} - Doussou Quality Braiding`;

  const detailsRows: Array<{ label: string; value: string | undefined }> = [
    { label: "Form Type", value: payload.formType },
    { label: "Client Name", value: clientFullName },
    { label: "Phone Number", value: payload.phone },
    { label: "Email Address", value: payload.email },
    { label: "Requested Service", value: payload.service },
    { label: "Preferred Date", value: payload.date },
    { label: "Preferred Time", value: payload.time },
    { label: "Subject / Topic", value: payload.subject },
    { label: "Preferred Contact Method", value: payload.contactMethod },
    { label: "Best Time to Contact", value: payload.bestTime },
    { label: "Reason for Callback", value: payload.reason },
    { label: "Notes / Special Requests", value: payload.notes || payload.message },
    { label: "Source Page", value: payload.sourceUrl },
  ].filter((row) => row.value != null && String(row.value).trim() !== "");

  const rowsHtml = detailsRows
    .map(
      (r) => `
      <tr>
        <td style="padding: 12px 16px; border-bottom: 1px solid #E8DFC8; font-weight: 700; color: #5C5046; width: 35%; vertical-align: top; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">
          ${r.label}
        </td>
        <td style="padding: 12px 16px; border-bottom: 1px solid #E8DFC8; color: #2B231D; font-size: 14px; font-weight: 500; vertical-align: top;">
          ${r.label.includes("Phone") && payload.phone ? `<a href="tel:${payload.phone}" style="color: #BA1296; font-weight: 700; text-decoration: none;">${r.value}</a>` : r.label.includes("Email") && payload.email ? `<a href="mailto:${payload.email}" style="color: #BA1296; font-weight: 700; text-decoration: none;">${r.value}</a>` : String(r.value).replace(/\n/g, "<br/>")}
        </td>
      </tr>
    `
    )
    .join("");

  const htmlContent = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>${emailSubject}</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #F5F1EB; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #2B231D;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #F5F1EB; padding: 30px 15px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #E8DFC8;">
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #2F0631 0%, #5C105E 50%, #2F0631 100%); padding: 32px 30px; text-align: center; color: #ffffff;">
                  <span style="display: inline-block; background-color: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); color: #F7D272; padding: 4px 14px; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">
                    ✨ Website Notification
                  </span>
                  <h1 style="margin: 0; font-size: 26px; font-weight: 700; letter-spacing: -0.5px; color: #ffffff;">
                    Doussou Quality Braiding
                  </h1>
                  <p style="margin: 6px 0 0; font-size: 14px; color: #FCE0D4;">
                    New submission from <strong>${payload.formType}</strong>
                  </p>
                </td>
              </tr>

              <!-- Content Body -->
              <tr>
                <td style="padding: 28px 24px;">
                  <p style="margin: 0 0 20px; font-size: 15px; line-height: 1.5; color: #5C5046;">
                    Hello Eva, a new form submission was just received on the Doussou Quality Braiding website:
                  </p>

                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border: 1px solid #E8DFC8; border-radius: 14px; overflow: hidden; background-color: #FAF8F5;">
                    ${rowsHtml}
                  </table>

                  <!-- Quick Action Buttons -->
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 26px;">
                    <tr>
                      <td align="center">
                        ${
                          payload.phone
                            ? `<a href="tel:${payload.phone}" style="display: inline-block; background-color: #8E1077; color: #ffffff; padding: 12px 24px; border-radius: 9999px; font-size: 13px; font-weight: 700; text-decoration: none; text-transform: uppercase; letter-spacing: 0.5px; margin: 4px 6px;">
                                📞 Call ${clientFullName}
                              </a>`
                            : ""
                        }
                        ${
                          payload.email
                            ? `<a href="mailto:${payload.email}?subject=Regarding Your Hair Appointment at Doussou Quality Braiding" style="display: inline-block; background-color: #FAF8F5; color: #2B231D; border: 1px solid #E8DFC8; padding: 12px 24px; border-radius: 9999px; font-size: 13px; font-weight: 700; text-decoration: none; text-transform: uppercase; letter-spacing: 0.5px; margin: 4px 6px;">
                                ✉️ Email Client
                              </a>`
                            : ""
                        }
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #FAF8F5; border-top: 1px solid #E8DFC8; padding: 20px 24px; text-align: center; color: #8C7A6B; font-size: 12px; line-height: 1.6;">
                  <p style="margin: 0;">
                    Delivered automatically to <strong>${recipient}</strong> via Zoho Mail SMTP.
                  </p>
                  <p style="margin: 4px 0 0;">
                    Studio Location: 337 S Hospital Dr, Glen Burnie, MD 21061 • (301) 523-8593
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;

  const textLines = detailsRows.map((r) => `${r.label}: ${r.value}`).join("\n");
  const textContent = `New Form Submission: ${payload.formType}\nDoussou Quality Braiding\n\n${textLines}\n\nDelivered to ${recipient}`;

  const info = await transporter.sendMail({
    from: `"Doussou Braiding Website" <${user}>`,
    to: recipient,
    replyTo: payload.email || undefined,
    subject: emailSubject,
    text: textContent,
    html: htmlContent,
  });

  return { success: true, messageId: info.messageId };
}

