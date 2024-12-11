import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const admissionData = req.body;

    // Save to database
    const inquiry = await prisma.admissionInquiry.create({
      data: {
        ...admissionData,
        dateOfBirth: new Date(admissionData.dateOfBirth),
      },
    });

    // Send email notification
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Admission Inquiry',
      html: `
        <h2>New Admission Inquiry Received</h2>
        <p><strong>Student Name:</strong> ${admissionData.studentName}</p>
        <p><strong>Grade:</strong> ${admissionData.grade}</p>
        <p><strong>Parent Name:</strong> ${admissionData.parentName}</p>
        <p><strong>Contact:</strong> ${admissionData.email} / ${admissionData.phone}</p>
      `,
    });

    // Send confirmation email to parent
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: admissionData.email,
      subject: 'Admission Inquiry Received - GVM School',
      html: `
        <h2>Thank you for your interest in GVM School</h2>
        <p>We have received your admission inquiry for ${admissionData.studentName}.</p>
        <p>Our admissions team will review your application and contact you shortly.</p>
      `,
    });

    res.status(200).json({ success: true, inquiry });
  } catch (error) {
    console.error('Admission submission error:', error);
    res.status(500).json({ message: 'Error submitting admission inquiry' });
  }
}