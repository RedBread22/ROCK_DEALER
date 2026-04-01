import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
    getCategoryById,
    getSubCategoryByIds,
    getGranitSubCategoryById,
    getGranitProducts,
    granitSubCategoriesData,
    getSchieferSubCategoryById,
    getSchieferProducts,
    schieferSubCategoriesData,
    lusernaGneisSubCategoriesData,
    getLusernaGneisSubCategoryById,
    getLusernaGneisProducts,
    tuffSubCategoriesData,
    getTuffSubCategoryById,
    getTuffProducts,
    muschelkalkSubCategoriesData,
    getMuschelkalkSubCategoryById,
    getMuschelkalkProducts,
    stainzerGneisSubCategoriesData,
    getStainzerGneisSubCategoryById,
    getStainzerGneisProducts,
    porphyrSubCategoriesData,
    getPorphyrSubCategoryById,
    getPorphyrProducts,
    type Product
} from '@/lib/products';
import { AnimatedText } from '@/components/animated-text';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ContactFormSection } from '@/components/contact-form-section';
import { ProductGridWithModal } from '@/components/product-grid-with-modal';
import { ProductNoticeBanner } from '@/components/product-notice-banner';

type PageProps = {
    params: {
        category: string;
        subcategory: string;
        productgroup: string;
    }
}

export async function generateStaticParams() {
    const granitParams = granitSubCategoriesData.map((sub) => ({
        category: 'natursteine',
        subcategory: 'granit',
        productgroup: sub.id,
    }));

    const schieferParams = schieferSubCategoriesData.map((sub) => ({
        category: 'natursteine',
        subcategory: 'schiefer',
        productgroup: sub.id,
    }));

    const lusernaParams = lusernaGneisSubCategoriesData.map((sub) => ({
        category: 'natursteine',
        subcategory: 'luserna-gneis',
        productgroup: sub.id,
    }));

    const tuffParams = tuffSubCategoriesData.map((sub) => ({
        category: 'natursteine',
        subcategory: 'tuff',
        productgroup: sub.id,
    }));

    const muschelkalkParams = muschelkalkSubCategoriesData.map((sub) => ({
        category: 'natursteine',
        subcategory: 'muschelkalk',
        productgroup: sub.id,
    }));

    const stainzerGneisParams = stainzerGneisSubCategoriesData.map((sub) => ({
        category: 'natursteine',
        subcategory: 'stainzer-gneis',
        productgroup: sub.id,
    }));

    const porphyrParams = porphyrSubCategoriesData.map((sub) => ({
        category: 'natursteine',
        subcategory: 'porphyr',
        productgroup: sub.id,
    }));

    return [...granitParams, ...schieferParams, ...lusernaParams, ...tuffParams, ...muschelkalkParams, ...stainzerGneisParams, ...porphyrParams];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = getCategoryById(params.category);
  const subCategory = getSubCategoryByIds(params.category, params.subcategory);
  
  let productGroup;
  if (params.subcategory === 'granit') {
    productGroup = getGranitSubCategoryById(params.productgroup);
  } else if (params.subcategory === 'schiefer') {
    productGroup = getSchieferSubCategoryById(params.productgroup);
  } else if (params.subcategory === 'luserna-gneis') {
    productGroup = getLusernaGneisSubCategoryById(params.productgroup);
  } else if (params.subcategory === 'tuff') {
    productGroup = getTuffSubCategoryById(params.productgroup);
  } else if (params.subcategory === 'muschelkalk') {
    productGroup = getMuschelkalkSubCategoryById(params.productgroup);
  }


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
    if (params.category !== 'natursteine' || !['granit', 'schiefer', 'luserna-gneis', 'tuff', 'muschelkalk', 'stainzer-gneis', 'porphyr'].includes(params.subcategory)) {
        notFound();
    }
    
    const category = getCategoryById(params.category);
    const subCategory = getSubCategoryByIds(params.category, params.subcategory);
    
    let productGroup;
    let products: Product[] | null = [];

    if (params.subcategory === 'granit') {
        productGroup = getGranitSubCategoryById(params.productgroup);
        products = getGranitProducts(params.productgroup);
    } else if (params.subcategory === 'schiefer') {
        productGroup = getSchieferSubCategoryById(params.productgroup);
        products = getSchieferProducts(params.productgroup);
    } else if (params.subcategory === 'luserna-gneis') {
        productGroup = getLusernaGneisSubCategoryById(params.productgroup);
        products = getLusernaGneisProducts(params.productgroup);
    } else if (params.subcategory === 'tuff') {
        productGroup = getTuffSubCategoryById(params.productgroup);
        products = getTuffProducts(params.productgroup);
    } else if (params.subcategory === 'muschelkalk') {
        productGroup = getMuschelkalkSubCategoryById(params.productgroup);
        products = getMuschelkalkProducts(params.productgroup);
    } else if (params.subcategory === 'stainzer-gneis') {
        productGroup = getStainzerGneisSubCategoryById(params.productgroup);
        products = getStainzerGneisProducts(params.productgroup);
    } else if (params.subcategory === 'porphyr') {
        productGroup = getPorphyrSubCategoryById(params.productgroup);
        products = getPorphyrProducts(params.productgroup);
    }

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

    if (!products || products.length === 0) {
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
                    <div className="container mx-auto px-4 text-center text-muted-foreground">
                        Für diese Kategorie sind derzeit keine Produkte verfügbar.
                    </div>
                </section>
                <ProductNoticeBanner />
            <ContactFormSection />
            </>
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
            
            <ProductNoticeBanner />
            <ContactFormSection />
        </>
    );
}
