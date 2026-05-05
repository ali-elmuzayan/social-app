import nodemailer from "nodemailer";

export const sendEmail = async (to: string, subject: string, text: string) => {
  // define the transporter using SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Select the options
  const mailOptions = {
    from: process.env.EMAIL_FROM, // sender address
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
  };
  // send the mail with the options
  await transporter.sendMail(mailOptions);
};
