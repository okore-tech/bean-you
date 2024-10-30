
 // app/api/send-email.js
import nodemailer from 'nodemailer';

export async function POST(req, res) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail', // Using Gmail as the email service
    auth: {
      user: 'okorewizjoyce@gmail.com', // your email address
      pass: 'WANJIRU01', // your email password
    },
  });

  const mailOptions = {
    from: 'okorewizjoyce@gmail.com', // sender address
    to: 'yourrecipient@example.com', // replace with the receiver's address
    subject: `Message from ${name}`,
    text: `You have received a new message from ${email}: \n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email' });
  }
}


/* eslint-disable no-unused-vars */
