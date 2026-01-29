import { type Metadata } from 'next';
import { productCategories } from '@/lib/products';
import { ContactFormSection } from '@/components/contact-form-section';
import { AnimatedText } from '@/components/animated-text';
import { ContentCard } from '@/components/content-card';

export const metadata: Metadata = {
  title: 'Unsere Produkte | ROCK DEALER',
  description: 'Steine, Platten & Kies – unser Sortiment im Überblick.',
};

export default function ProduktePage() {
  return (
    <main className="bg-background">
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden border-b border-border py-20 text-center">
        <div className="container px-4">
          <AnimatedText
            el="h1"
            text="Unsere Produkte"
            className="font-headline text-5xl md:text-7xl lg:text-8xl"
          />
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
            Qualität und Vielfalt für Ihr Projekt. Entdecken Sie unser Sortiment an Natursteinen, Betonsteinen, Feinsteinzeug und mehr.
          </p>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <ContentCard 
                key={category.id} 
                title={category.name}
                description={category.description}
                image={category.image}
                href={`/produkte/${category.id}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      <ContactFormSection />
    </main>
  );
}
