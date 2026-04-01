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
          <p className="text-foreground">Rock Dealer – Handel mit Naturstein, Betonpflaster und Zierkies</p>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge, Lieferungen und Leistungen der Firma Rock Dealer gegenüber Unternehmern (B2B) und Verbrauchern (B2C).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Angebot und Vertragsabschluss</h2>
            <div className="space-y-4">
              <p>Unsere Angebote sind freibleibend und unverbindlich.</p>
              <p>Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung oder Lieferung zustande.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Preise</h2>
            <div className="space-y-4">
              <p>Alle Preise verstehen sich in Euro.</p>
              <p>Für Verbraucher inkl. USt, für Unternehmer zzgl. USt.</p>
              <p>Lieferkosten werden gesondert verrechnet.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Lieferung</h2>
            <div className="space-y-4">
              <p>Liefertermine sind unverbindlich.</p>
              <p>Bei höherer Gewalt kein Schadenersatz.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Beschaffenheit / Abweichungen</h2>
            <div className="space-y-4">
              <p>Farb-, Struktur- und Größenabweichungen sind materialtypisch und kein Mangel.</p>
              <p>Muster sind unverbindlich.</p>
              <p>Reklamationen nach Verlegung ausgeschlossen.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Widerrufsrecht</h2>
            <div className="space-y-4">
              <p>Verbraucher haben 14 Tage Widerrufsrecht.</p>
              <p>Ausgenommen sind Sonderanfertigungen und bereits verarbeitete Ware.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Gefahrenübergang</h2>
            <div className="space-y-4">
              <p>Unternehmer: bei Übergabe an Transporteur</p>
              <p>Verbraucher: bei Übergabe an Kunden</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Zahlung</h2>
            <div className="space-y-4">
              <p>Sofort fällig.</p>
              <p>Bei Verzug: Zinsen und Mahnkosten.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Eigentumsvorbehalt</h2>
            <p>
              Ware bleibt bis zur vollständigen Zahlung Eigentum von Rock Dealer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Gewährleistung</h2>
            <div className="space-y-4">
              <p>Verbraucher: gesetzlich</p>
              <p>Unternehmer: 12 Monate</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Rückgabe</h2>
            <p>Nur nach Vereinbarung.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Gerichtsstand</h2>
            <p>Österreichisches Recht.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">13. Salvatorische Klausel</h2>
            <p>Unwirksamkeit einzelner Punkte berührt nicht den Rest.</p>
          </div>

          <p className="font-bold text-foreground">Stand: 01.04.2026</p>
        </div>
      </section>
      
      <ContactFormSection />
    </main>
  );
}
