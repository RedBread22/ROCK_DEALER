import { type Metadata } from 'next';
import { AnimatedText } from '@/components/animated-text';
import { ContactFormSection } from '@/components/contact-form-section';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | ROCK DEALER',
  description: 'Datenschutzerklärung von ROCK DEALER.',
};

export default function DatenschutzPage() {
  return (
    <main className="bg-background">
      <section className="relative flex min-h-[55vh] flex-col justify-center overflow-hidden border-b border-border py-20">
        <div className="container px-4">
          <AnimatedText
            el="h1"
            text="Datenschutzerklärung"
            className="font-headline text-5xl md:text-7xl"
          />
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 max-w-3xl space-y-8 text-muted-foreground">
          <h3 className='text-xl text-foreground font-bold'>Datenschutzerklärung</h3>
          <p className="text-foreground">Rock Dealer</p>
          <p className="font-bold text-foreground">Stand: 10.04.2026</p>

          <p>
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2021).
          </p>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Verantwortlicher</h2>
            <div className="space-y-1">
              <p>Rock Dealer</p>
              <p>Kerschbaum 49, 8542 St. Peter im Sulmtal</p>
              <p>E-Mail: office@rock-dealer.com</p>
              <p>Telefon: +43 664 1000290</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Hosting &amp; Server-Logfiles</h2>
            <p>
              Unsere Website wird bei einem europäischen Hosting-Anbieter betrieben. Beim Besuch werden automatisch erfasst: IP-Adresse, Datum &amp; Uhrzeit, aufgerufene Seite, Referrer-URL, Browser &amp; Betriebssystem. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. SSL-/TLS-Verschlüsselung</h2>
            <p>
              Diese Website verwendet SSL-/TLS-Verschlüsselung zur sicheren Datenübertragung.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Anfrageformular</h2>
            <p>
              Über das Anfrageformular werden folgende Daten verarbeitet: Name, E-Mail-Adresse, Telefonnummer, Adresse, gewählte Kategorien, Nachricht. Zweck: Bearbeitung Ihrer Anfrage, Angebotserstellung, Kundenkommunikation. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden nicht ohne Ihre Einwilligung weitergegeben.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookies &amp; Consent-Management</h2>
            <p>
              Technisch notwendige Cookies sind für den Betrieb der Website erforderlich. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Analyse-Cookies werden nur mit Ihrer Einwilligung gesetzt.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Google Analytics</h2>
            <p>
              Wir verwenden Google Analytics 4 der Google Ireland Limited. IP-Anonymisierung ist aktiv. Einsatz nur nach Cookie-Zustimmung. Datenübertragung in die USA möglich (Standardvertragsklauseln). Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Speicherdauer</h2>
            <p>
              Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck erforderlich ist.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf: Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf. Kontakt: office@rock-dealer.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Beschwerderecht</h2>
            <div className="space-y-1">
              <p>Österreichische Datenschutzbehörde</p>
              <p>Barichgasse 40–42, 1030 Wien</p>
              <p>www.dsb.gv.at</p>
            </div>
          </div>
        </div>
      </section>

      <ContactFormSection />
    </main>
  );
}
