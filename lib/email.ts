"use server";

import { EmailTemplate } from "@/components/uis/email-template";
import { Resend } from "resend";
import { z } from "zod";
import { formSchema } from "./schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    const personalEmail = process.env.PERSONAL_EMAIL;
    if (!personalEmail) {
      throw new Error("PERSONAL_EMAIL is not defined in environment variables.");
    }

    const personalEmailContent = `
      You received a new contact request:
      - Name: ${emailFormData.fullName}
      - Email: ${emailFormData.email}
      - Message: ${emailFormData.message}
    `;

    const personalEmailResponse = await resend.emails.send({
      from: `Acme <${process.env.RESEND_FROM_EMAIL}>`,
      to: [personalEmail],
      subject: "New Contact Request",
      text: personalEmailContent, 
    });

    if (personalEmailResponse.error) {
      throw personalEmailResponse.error;
    }

    const userConfirmationEmail = await resend.emails.send({
      from: `Acme <${process.env.RESEND_FROM_EMAIL}>`,
      to: [emailFormData.email],
      subject: "Welcome",
      react: EmailTemplate({ fullName: emailFormData.fullName }),
    });

    if (userConfirmationEmail.error) {
      throw userConfirmationEmail.error;
    }
  } catch (e) {
    console.error("Error sending emails:", e);
    throw e;
  }
};
