'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { productCategories, type Product } from '@/lib/products';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { InteractiveElement } from '@/components/interactive-element';
import Link from 'next/link';

const ProductCard = ({
  product,
  onDetailsClick,
}: {
  product: Product;
  onDetailsClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow duration-300 hover:shadow-primary/20 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={product.image.imageUrl}
          alt={product.name}
          fill
          data-ai-hint={product.image.imageHint}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-headline text-2xl font-bold">{product.name}</h3>
        <p className="mt-2 flex-1 text-muted-foreground line-clamp-3">{product.description}</p>
        <div className="mt-6">
          <Button
            variant="outline"
            onClick={onDetailsClick}
            className="w-full transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProduktlistePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollToCategory = (id: string) => {
    categoryRefs.current[id]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <main className="w-full bg-background">
        {/* Hero Section */}
        <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden border-b py-20 text-center">
          <div className="container px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-headline text-5xl md:text-7xl lg:text-8xl"
            >
              Produktliste
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl"
            >
              Steine, Platten & Kies – Ein Überblick über unser Sortiment.
              <span className="mt-2 block text-sm text-primary">[Demo-Sortiment]</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <InteractiveElement cursorType="magnetic">
                <Button size="lg" onClick={() => scrollToCategory(productCategories[0].id)}>
                  Zu den Kategorien
                </Button>
              </InteractiveElement>
            </motion.div>
          </div>
        </section>

        {/* Categories Overview */}
        <section className="sticky top-24 z-20 hidden md:block bg-background/80 backdrop-blur-sm border-b">
          <div className="container mx-auto flex justify-center gap-8 py-4">
            {productCategories.map((category) => (
              <InteractiveElement key={category.id} cursorType="link">
                <button
                  onClick={() => scrollToCategory(category.id)}
                  className="nav-link relative font-medium text-foreground transition-colors hover:text-primary"
                >
                  {category.name}
                </button>
              </InteractiveElement>
            ))}
          </div>
        </section>

        {/* Product Sections */}
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="flex flex-col gap-24">
            {productCategories.map((category) => (
              <section
                key={category.id}
                id={category.id}
                ref={(el) => (categoryRefs.current[category.id] = el)}
                className="scroll-mt-32"
              >
                <div className="mb-12 max-w-2xl">
                  <h2 className="font-headline text-4xl text-primary md:text-5xl">{category.name}</h2>
                  <p className="mt-4 text-lg text-muted-foreground">{category.description}</p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {category.products.map((product) => (
                    <ProductCard
                      key={product.name}
                      product={product}
                      onDetailsClick={() => setSelectedProduct(product)}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
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
                    <Button size="lg" className="w-full">
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
