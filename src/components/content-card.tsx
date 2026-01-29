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
    >
      <Link href={href} className="group block overflow-hidden rounded-lg">
        <div className="relative aspect-[16/10] w-full overflow-hidden border bg-card">
          {image && (
            <Image
              src={image.imageUrl}
              alt={title}
              data-ai-hint={image.imageHint}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />
        </div>
        <div className="mt-6">
          <h3 className="font-headline text-3xl md:text-4xl text-primary">{title}</h3>
          <p className="mt-2 text-muted-foreground">{description}</p>
          <div className="mt-4 inline-flex items-center gap-2 font-bold text-foreground transition-transform group-hover:translate-x-1">
            Kategorie ansehen <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
