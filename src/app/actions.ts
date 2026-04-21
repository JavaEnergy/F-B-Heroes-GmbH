"use server";

import { contactEmailTemplate } from "@/lib/email-templates";
import transporter from "@/lib/mail";

export async function sendContactEmail(formData: any) {
  try {
    const htmlBody = contactEmailTemplate(formData);

    await transporter.sendMail({
      from: `"F&B Heroes Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: formData.email,
      subject: `New Inquiry from ${formData.firstName} ${formData.lastName}`,
      html: htmlBody,
    });

    return { success: true };
  } catch (error) {
    console.error("Mail Error:", error);
    return { success: false, error: "Failed to send email." };
  }
}
