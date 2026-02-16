import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { productCategories, getCategoryById, getSubCategoriesByParentId, generatePlaceholderProducts, getFeinsteinzeugProducts, type Product } from '@/lib/products';
import { AnimatedText } from '@/components/animated-text';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ContactFormSection } from '@/components/contact-form-section';
import { ContentCard } from '@/components/content-card';
import { ProductGridWithModal } from '@/components/product-grid-with-modal';

export async function generateStaticParams() {
  return productCategories.map((category) => ({
    category: category.id,
  }));
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = getCategoryById(params.category);
  if (!category) {
    return {
      title: 'Kategorie nicht gefunden',
    };
  }
  return {
    title: `${category.name} | ROCK DEALER`,
    description: category.description,
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
    const category = getCategoryById(params.category);

    if (!category) {
        notFound();
    }
    
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Unsere Produkte', href: '/produkte' },
        { label: category.name, href: `/produkte/${category.id}` },
    ];

    const hasSubCategories = category.subCategories && category.subCategories.length > 0;
    
    const subCategories = hasSubCategories ? getSubCategoriesByParentId(category.id) : [];
    
    let products: Product[] = [];
    if (!hasSubCategories) {
        if (category.id === 'feinsteinzeug') {
            products = getFeinsteinzeugProducts();
        } else {
            products = generatePlaceholderProducts(8);
        }
    }


    return (
        <>
            <section className="relative flex min-h-[55vh] flex-col justify-center overflow-hidden border-b border-border py-20 bg-secondary/30">
                <div className="container px-4">
                    <Breadcrumbs items={breadcrumbItems} className="mb-10" />
                    <AnimatedText
                        el="h1"
                        text={category.name}
                        className="font-headline text-5xl md:text-7xl"
                    />
                    <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                        {category.description}
                    </p>
                </div>
            </section>

            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4">
                    {hasSubCategories ? (
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {subCategories.map((subCategory) => (
                                <ContentCard
                                    key={subCategory.id}
                                    title={subCategory.name}
                                    description={subCategory.description}
                                    image={subCategory.image}
                                    href={`/produkte/${category.id}/${subCategory.id}`}
                                />
                            ))}
                        </div>
                    ) : (
                        <ProductGridWithModal products={products} />
                    )}
                </div>
            </section>
            
            <ContactFormSection />
        </>
    );
}
