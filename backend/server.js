/**
 * CloudWaveTech Portfolio Contact Form API Server
 *
 * Tech Stack: Node.js, Express, Nodemailer, cors, dotenv
 * Features:
 *  - CORS and JSON middleware
 *  - POST /send endpoint to receive name, email, subject, message
 *  - Empty field validation
 *  - Nodemailer transporter using Gmail SMTP
 *  - HTML owner notification + client auto-reply emails
 *  - Robust crash prevention and error handling
 */

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const https = require('https');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();

// ── Google Sheets Helper ─────────────────────────────────────────────────────
// Sends client data to Google Sheets via Apps Script Web App (uses fetch API).
async function saveToGoogleSheet(data) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK;
  if (!webhookUrl) {
    console.warn('[Sheets] GOOGLE_SHEET_WEBHOOK not set in .env — skipping.');
    return;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      redirect: 'follow'   // automatically follows Google's 302 redirect
    });

    const text = await response.text();

    try {
      const json = JSON.parse(text);
      if (json.success) {
        console.log('[Sheets] ✅ Row appended to Google Sheet successfully.');
      } else {
        console.error('[Sheets] ❌ Apps Script error:', json.error);
      }
    } catch {
      // Response was HTML — log readable error
      const plain = text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
      console.error('[Sheets] ❌ Google error (HTML):', plain.substring(0, 400));
    }
  } catch (err) {
    console.error('[Sheets] ❌ Network error:', err.message);
  }
}
// ─────────────────────────────────────────────────────────────────────────────




// 1. Configure Middlewares
app.use(cors());
app.use(express.json());

// 2. Validate request payload middleware
const validateContactPayload = (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({
      success: false,
      error: 'Validation Failed',
      message: 'Name field is required and cannot be empty.'
    });
  }

  if (!email || !email.trim()) {
    return res.status(400).json({
      success: false,
      error: 'Validation Failed',
      message: 'Email field is required and cannot be empty.'
    });
  }

  // Regular expression for validating standard email formats
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({
      success: false,
      error: 'Validation Failed',
      message: 'Please provide a valid email address.'
    });
  }

  if (!message || !message.trim()) {
    return res.status(400).json({
      success: false,
      error: 'Validation Failed',
      message: 'Message field is required and cannot be empty.'
    });
  }

  next();
};

