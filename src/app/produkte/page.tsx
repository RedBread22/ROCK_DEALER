import { type Metadata } from 'next';
import { productCategories } from '@/lib/products';
import { CategoryCard } from '@/components/category-card';
import { ContactFormSection } from '@/components/contact-form-section';
import { AnimatedText } from '@/components/animated-text';

export const metadata: Metadata = {
  title: 'Unsere Produkte | ROCK DEALER',
  description: 'Steine, Platten & Kies – Ein Überblick über unser Sortiment.',
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
            Steine, Platten & Kies – Ein Überblick über unser Sortiment.
          </p>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
      
      <ContactFormSection />
    </main>
  );
}
