export const contactEmailTemplate = (data: any) => {
  const { firstName, lastName, email, company, interest, message } = data;

  return `
    <div style="font-family: sans-serif; max-width: 600px; color: #1a1d1b;">
      <h2 style="color: #0f5238;">New Inquiry: F&B Heroes</h2>
      <p>You have a new message from your website contact form.</p>
      <hr />
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Interest:</strong> ${interest}</p>
      <br />
      <p><strong>Message:</strong></p>
      <div style="background: #f4f4f2; padding: 20px; border-radius: 8px;">
        ${message}
      </div>
    </div>
  `;
};
