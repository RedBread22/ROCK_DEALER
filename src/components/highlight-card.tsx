'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

type HighlightCardProps = {
    title: string;
    description: string;
    image: ImagePlaceholder;
}

export const HighlightCard = ({ title, description, image }: HighlightCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="h-full"
    >
      <div 
        className="group relative flex flex-col h-full overflow-hidden rounded-lg bg-card border border-border text-card-foreground shadow-sm"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          {image && (
            <Image
              src={image.imageUrl}
              alt={title}
              data-ai-hint={image.imageHint}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-headline text-4xl text-white">{title}</h3>
          <p className="mt-2 text-white/80 line-clamp-2">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};
