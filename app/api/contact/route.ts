import "@/lib/env";
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    let body: { name?: string, email?: string, message?: string, _gotcha?: string }
    try {
        body = await req.json()
    }
    catch {
        return NextResponse.json({ error: 'invalid' }, { status: 400 })
    }

    const { name, email, message, _gotcha } = body

    if (_gotcha) {
        return NextResponse.json({ ok: true })
    }

    if (!name || !email || !message || !/\S+@\S+\.\S+/.test(email)) {
        return NextResponse.json({ error: 'invalid' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
        from: 'contact@send.pavlokhilmon.com',
        to: process.env.CONTACT_EMAIL!,
        replyTo: email,
        subject: `Portfolio contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
        return NextResponse.json({ error: 'send_failed' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
}

