'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

type HighlightCardProps = {
    title: string;
    description: string;
    image: ImagePlaceholder;
    href: string;
}

export const HighlightCard = ({ title, description, image, href }: HighlightCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="h-full"
    >
      <Link 
        href={href} 
        className="group relative flex flex-col h-full overflow-hidden rounded-lg bg-card border border-border text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1.5"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          {image && (
            <Image
              src={image.imageUrl}
              alt={title}
              data-ai-hint={image.imageHint}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-headline text-4xl text-white">{title}</h3>
          <p className="mt-2 text-white/80 line-clamp-2">{description}</p>
          <div className="mt-4 inline-flex items-center gap-2 font-bold text-primary transition-transform duration-300 group-hover:translate-x-1">
              Mehr erfahren <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
