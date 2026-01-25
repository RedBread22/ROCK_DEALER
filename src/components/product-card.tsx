'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { type Product } from '@/lib/products';
import { Button } from '@/components/ui/button';

export const ProductCard = ({
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