// 3. POST Endpoint for Contact Form Submission
app.post('/send', validateContactPayload, async (req, res, next) => {
  const { name, email, subject, message } = req.body;
  const submissionTime = new Date().toLocaleString('en-US', { timeZoneName: 'short' });

  // Extract env variables
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass || emailUser.includes('your-email') || emailPass.includes('your-gmail-app-password')) {
    console.error('Error: SMTP credentials have not been configured in the .env file.');
    return res.status(500).json({
      success: false,
      error: 'SMTP Configuration Missing',
      message: 'Server has not been configured with valid Gmail App credentials. Please check back later.'
    });
  }

  // Create transporter with Gmail SMTP + connection timeouts
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass
    },
    connectionTimeout: 30000,  // 30s to establish TCP connection
    greetingTimeout: 30000,    // 30s to receive SMTP greeting
    socketTimeout: 30000       // 30s of inactivity before socket closes
  });

  // Verify SMTP connection before sending
  try {
    await transporter.verify();
    console.log('[Email] SMTP verified successfully.');
  } catch (verifyError) {
    console.error('[Email] SMTP verification failed:', verifyError.message);
    return res.status(500).json({
      success: false,
      error: 'SMTP Verification Failed',
      message: 'Unable to connect to the email server. Please try again later.'
    });
  }

  // Construct Email Contents
  const mailSubject = `CloudWaveTech Lead: ${subject ? subject.trim() : 'New Contact Inquiry'}`;

  // HTML Template for owner inbox
  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Lead Inquiry</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f6f9;
          margin: 0;
          padding: 20px;
          color: #2e384d;
        }
        .card {
          max-width: 600px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border: 1px solid #e1e4e8;
          margin: 20px auto;
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, #1e40af, #0891b2);
          color: #ffffff;
          padding: 24px;
          text-align: center;
        }
        .header h2 {
          margin: 0;
          font-size: 22px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        .content {
          padding: 30px;
        }
        .item {
          margin-bottom: 20px;
          border-bottom: 1px solid #f0f2f5;
          padding-bottom: 15px;
        }
        .item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .label {
          font-size: 11px;
          font-weight: 750;
          text-transform: uppercase;
          color: #6b7280;
          letter-spacing: 1px;
          margin-bottom: 6px;
        }
        .val {
          font-size: 15px;
          color: #1f2937;
          line-height: 1.5;
        }
        .message-text {
          background-color: #f9fafb;
          border-radius: 8px;
          padding: 15px;
          font-size: 14px;
          color: #374151;
          border-left: 4px solid #3b82f6;
          white-space: pre-wrap;
          line-height: 1.6;
        }
        .footer {
          background-color: #f9fafb;
          padding: 15px;
          text-align: center;
          font-size: 11px;
          color: #9ca3af;
          border-top: 1px solid #f0f2f5;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h2>New Form Submission</h2>
        </div>
        <div class="content">
          <div class="item">
            <div class="label">Client Name</div>
            <div class="val"><strong>${name.trim()}</strong></div>
          </div>
          <div class="item">
            <div class="label">Client Email</div>
            <div class="val">
              <a href="mailto:${email.trim()}" style="color: #3b82f6; text-decoration: none; font-weight: 500;">
                ${email.trim()}
              </a>
            </div>
          </div>
          <div class="item">
            <div class="label">Subject</div>
            <div class="val">${subject ? subject.trim() : 'No Subject Provided'}</div>
          </div>
          <div class="item">
            <div class="label">Message</div>
            <div class="message-text">${message.trim()}</div>
          </div>
          <div class="item">
            <div class="label">Submission Time</div>
            <div class="val">${submissionTime}</div>
          </div>
        </div>
        <div class="footer">
          Sent securely via CloudWaveTech Portfolio Contact Form API.
        </div>
      </div>
    </body>
    </html>
  `;

  // Fallback plain text for non-HTML clients
  const textBody = `
CloudWaveTech Contact Form Submission
=====================================

Client Name:     ${name.trim()}
Client Email:    ${email.trim()}
Subject:         ${subject ? subject.trim() : 'No Subject Provided'}
Submission Time: ${submissionTime}

Message:
--------------------------------------------------
${message.trim()}
--------------------------------------------------

--
Sent securely via CloudWaveTech Contact Form API.
  `.trim();

  // Owner notification mail options
  const mailOptions = {
    from: `"CloudWaveTech Contact Form" <${emailUser}>`,
    replyTo: email.trim(),
    to: emailUser,
    subject: mailSubject,
    text: textBody,
    html: htmlBody
  };

  // Auto-reply HTML email for the client
  const clientReplyHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Thank You – CloudWaveTech</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f6f9;
          margin: 0;
          padding: 20px;
          color: #2e384d;
        }
        .card {
          max-width: 600px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border: 1px solid #e1e4e8;
          margin: 20px auto;
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, #1e40af, #0891b2);
          color: #ffffff;
          padding: 32px 24px;
          text-align: center;
        }
        .header h2 {
          margin: 0 0 6px 0;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        .header p {
          margin: 0;
          font-size: 14px;
          opacity: 0.85;
        }
        .content {
          padding: 32px 30px;
        }
        .greeting {
          font-size: 17px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 12px;
        }
        .body-text {
          font-size: 15px;
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .summary-box {
          background-color: #f0f4ff;
          border-radius: 8px;
          padding: 18px 20px;
          border-left: 4px solid #3b82f6;
          margin-bottom: 24px;
        }
        .summary-box .row {
          display: flex;
          margin-bottom: 8px;
          font-size: 14px;
          color: #374151;
        }
        .summary-box .row:last-child {
          margin-bottom: 0;
        }
        .summary-box .lbl {
          font-weight: 700;
          width: 80px;
          flex-shrink: 0;
          color: #1e40af;
        }
        .cta {
          text-align: center;
          margin: 20px 0;
        }
        .cta a {
          display: inline-block;
          background: linear-gradient(135deg, #1e40af, #0891b2);
          color: #ffffff;
          text-decoration: none;
          padding: 12px 28px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.3px;
        }
        .footer {
          background-color: #f9fafb;
          padding: 16px;
          text-align: center;
          font-size: 12px;
          color: #9ca3af;
          border-top: 1px solid #f0f2f5;
        }
        .footer a {
          color: #3b82f6;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h2>☁️ CloudWaveTech</h2>
          <p>We've received your message!</p>
        </div>
        <div class="content">
          <div class="greeting">Hi ${name.trim()},</div>
          <p class="body-text">
            Thank you for reaching out to <strong>CloudWaveTech</strong>! We have successfully received your inquiry and our team will review it shortly.
          </p>
          <p class="body-text">
            We typically respond within <strong>24–48 business hours</strong>. In the meantime, feel free to explore our services or portfolio.
          </p>

          <div class="summary-box">
            <div class="row"><span class="lbl">Subject:</span><span>${subject ? subject.trim() : 'General Inquiry'}</span></div>
            <div class="row"><span class="lbl">Sent on:</span><span>${submissionTime}</span></div>
          </div>

          <div class="cta">
            <a href="https://cloudwavetech.com" target="_blank">Visit Our Website</a>
          </div>

          <p class="body-text" style="font-size:14px; color:#6b7280;">
            If you have any urgent questions, feel free to reply directly to this email and we'll get back to you as soon as possible.
          </p>

          <p class="body-text" style="margin-bottom:0;">
            Warm regards,<br>
            <strong>CloudWaveTech Team</strong>
          </p>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} CloudWaveTech. All rights reserved.<br>
          <a href="mailto:cloudwavetech33@gmail.com">cloudwavetech33@gmail.com</a>
        </div>
      </div>
    </body>
    </html>
  `;

  // Auto-reply plain text fallback
  const clientReplyText = `
Hi ${name.trim()},

Thank you for contacting CloudWaveTech! We have received your inquiry and will get back to you within 24–48 business hours.

Your submission summary:
  Subject:   ${subject ? subject.trim() : 'General Inquiry'}
  Sent on:   ${submissionTime}

If you have any urgent questions, simply reply to this email.

Warm regards,
CloudWaveTech Team
cloudwavetech33@gmail.com
  `.trim();

  // Auto-reply mail options — sent to the client
  const clientReplyOptions = {
    from: `"CloudWaveTech" <${emailUser}>`,
    to: email.trim(),
    subject: `We received your message – CloudWaveTech`,
    text: clientReplyText,
    html: clientReplyHtml
  };

  try {
    // 1. Send notification email to owner
    await transporter.sendMail(mailOptions);
    console.log('[Email] Owner notification email sent successfully.');

    // 2. Send auto-reply confirmation email to client
    await transporter.sendMail(clientReplyOptions);
    console.log(`[Email] Auto-reply confirmation email sent to client: ${email.trim()}`);

    // 3. Save submission to Google Sheet (non-blocking — runs in background)
    saveToGoogleSheet({
      name:    name.trim(),
      email:   email.trim(),
      subject: subject ? subject.trim() : 'No Subject',
      message: message.trim()
    });

    return res.status(200).json({
      success: true,
      message: 'Your inquiry has been successfully transmitted directly to our inbox.'
    });
  } catch (error) {
    console.error('Nodemailer SMTP Error occurred while processing submission:', error);
    return res.status(500).json({
      success: false,
      error: 'SMTP Transmission Failure',
      message: 'An issue occurred while attempting to send email. Please try again later.',
      details: error.message
    });
  }
});

// 4. Global Error Handling Middleware to prevent server crashes
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      success: false,
      error: 'Invalid JSON',
      message: 'The request payload contains invalid JSON formatting.'
    });
  }
  console.error('Unhandled Application Exception caught:', err);
  res.status(500).json({
    success: false,
    error: 'Internal Server Error',
    message: 'An unexpected error occurred on the server. Please try again later.'
  });
});

// 5. Uncaught Exceptions/Rejections listener to ensure server stability
process.on('uncaughtException', (err) => {
  console.error('FATAL: Uncaught Exception raised:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('FATAL: Unhandled Promise Rejection at:', promise, 'reason:', reason);
});

// 6. Bind to Port and Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[CloudWaveTech Backend] Server successfully running on port ${PORT}`);
});
