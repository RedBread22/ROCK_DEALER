import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, categories, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, E-Mail und Nachricht sind Pflichtfelder.' },
        { status: 400 }
      );
    }

    const categoriesText = categories && categories.length > 0
      ? categories.join(', ')
      : 'Keine ausgewählt';

    const { error } = await resend.emails.send({
      from: 'Rock Dealer Website <onboarding@resend.dev>',
      to: 'office@rock-dealer.com',
      subject: `Neue Anfrage von ${name} – Rock Dealer Website`,
      html: `
        <h2>Neue Kontaktanfrage über die Website</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px 16px; font-weight: bold; vertical-align: top;">Name:</td>
            <td style="padding: 8px 16px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 16px; font-weight: bold; vertical-align: top;">E-Mail:</td>
            <td style="padding: 8px 16px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 16px; font-weight: bold; vertical-align: top;">Telefon:</td>
            <td style="padding: 8px 16px;">${phone || '–'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 16px; font-weight: bold; vertical-align: top;">Kategorien:</td>
            <td style="padding: 8px 16px;">${categoriesText}</td>
          </tr>
          <tr>
            <td style="padding: 8px 16px; font-weight: bold; vertical-align: top;">Nachricht:</td>
            <td style="padding: 8px 16px; white-space: pre-line;">${message}</td>
          </tr>
        </table>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'E-Mail konnte nicht gesendet werden.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Ein unerwarteter Fehler ist aufgetreten.' },
      { status: 500 }
    );
  }
}
