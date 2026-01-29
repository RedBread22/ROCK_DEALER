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
                <h2 className="text-2xl font-bold text-foreground mb-2">Angaben gemäß § 5 TMG</h2>
                <p>
                    Max Mustermann<br/>
                    ROCK DEALER<br/>
                    Kerschbaum 49<br/>
                    8542 St. Peter im Sulmtal<br/>
                </p>
            </div>
            
            <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Kontakt</h2>
                <p>
                    Telefon: +43 664 1000290<br/>
                    E-Mail: office@rock-dealer.com
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Umsatzsteuer-ID</h2>
                <p>
                    Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br/>
                    ATU12345678
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p>
                    Max Mustermann<br/>
                    Anschrift wie oben
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Streitschlichtung</h2>
                <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.
                    <br/>
                    Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
            </div>
        </div>
      </section>
      
      <ContactFormSection />
    </main>
  );
}
