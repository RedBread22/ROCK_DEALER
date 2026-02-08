'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

type ContentCardProps = {
    title: string;
    description: string;
    image: ImagePlaceholder;
    href: string;
}

export const ContentCard = ({ title, description, image, href }: ContentCardProps) => {
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
        className="group flex flex-col h-full overflow-hidden rounded-lg bg-card border border-border text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1.5"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent " />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="mb-2 text-xs uppercase tracking-[0.20em] text-white/55">
            Kategorie
          </p>
          <h3 className="mb-3 text-2xl font-semibold text-white md:text-3xl">{title}</h3>
          <p className="mb-5 max-w-[44ch] flex-1 text-sm leading-6 text-white/70 line-clamp-3">{description}</p>
          <div className="mt-auto pt-4">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition-colors duration-300 group-hover:text-primary">
              → Kategorie ansehen
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
