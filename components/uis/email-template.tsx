import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
}) => (
  <div>
    <h1>Welcome, {fullName}!</h1>
    <h2>Thank you for getting in touch with us</h2>
    <p>W make is a point to get back to you ASAP.</p>
    <br />
    <p>
      We are specialized in designing and manufacturing special machinery and
      related components to Sugar Industries. We pride ourselve for being in
      this industry for more than 12 years. You took the best decision by
      getting in touch with us for your Industrial needs
    </p>
  </div>
);
