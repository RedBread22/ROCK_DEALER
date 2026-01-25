'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { type ProductCategory, type Product } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { AnimatedText } from '@/components/animated-text';
import { ContactFormSection } from '@/components/contact-form-section';

type CategoryPageClientProps = {
    category: ProductCategory;
    intro: string;
}

export function CategoryPageClient({ category, intro }: CategoryPageClientProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Unsere Produkte', href: '/produkte' },
    { label: category.name, href: `/produkte/${category.id}` },
  ];

  return (
    <>
      <main className="bg-background">
        <section className="relative flex min-h-[50vh] flex-col justify-center overflow-hidden border-b border-border py-20">
          <div className="container px-4">
            <Breadcrumbs items={breadcrumbItems} className="mb-8" />
            <AnimatedText
              el="h1"
              text={category.name}
              className="font-headline text-5xl md:text-7xl"
            />
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {intro}
            </p>
          </div>
        </section>

        <section className="py-24 sm:py-32">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-12">
                {category.products.map((product) => (
                  <ProductCard
                    key={product.name}
                    product={product}
                    onDetailsClick={() => setSelectedProduct(product)}
                  />
                ))}
              </div>
            </div>
        </section>
        
        <ContactFormSection />
      </main>

      <Dialog open={!!selectedProduct} onOpenChange={(isOpen) => !isOpen && setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl">
          {selectedProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
              <div className="relative aspect-square w-full overflow-hidden rounded-md md:aspect-auto md:h-full">
                 <Image
                    src={selectedProduct.image.imageUrl}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
              </div>
              <div className="flex flex-col">
                <DialogHeader>
                  <DialogTitle className="font-headline text-4xl text-primary">{selectedProduct.name}</DialogTitle>
                </DialogHeader>
                <DialogDescription className="mt-4 flex-1 text-base text-foreground/80 whitespace-pre-line">
                  {selectedProduct.description}
                </DialogDescription>
                <div className="mt-8">
                  <Link href="/#contact" passHref>
                    <Button size="lg" className="w-full" onClick={() => setSelectedProduct(null)}>
                      Anfrage senden
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
