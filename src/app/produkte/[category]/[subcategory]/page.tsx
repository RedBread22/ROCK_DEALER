import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { 
    getCategoryById, 
    getSubCategoryByIds, 
    generatePlaceholderProducts, 
    getGartendekoProducts, 
    type Product, 
    granitSubCategoriesData,
    schieferSubCategoriesData,
    lusernaGneisSubCategoriesData,
    productCategories, 
    getTravertinProducts,
    getBrasilQuarzitProducts,
    getTuffProducts,
    getPorphyrProducts,
    getMuschelkalkProducts,
    getZierkiesProducts,
    getStainzerGneisProducts,
    getBetonsteineProducts
} from '@/lib/products';
import { AnimatedText } from '@/components/animated-text';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ContactFormSection } from '@/components/contact-form-section';
import { ProductGridWithModal } from '@/components/product-grid-with-modal';
import { ContentCard } from '@/components/content-card';

export async function generateStaticParams() {
  const params: { category: string; subcategory: string }[] = [];
  productCategories.forEach((category) => {
    if (category.subCategories) {
      category.subCategories.forEach((sub) => {
        params.push({
          category: category.id,
          subcategory: sub.id,
        });
      });
    }
  });
  return params;
}

export async function generateMetadata({ params }: { params: { category: string; subcategory: string } }): Promise<Metadata> {
  const subCategory = getSubCategoryByIds(params.category, params.subcategory);
  const category = getCategoryById(params.category);

  if (params.category === 'natursteine' && params.subcategory === 'brasil-quarzit') {
    return {
      title: 'Brasil Quarzit Naturstein | Rock Dealer',
      description: 'Hochwertiger Brasil Quarzit als Naturstein – ideal für Garten, Mauern und Außenbereiche.',
    };
  }
  
  if (!subCategory || !category) {
    return {
      title: 'Kategorie nicht gefunden',
    };
  }
  return {
    title: `${subCategory.name} | ${category.name} | ROCK DEALER`,
    description: subCategory.description,
  };
}

export default function SubCategoryPage({ params }: { params: { category: string; subcategory: string } }) {
    const category = getCategoryById(params.category);
    const subCategory = getSubCategoryByIds(params.category, params.subcategory);

    if (!category || !subCategory) {
        notFound();
    }
    
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Unsere Produkte', href: '/produkte' },
        { label: category.name, href: `/produkte/${category.id}` },
        { label: subCategory.name, href: `/produkte/${category.id}/${subCategory.id}` },
    ];
    
    // Special handling for Granit to show sub-sub-categories
    if (params.category === 'natursteine' && params.subcategory === 'granit') {
        return (
            <>
                <section className="relative flex min-h-[55vh] flex-col justify-center overflow-hidden border-b border-border py-20 bg-secondary/30">
                    <div className="container px-4">
                        <Breadcrumbs items={breadcrumbItems} className="mb-10" />
                        <AnimatedText
                            el="h1"
                            text={subCategory.name}
                            className="font-headline text-5xl md:text-7xl"
                        />
                        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                            {subCategory.description}
                        </p>
                    </div>
                </section>

                <section className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-4">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {granitSubCategoriesData.map((granitSub) => (
                                <ContentCard
                                    key={granitSub.id}
                                    title={granitSub.name}
                                    description={granitSub.description}
                                    image={granitSub.image}
                                    href={`/produkte/natursteine/granit/${granitSub.id}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                
                <ContactFormSection />
            </>
        );
    }
    
    if (params.category === 'natursteine' && params.subcategory === 'schiefer') {
        return (
            <>
                <section className="relative flex min-h-[55vh] flex-col justify-center overflow-hidden border-b border-border py-20 bg-secondary/30">
                    <div className="container px-4">
                        <Breadcrumbs items={breadcrumbItems} className="mb-10" />
                        <AnimatedText
                            el="h1"
                            text={subCategory.name}
                            className="font-headline text-5xl md:text-7xl"
                        />
                        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                            {subCategory.description}
                        </p>
                    </div>
                </section>

                <section className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-4">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {schieferSubCategoriesData.map((schieferSub) => (
                                <ContentCard
                                    key={schieferSub.id}
                                    title={schieferSub.name}
                                    description={schieferSub.description}
                                    image={schieferSub.image}
                                    href={`/produkte/natursteine/schiefer/${schieferSub.id}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                
                <ContactFormSection />
            </>
        );
    }

    if (params.category === 'natursteine' && params.subcategory === 'luserna-gneis') {
        return (
            <>
                <section className="relative flex min-h-[55vh] flex-col justify-center overflow-hidden border-b border-border py-20 bg-secondary/30">
                    <div className="container px-4">
                        <Breadcrumbs items={breadcrumbItems} className="mb-10" />
                        <AnimatedText
                            el="h1"
                            text={subCategory.name}
                            className="font-headline text-5xl md:text-7xl"
                        />
                        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                            {subCategory.description}
                        </p>
                    </div>
                </section>

                <section className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-4">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {lusernaGneisSubCategoriesData.map((lusernaSub) => (
                                <ContentCard
                                    key={lusernaSub.id}
                                    title={lusernaSub.name}
                                    description={lusernaSub.description}
                                    image={lusernaSub.image}
                                    href={`/produkte/natursteine/luserna-gneis/${lusernaSub.id}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                
                <ContactFormSection />
            </>
        );
    }


    let products: Product[];

    if (params.category === 'gartendeko') {
        const gartendekoProducts = getGartendekoProducts(params.subcategory);
        if (gartendekoProducts && gartendekoProducts.length > 0) {
            products = gartendekoProducts;
        } else {
            products = generatePlaceholderProducts(8);
        }
    } else if (params.category === 'zierkies') {
        const zierkiesProducts = getZierkiesProducts(params.subcategory);
        if (zierkiesProducts && zierkiesProducts.length > 0) {
            products = zierkiesProducts;
        } else {
            products = generatePlaceholderProducts(8);
        }
    } else if (params.category === 'betonsteine') {
        const betonsteineProducts = getBetonsteineProducts(params.subcategory);
        if (betonsteineProducts && betonsteineProducts.length > 0) {
            products = betonsteineProducts;
        } else {
            products = generatePlaceholderProducts(8);
        }
    } else if (params.category === 'natursteine' && params.subcategory === 'travertin') {
        products = getTravertinProducts();
    } else if (params.category === 'natursteine' && params.subcategory === 'brasil-quarzit') {
        products = getBrasilQuarzitProducts();
    } else if (params.category === 'natursteine' && params.subcategory === 'stainzer-gneis') {
        products = getStainzerGneisProducts();
    } else if (params.category === 'natursteine' && params.subcategory === 'tuff') {
        products = getTuffProducts();
    } else if (params.category === 'natursteine' && params.subcategory === 'porphyr') {
        products = getPorphyrProducts();
    } else if (params.category === 'natursteine' && params.subcategory === 'muschelkalk') {
        products = getMuschelkalkProducts();
    }
     else {
        products = generatePlaceholderProducts(8);
    }

    return (
        <>
            <section className="relative flex min-h-[55vh] flex-col justify-center overflow-hidden border-b border-border py-20 bg-secondary/30">
                <div className="container px-4">
                    <Breadcrumbs items={breadcrumbItems} className="mb-10" />
                    <AnimatedText
                        el="h1"
                        text={subCategory.name}
                        className="font-headline text-5xl md:text-7xl"
                    />
                    <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                        {subCategory.description}
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