import nodemailer from 'nodemailer';

export const mailer = nodemailer.createTransport({
  host: process.env.SMTP_HOST!,
  port: Number(process.env.SMTP_PORT || 587),
  secure: true,
  auth: {
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
  },
});

export async function sendVerificationEmail(email: string, token: string) {
  const url = `${process.env.APP_URL}/api/auth/verify?token=${encodeURIComponent(token)}`;
  const from = process.env.EMAIL_FROM!;
  await mailer.sendMail({
    from,
    to: email,
    subject: 'Verify your email',
    html: `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;">
        <h2>Verify your email</h2>
        <p>Click the button below to verify your account and start playing:</p>
        <p><a href="${url}" style="display:inline-block;padding:10px 16px;background:#3b82f6;color:#fff;border-radius:6px;text-decoration:none">Verify Email</a></p>
        <p>If the button doesn't work, copy this link:</p>
        <p><code>${url}</code></p>
      </div>
    `,
  });
}
