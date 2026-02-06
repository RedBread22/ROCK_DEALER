'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          {image && (
            <Image
              src={image.imageUrl}
              alt={title}
              data-ai-hint={image.imageHint}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent " />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-headline text-3xl text-primary">{title}</h3>
          <p className="mt-2 text-muted-foreground">{description}</p>
          <div className="mt-auto pt-6">
            <div className="inline-flex items-center gap-2 font-bold text-foreground transition-transform duration-300 group-hover:translate-x-1">
              Kategorie ansehen <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
