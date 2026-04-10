import { type Metadata } from 'next';
import { AnimatedText } from '@/components/animated-text';
import { ContactFormSection } from '@/components/contact-form-section';

export const metadata: Metadata = {
  title: 'AGB | ROCK DEALER',
  description: 'Allgemeine Geschäftsbedingungen von ROCK DEALER.',
};

export default function AGBPage() {
  return (
    <main className="bg-background">
      <section className="relative flex min-h-[55vh] flex-col justify-center overflow-hidden border-b border-border py-20">
        <div className="container px-4">
          <AnimatedText
            el="h1"
            text="Allgemeine Geschäftsbedingungen"
            className="font-headline text-5xl md:text-7xl"
          />
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 max-w-3xl space-y-8 text-muted-foreground">
          <h3 className='text-xl text-foreground font-bold'>Allgemeine Geschäftsbedingungen (AGB)</h3>
          <p className="text-foreground">Rock Dealer</p>
          <p className="font-bold text-foreground">Stand: 10.04.2026</p>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Geltungsbereich</h2>
            <p>
              Diese AGB gelten für alle Verträge zwischen Rock Dealer und Kunden (B2C &amp; B2B).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Angebot &amp; Vertragsabschluss</h2>
            <p>
              Angebote sind unverbindlich. Vertrag entsteht durch Auftragsbestätigung oder Lieferung der Ware.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Preise</h2>
            <p>
              Alle Preise in Euro. Verbraucher: inkl. USt. Unternehmer: zzgl. USt. Lieferkosten werden gesondert ausgewiesen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Zahlung</h2>
            <p>
              Rechnungen sind sofort fällig. Bei Verzug: gesetzliche Verzugszinsen und Mahnkosten. Rock Dealer behält sich vor, Lieferungen bis zur Zahlung zurückzuhalten.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Lieferung</h2>
            <p>
              Liefertermine unverbindlich. Teillieferungen zulässig. Höhere Gewalt schließt Schadenersatz aus.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Gefahrenübergang</h2>
            <div className="space-y-4">
              <p>Unternehmer: bei Übergabe an Transporteur.</p>
              <p>Verbraucher: bei Übergabe an Kunden.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Eigentumsvorbehalt</h2>
            <p>
              Die Ware bleibt bis zur vollständigen Bezahlung Eigentum von Rock Dealer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Beschaffenheit &amp; Materialeigenschaften</h2>
            <p>
              Naturprodukte weisen typische Eigenschaften auf: Farbabweichungen, Strukturunterschiede, Maßtoleranzen. Diese stellen keinen Mangel dar. Muster dienen nur als Orientierung. Reklamationen nach Verlegung oder Verarbeitung sind ausgeschlossen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Gewährleistung</h2>
            <p>
              Verbraucher: gesetzlich (2 Jahre). Unternehmer: 12 Monate. Offensichtliche Mängel müssen vor Verarbeitung gemeldet werden.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Widerrufsrecht (nur Verbraucher)</h2>
            <p>
              Verbraucher haben 14 Tage Widerrufsrecht. Ausnahmen: Sonderanfertigungen, bereits verarbeitete/verlegte Ware.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Rückgabe</h2>
            <p>Rückgaben nur nach vorheriger Vereinbarung.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Haftung</h2>
            <p>
              Rock Dealer haftet nur für Vorsatz und grobe Fahrlässigkeit. Keine Haftung für Folgeschäden oder unsachgemäße Verarbeitung durch Kunden.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">13. Datenschutz</h2>
            <p>Es gilt die Datenschutzerklärung der Website.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">14. Gerichtsstand &amp; Recht</h2>
            <p>Österreichisches Recht. Gerichtsstand: zuständiges Gericht am Unternehmenssitz.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">15. Schlussbestimmungen</h2>
            <p>Sollte eine Bestimmung unwirksam sein, bleibt der Rest gültig.</p>
          </div>
        </div>
      </section>

      <ContactFormSection />
    </main>
  );
}
