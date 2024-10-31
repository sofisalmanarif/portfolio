import { EmailTemplate } from '../../../components/email-template.jsx';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
// console.log(process.env.RESEND_API_KEY)
export async function POST(req) {
  const requestData = await req.json();  // Renamed to avoid conflict
  const { name, email, message } = requestData;
  
  try {
    const response = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['sofisalman9906@gmail.com'],
      subject: `${name}`,
      react: EmailTemplate({ name, email, message }),
    });

    if (response.error) {
      console.log(response.error);
      return NextResponse.json({ error: response.error, message: "Something went wrong" }, { status: 500 });
    }

    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error, message: "Something went wrong" }, { status: 500 });
  }
}
