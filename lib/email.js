"use server";

import { EmailTemplate } from "@/components/uis/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData) => {
  try {
    const personalEmail = process.env.PERSONAL_EMAIL;
    if (!personalEmail) {
      throw new Error("PERSONAL_EMAIL is not defined in environment variables.");
    }

    const personalEmailContent = `
      You received a new contact request:
      - Name: ${emailFormData.fullName}
      - Phone: ${emailFormData.phone}
      - Email: ${emailFormData.email}
      - Message: ${emailFormData.message}
    `;

    const {data, error} = await resend.emails.send({
      from: `New Contact Request from the website <${process.env.RESEND_FROM_EMAIL}>`,
      to: [personalEmail],
      subject: "New Contact Request",
      text: personalEmailContent, 
    });

    if (error) {
      throw error;
    }

    const userConfirmationEmail = await resend.emails.send({
      from: `Abhishek Engg Works <${process.env.RESEND_FROM_EMAIL}>`,
      to: [emailFormData.email],
      subject: "Welcome",
      react: EmailTemplate({ fullName: emailFormData.fullName }),
    });
  
    console.log(userConfirmationEmail);  

    if (userConfirmationEmail.error) {
      throw userConfirmationEmail.error;
    }
    console.log(data);
    return Response.json(data)
    
  } catch (e) {
    console.error("Error sending emails:", e);
    return Response.json({e}, {status: 500});
  }
};
