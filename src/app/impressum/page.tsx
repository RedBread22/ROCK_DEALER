import { type Metadata } from 'next';
import { AnimatedText } from '@/components/animated-text';
import { ContactFormSection } from '@/components/contact-form-section';

export const metadata: Metadata = {
  title: 'Impressum | ROCK DEALER',
  description: 'Impressum und rechtliche Hinweise für ROCK DEALER.',
};

export default function ImpressumPage() {
  return (
    <main className="bg-background">
      <section className="relative flex min-h-[50vh] flex-col justify-center overflow-hidden border-b border-border py-20">
        <div className="container px-4">
          <AnimatedText
            el="h1"
            text="Impressum"
            className="font-headline text-5xl md:text-7xl"
          />
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 max-w-3xl space-y-8 text-muted-foreground">
            <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Angaben gemäß § 5 ECG, § 14 UGB, § 63 GewO sowie Offenlegung gemäß § 25 MedienG</h2>
                <p>
                    <strong>Medieninhaber & Diensteanbieter</strong><br/>
                    Rock-Dealer e.U.<br/>
                    Inhaber: Georg Reinhold Peter<br/>
                    Kerschbaum 49, 8542 St. Peter im Sulmtal, Österreich
                </p>
                <p className="mt-4">
                    <strong>Unternehmensgegenstand:</strong> Handel (Steinhandel)<br/>
                    <strong>UID-Nr.:</strong> ATU67902166
                </p>
            </div>
            
            <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Kontakt</h2>
                <p>
                    <strong>Tel.:</strong> +43 664 1000290<br/>
                    <strong>E-Mail:</strong> office@rock-dealer.com
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Mitgliedschaften</h2>
                <p>
                    Mitglied der Wirtschaftskammer Österreich (WKO)
                </p>
            </div>
            
            <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Aufsichtsbehörde / Gewerbebehörde</h2>
                <p>
                    Bezirkshauptmannschaft Deutschlandsberg
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Anwendbare Rechtsvorschriften</h2>
                <p>
                    Gewerbeordnung (GewO): abrufbar über das Rechtsinformationssystem des Bundes (RIS).
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Blattlinie (gemäß § 25 MedienG)</h2>
                <p>
                    Information über das Unternehmen sowie Darstellung von Produkten/Leistungen und Kontaktmöglichkeit.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Online-Streitbeilegung / Verbraucherstreitbeilegung</h2>
                <p>
                    Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten:<br/>
                    <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>
                </p>
                 <p className="mt-4">
                    Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Haftung für Inhalte</h2>
                <p>
                    Wir erstellen die Inhalte dieser Website mit größtmöglicher Sorgfalt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir – soweit gesetzlich zulässig – keine Haftung.
                </p>
            </div>
            
            <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Haftung für Links</h2>
                <p>
                    Diese Website enthält Links zu externen Websites. Für deren Inhalte übernehmen wir keine Haftung. Bei Bekanntwerden rechtswidriger Inhalte werden betroffene Links umgehend entfernt.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Urheberrecht</h2>
                <p>
                    Die Inhalte dieser Website (Texte, Bilder, Grafiken) sind urheberrechtlich geschützt. Jede Verwendung bedarf der vorherigen Zustimmung, sofern nicht gesetzlich zulässig.
                </p>
            </div>
        </div>
      </section>
      
      <ContactFormSection />
    </main>
  );
}
