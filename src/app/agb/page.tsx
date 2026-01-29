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
      <section className="relative flex min-h-[50vh] flex-col justify-center overflow-hidden border-b border-border py-20">
        <div className="container px-4">
          <AnimatedText
            el="h1"
            text="Allgemeine Geschäftsbedingungen"
            className="font-headline text-5xl md:text-7xl"
          />
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-lg text-muted-foreground">
              Inhalt folgt in Kürze.
            </p>
        </div>
      </section>
      
      <ContactFormSection />
    </main>
  );
}
