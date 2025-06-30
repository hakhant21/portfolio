'use server'

import nodemailer from 'nodemailer'
import { MailtrapTransport } from "mailtrap"

export async function sendEmail(formData) {
  const { name, email, phone, message } = formData

  // Validate input
  if (!name || !email || !message) {
    return { success: false, error: 'Missing required fields' }
  }

  // Generate HTML email template with Tailwind-inspired styling
  const htmlTemplate = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
  </head>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; line-height: 1.5; color: #374151; background-color: #f3f4f6; padding: 20px 0;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 0.5rem; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #6366f1, #4f46e5); padding: 1.5rem; color: white;">
        <h1 style="margin: 0; font-size: 1.5rem; font-weight: 600;">New Contact Form Submission</h1>
      </div>
      
      <!-- Content -->
      <div style="padding: 1.5rem;">
        <!-- Name -->
        <div style="margin-bottom: 1rem;">
          <span style="display: inline-block; width: 5rem; font-weight: 600; color: #4f46e5;">Name:</span>
          <span>${name}</span>
        </div>
        
        <!-- Email -->
        <div style="margin-bottom: 1rem;">
          <span style="display: inline-block; width: 5rem; font-weight: 600; color: #4f46e5;">Email:</span>
          <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
        </div>
        
        ${phone ? `
        <!-- Phone -->
        <div style="margin-bottom: 1rem;">
          <span style="display: inline-block; width: 5rem; font-weight: 600; color: #4f46e5;">Phone:</span>
          <span>${phone}</span>
        </div>
        ` : ''}
        
        <!-- Message -->
        <div style="margin-bottom: 1rem;">
          <div style="font-weight: 600; color: #4f46e5; margin-bottom: 0.5rem;">Message:</div>
          <div style="background-color: #f9fafb; padding: 1rem; border-radius: 0.375rem; border: 1px solid #e5e7eb; white-space: pre-wrap;">${message}</div>
        </div>
      </div>
      
      <!-- Footer -->
      <div style="padding: 1.5rem; border-top: 1px solid #e5e7eb; text-align: center; font-size: 0.75rem; color: #6b7280;">
        <p style="margin: 0 0 0.5rem 0;">This message was sent from the contact form on your website.</p>
        <p style="margin: 0;">© ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </div>
  </body>
  </html>
  `

  // Configure transporter
  const transporter = nodemailer.createTransport(MailtrapTransport({
    token: process.env.MAILTRAP_TOKEN
  }))

  // Email options
  const mailOptions = {
    from: `"Website Contact" <${process.env.SENDER_EMAIL}>`,
    to: process.env.RECIPIENT_EMAIL,
    subject: `New Contact: ${name} - ${email} from hakhant.site`,
    text: `
      Name: ${name}
      Email: ${email}
      ${phone ? `Phone: ${phone}` : ''}
      Message:
      ${message}
    `,
    html: htmlTemplate
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error: error.message }
  }
}