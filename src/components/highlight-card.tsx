'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

type HighlightCardProps = {
    title: string;
    image: ImagePlaceholder;
}

export const HighlightCard = ({ title, image }: HighlightCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="h-full flex flex-col overflow-hidden rounded-lg bg-card border border-border text-card-foreground shadow-sm"
    >
      <div className="relative aspect-[4/5] w-full">
        {image && (
          <Image
            src={image.imageUrl}
            alt={title}
            data-ai-hint={image.imageHint}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="flex flex-1 items-center justify-center p-6 text-center">
        <h3 className="font-semibold uppercase tracking-wider text-foreground">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};
