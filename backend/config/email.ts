import nodemailer from "nodemailer";
import { env } from "./env";

export const sendEmail = async (to: string, subject: string, text: string) => {
  // define the transporter using SMTP
  const transporter = nodemailer.createTransport({
    host: env.EMAIL_HOST,
    port: Number(env.EMAIL_PORT),
    secure: env.EMAIL_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: env.EMAIL_USER,
      pass: env.EMAIL_PASSWORD,
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
