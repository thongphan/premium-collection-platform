import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendActivationEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: [email],
    subject: 'Activate your Account',
    html: `<p>Click <a href="your-vercel-link.com/auth/confirm?token=${token}">here</a> to activate.</p>`,
  });
};