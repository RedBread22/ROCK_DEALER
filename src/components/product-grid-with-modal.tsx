'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { type Product } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

type ProductGridWithModalProps = {
    products: Product[];
}

export function ProductGridWithModal({ products }: ProductGridWithModalProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            product={product}
            onDetailsClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={(isOpen) => !isOpen && setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl">
          {selectedProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
              <div className="relative aspect-square w-full overflow-hidden rounded-md md:aspect-auto md:h-full">
                 <Image
                    src={selectedProduct.image.imageUrl}
                    alt={selectedProduct.name}
                    data-ai-hint={selectedProduct.image.imageHint}
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
                  <Link href="/#product-contact" passHref>
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
