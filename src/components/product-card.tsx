'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { type Product } from '@/lib/products';
import { Button } from '@/components/ui/button';

export const ProductCard = ({
  product,
  onDetailsClick,
  onImageClick,
}: {
  product: Product;
  onDetailsClick: () => void;
  onImageClick?: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow duration-300 hover:shadow-primary/20 hover:shadow-lg"
    >
      <div
        className="relative aspect-[4/3] w-full overflow-hidden cursor-zoom-in"
        onClick={(e) => {
          e.stopPropagation();
          onImageClick?.();
        }}
      >
        <Image
          src={product.image.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          data-ai-hint={product.image.imageHint}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-white">{product.name}</h3>
        <p className="mt-2 text-sm text-white/70 line-clamp-2">{product.description}</p>
        <div className="mt-auto pt-4">
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
