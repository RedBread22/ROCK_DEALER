import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { 
    getCategoryById, 
    getSubCategoryByIds, 
    getGranitSubCategoryById,
    getGranitProducts,
    granitSubCategoriesData,
    type Product 
} from '@/lib/products';
import { AnimatedText } from '@/components/animated-text';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ContactFormSection } from '@/components/contact-form-section';
import { ProductGridWithModal } from '@/components/product-grid-with-modal';

type PageProps = {
    params: {
        category: string;
        subcategory: string;
        productgroup: string;
    }
}

export async function generateStaticParams() {
    return granitSubCategoriesData.map((sub) => ({
        category: 'natursteine',
        subcategory: 'granit',
        productgroup: sub.id,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = getCategoryById(params.category);
  const subCategory = getSubCategoryByIds(params.category, params.subcategory);
  const productGroup = getGranitSubCategoryById(params.productgroup);

  if (!category || !subCategory || !productGroup) {
    return {
      title: 'Seite nicht gefunden',
    };
  }

  return {
    title: `${productGroup.name} | ${subCategory.name} | ${category.name} | ROCK DEALER`,
    description: productGroup.description,
  };
}

export default function ProductGroupPage({ params }: PageProps) {
    if (params.category !== 'natursteine' || params.subcategory !== 'granit') {
        notFound();
    }
    
    const category = getCategoryById(params.category);
    const subCategory = getSubCategoryByIds(params.category, params.subcategory);
    const productGroup = getGranitSubCategoryById(params.productgroup);

    if (!category || !subCategory || !productGroup) {
        notFound();
    }
    
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Unsere Produkte', href: '/produkte' },
        { label: category.name, href: `/produkte/${category.id}` },
        { label: subCategory.name, href: `/produkte/${category.id}/${subCategory.id}` },
        { label: productGroup.name, href: `/produkte/${category.id}/${subCategory.id}/${productGroup.id}` },
    ];

    const products = getGranitProducts(params.productgroup);

    if (!products) {
        return (
            <div className="py-24 text-center">
                Für diese Kategorie sind derzeit keine Produkte verfügbar.
            </div>
        );
    }

    return (
        <>
            <section className="relative flex min-h-[55vh] flex-col justify-center overflow-hidden border-b border-border py-20 bg-secondary/30">
                <div className="container px-4">
                    <Breadcrumbs items={breadcrumbItems} className="mb-10" />
                    <AnimatedText
                        el="h1"
                        text={productGroup.name}
                        className="font-headline text-5xl md:text-7xl"
                    />
                    <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                        {productGroup.description}
                    </p>
                </div>
            </section>

            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4">
                    <ProductGridWithModal products={products} />
                </div>
            </section>
            
            <ContactFormSection />
        </>
    );
}
