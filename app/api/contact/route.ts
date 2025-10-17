import { NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
  captcha?: string;
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, captcha }: ContactPayload = await request.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret) {
      const captchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${recaptchaSecret}&response=${captcha ?? ''}`
      });
      const captchaResult = await captchaResponse.json();
      if (!captchaResult.success) {
        return NextResponse.json({ error: 'Captcha validation failed' }, { status: 400 });
      }
    }

    const emailServiceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const apiKey = process.env.EMAILJS_API_KEY;

    if (!emailServiceId || !templateId || !apiKey) {
      console.warn('EmailJS environment variables are missing.');
      return NextResponse.json({ success: true });
    }

    const emailPayload = {
      service_id: emailServiceId,
      template_id: templateId,
      user_id: apiKey,
      template_params: {
        from_name: name,
        reply_to: email,
        phone,
        message
      }
    };

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailPayload)
    });

    if (!response.ok) {
      console.error('EmailJS error', await response.text());
      return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
