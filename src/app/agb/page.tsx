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
          <h3 className='text-xl text-foreground font-bold'>Allgemeine Geschäftsbedingungen (AGB) – Rock-Dealer e.U.</h3>
          <p className="font-bold text-foreground">Stand: [Datum eintragen]</p>
          
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung der Website von Rock-Dealer e.U. (nachfolgend „Betreiber“).
              Die Website dient der Information über Produkte, Leistungen und Referenzen sowie der Kontaktaufnahme. Ein Online-Shop wird nicht betrieben.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Inhalte der Website / Unverbindlichkeit</h2>
            <div className="space-y-4">
              <p>(1) Alle Inhalte (Texte, Bilder, Produktdarstellungen, technische Angaben etc.) dienen der allgemeinen Information und stellen kein verbindliches Angebot dar.</p>
              <p>(2) Produktverfügbarkeiten, Ausführungen und sonstige Angaben können sich ändern. Irrtümer, Tippfehler und Änderungen bleiben vorbehalten.</p>
              <p>(3) Verbindliche Angebote, Preise, Lieferbedingungen und Vertragsabschlüsse erfolgen ausschließlich individuell (z. B. per E-Mail/Telefon) außerhalb der Website.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Kontaktanfragen</h2>
            <div className="space-y-4">
              <p>(1) Wenn Sie über das Kontaktformular oder per E-Mail/Telefon anfragen, kommt dadurch noch kein Vertrag zustande.</p>
              <p>(2) Der Betreiber kann Anfragen ohne Angabe von Gründen ablehnen.</p>
              <p>(3) Die Bearbeitung erfolgt im Rahmen der betrieblichen Möglichkeiten.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Nutzungsrechte / Urheberrecht</h2>
            <div className="space-y-4">
              <p>(1) Sämtliche Inhalte der Website (insbesondere Texte, Fotos, Grafiken, Logos) sind urheberrechtlich geschützt.</p>
              <p>(2) Jede Verwendung, Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des Betreibers.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Verlinkungen zu Drittanbietern</h2>
            <p>
              Diese Website kann Links zu externen Websites enthalten. Für deren Inhalte ist stets der jeweilige Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung waren keine rechtswidrigen Inhalte erkennbar. Bei Bekanntwerden rechtswidriger Inhalte werden solche Links umgehend entfernt.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Haftung</h2>
            <div className="space-y-4">
              <p>(1) Der Betreiber haftet für Schäden nur bei Vorsatz und grober Fahrlässigkeit.</p>
              <p>(2) Bei leichter Fahrlässigkeit haftet der Betreiber nur für die Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) und nur in Höhe des typischerweise vorhersehbaren Schadens.</p>
              <p>(3) Eine Haftung für indirekte Schäden, Folgeschäden, entgangenen Gewinn oder Datenverlust ist – soweit gesetzlich zulässig – ausgeschlossen.</p>
              <p>(4) Für die ständige Verfügbarkeit der Website und die Fehlerfreiheit der Inhalte wird keine Gewähr übernommen.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Datenschutz</h2>
            <p>
              Informationen zur Verarbeitung personenbezogener Daten finden Sie in der Datenschutzerklärung auf dieser Website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Änderungen dieser AGB</h2>
            <p>
              Der Betreiber kann diese AGB bei Bedarf anpassen (z. B. bei rechtlichen Änderungen oder Erweiterungen der Website). Es gilt die jeweils auf der Website veröffentlichte Fassung.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Anwendbares Recht / Gerichtsstand</h2>
            <div className="space-y-4">
              <p>(1) Es gilt österreichisches Recht unter Ausschluss der Verweisungsnormen und des UN-Kaufrechts.</p>
              <p>(2) Sofern kein zwingender Gerichtsstand (z. B. nach Konsumentenschutzrecht) entgegensteht, ist für Streitigkeiten der Sitz des Betreibers zuständig.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Kontakt</h2>
            <p>
              Rock-Dealer e.U. – Georg Reinhold Peter<br/>
              Kerschbaum 49, 8542 St. Peter im Sulmtal, Österreich<br/>
              E-Mail: office@rock-dealer.com | Tel.: +43 664 1000290
            </p>
          </div>
        </div>
      </section>
      
      <ContactFormSection />
    </main>
  );
}
