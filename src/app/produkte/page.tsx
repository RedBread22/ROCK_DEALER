import { type Metadata } from 'next';
import Image from 'next/image';
import { productCategories } from '@/lib/products';
import { ContactFormSection } from '@/components/contact-form-section';
import { ContentCard } from '@/components/content-card';
import { HighlightCard } from '@/components/highlight-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Unsere Produkte | ROCK DEALER',
  description: 'Steine, Platten & Kies – unser Sortiment im Überblick.',
};

const highlightData = [
  {
    id: 'natursteine',
    title: 'NATURSTEINE',
    description: 'Granit, Gneis, Porphyr & mehr – robuste Materialien für zeitlose Gestaltung.',
    href: '/produkte/natursteine',
  },
  {
    id: 'betonsteine',
    title: 'BETONSTEINE',
    description: 'Pflaster, Mauern, Palisaden – moderne Lösungen für Wege und Außenflächen.',
    href: '/produkte/betonsteine',
  },
  {
    id: 'feinsteinzeug',
    title: 'FEINSTEINZEUG',
    description: 'Pflegeleicht, elegant und langlebig – Platten für Terrasse & Außenbereich.',
    href: '/produkte/feinsteinzeug',
  },
];

export default function ProduktePage() {
  const allCategories = productCategories;
  const gridTopCategories = allCategories.slice(0, 4);
  const gridBottomCategories = allCategories.slice(4);

  const bannerImage = PlaceHolderImages.find(img => img.id === 'products-banner');

  return (
    <>
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightData.map(item => {
                const category = productCategories.find(cat => cat.id === item.id);
                const image = category?.image;
                if (!image) return null;
                return (
                    <HighlightCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        href={item.href}
                        image={image}
                    />
                )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-headline mb-12 text-center md:text-left">Alle Produktkategorien</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {gridTopCategories.map((category) => (
                <ContentCard
                  key={category.id}
                  title={category.name}
                  description={category.description}
                  image={category.image}
                  href={`/produkte/${category.id}`}
                />
              ))}
            </div>
             {gridBottomCategories.length > 0 && (
              <div className="flex justify-center">
                 {gridBottomCategories.map((category) => (
                   <div key={category.id} className="w-full sm:w-1/2 lg:w-1/4">
                    <ContentCard
                      title={category.name}
                      description={category.description}
                      image={category.image}
                      href={`/produkte/${category.id}`}
                    />
                  </div>
                ))}
              </div>
            )}
        </div>
      </section>

      {bannerImage && (
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="relative aspect-[16/6] w-full overflow-hidden rounded-lg">
                    <Image
                        src={bannerImage.imageUrl}
                        alt={bannerImage.description}
                        data-ai-hint={bannerImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
      )}
      
      <ContactFormSection />
    </>
  );
}
