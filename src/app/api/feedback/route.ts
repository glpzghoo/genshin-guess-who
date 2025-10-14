import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { issue, character, voiceLineText, audioSrc, userAgent, timestamp } =
      await request.json();

    if (!issue || !character || !voiceLineText) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: `"${process.env.EMAIL_FROM}" <${process.env.SMTP_USER}>`,
      to: process.env.PERSONAL_MAIL,
      subject: `VoiceLine Feedback: ${issue} - ${character}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            VoiceLine Feedback Report
          </h2>

          <div style="background-color: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="color: #495057; margin-top: 0;">Issue Details</h3>
            <p><strong>Issue Type:</strong> ${issue}</p>
            <p><strong>Character:</strong> ${character}</p>
            <p><strong>Voice Line Text:</strong> "${voiceLineText}"</p>
            <p><strong>Audio Source:</strong> ${audioSrc || 'Not available'}</p>
          </div>

          <div style="background-color: #fff3cd; padding: 15px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #ffc107;">
            <h4 style="color: #856404; margin-top: 0;">Technical Information</h4>
            <p><strong>Timestamp:</strong> ${new Date(timestamp).toLocaleString()}</p>
            <p><strong>User Agent:</strong> ${userAgent}</p>
          </div>

          <div style="background-color: #d1ecf1; padding: 15px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #17a2b8;">
            <h4 style="color: #0c5460; margin-top: 0;">Action Required</h4>
            <p>Please investigate this voice line issue and take appropriate action:</p>
            <ul>
              <li>Verify the audio file exists and is accessible</li>
              <li>Check if the voice line matches the character</li>
              <li>Test audio playback functionality</li>
              <li>Update voice line database if necessary</li>
            </ul>
          </div>

          <hr style="border: none; border-top: 1px solid #dee2e6; margin: 30px 0;">

          <p style="color: #6c757d; font-size: 12px;">
            This feedback was submitted from the Genshin GW application.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Feedback sent successfully',
    });
  } catch (error) {
    console.error('Failed to send feedback email:', error);
    return NextResponse.json(
      { error: 'Failed to send feedback' },
      { status: 500 }
    );
  }
}
