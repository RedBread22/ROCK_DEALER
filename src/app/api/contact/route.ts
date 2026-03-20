import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;
const resend = new Resend(apiKey);

export async function POST(request: Request) {
  try {
    // API Key prüfen
    if (!apiKey) {
      console.error('[Contact API] RESEND_API_KEY ist nicht gesetzt!');
      return NextResponse.json(
        { error: 'Server-Konfigurationsfehler: API-Key fehlt.' },
        { status: 500 }
      );
    }
    console.log(`[Contact API] RESEND_API_KEY vorhanden (${apiKey.substring(0, 8)}...)`);

    const body = await request.json();
    const { name, email, phone, categories, message } = body;
    console.log('[Contact API] Request body:', { name, email, phone, categories, message: message?.substring(0, 50) });

    if (!name || !email || !message) {
      console.error('[Contact API] Pflichtfelder fehlen:', { name: !!name, email: !!email, message: !!message });
      return NextResponse.json(
        { error: 'Name, E-Mail und Nachricht sind Pflichtfelder.' },
        { status: 400 }
      );
    }

    const categoriesText = categories && categories.length > 0
      ? categories.join(', ')
      : 'Keine ausgewählt';

    const emailPayload = {
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
    };
    console.log('[Contact API] Sende E-Mail:', { from: emailPayload.from, to: emailPayload.to, subject: emailPayload.subject });

    const { data, error } = await resend.emails.send(emailPayload);

    if (error) {
      console.error('[Contact API] Resend Fehler:', JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: 'E-Mail konnte nicht gesendet werden.', details: error },
        { status: 500 }
      );
    }

    console.log('[Contact API] E-Mail erfolgreich gesendet:', data);
    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('[Contact API] Unerwarteter Fehler:', err instanceof Error ? { message: err.message, stack: err.stack } : err);
    return NextResponse.json(
      { error: 'Ein unerwarteter Fehler ist aufgetreten.', details: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}
