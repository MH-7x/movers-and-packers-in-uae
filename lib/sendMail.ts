"use server";
import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";
import { FormDataType } from "@/components/QuoteForm";

// ─── WhatsApp via Meta Cloud API (free) ──────────────────────────────────────
const sendWhatsAppNotification = async (data: FormDataType): Promise<void> => {
  try {
    const token = process.env.WHATSAPP_TOKEN;
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

    if (!token || !phoneNumberId) {
      console.warn("WhatsApp env vars not set — skipping.");
      return;
    }

    const message = [
      `📦 *New Moving Quote Request*`,
      ``,
      `👤 *Name:* ${data.name}`,
      `📞 *Phone:* ${data.phone}`,

      `📍 *From:* ${data.movingFrom}`,
      `📍 *To:* ${data.movingTo}`,
      data.message ? `📝 *Message:* ${data.message}` : ``,

      ``,
      `_Sent from website quote form_`,
    ].join("\n");

    const res = await fetch(
      `https://graph.facebook.com/v19.0/${phoneNumberId}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: "971507745691", // no + sign
          type: "text",
          text: { body: message },
        }),
      },
    );

    const result = await res.json();

    if (!res.ok) {
      console.error("WhatsApp API error:", result);
    } else {
      console.log("WhatsApp sent, message ID:", result.messages?.[0]?.id);
    }
  } catch (err) {
    // Non-blocking — email is never affected
    console.error("WhatsApp notification failed:", err);
  }
};

// ─── Main server action ───────────────────────────────────────────────────────
export const SendMail = async ({
  data,
}: {
  data: FormDataType;
}): Promise<{ success: boolean; error?: string }> => {
  const hasEmptyField = Object.values(data).some((val) => val.trim() === "");
  if (hasEmptyField) {
    return { success: false, error: "All fields are required." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return { success: false, error: "Server configuration error." };
  }

  try {
    const resend = new Resend(apiKey);
    const emailResponse = await resend.emails.send({
      from: "New Quote From Website <onboarding@resend.dev>",
      to: "movers.and.packers.uae91@gmail.com",
      subject: "New Moving Quote Request",
      react: EmailTemplate({ formData: data }),
    });

    if (emailResponse.error) {
      console.error("Email error:", emailResponse.error);
      return { success: false, error: "Failed to send email." };
    }

    console.log("Email sent:", emailResponse.data.id);

    // Fire WhatsApp — isolated, won't block or break email response
    sendWhatsAppNotification(data);

    return { success: true };
  } catch (err) {
    console.error("Unexpected error:", err);
    return { success: false, error: "An unexpected error occurred." };
  }
};
