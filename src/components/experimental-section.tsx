"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { InteractiveElement } from './interactive-element';
import { Button } from '@/components/ui/button';

export const ExperimentalSection = () => {
  const image = PlaceHolderImages.find((img) => img.id === 'kinetic-3');

  return (
    <section className="relative min-h-[110vh] w-full overflow-hidden bg-white py-24">
      <div className="container mx-auto grid h-full grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 space-y-8"
        >
            <h2 className="font-headline text-5xl md:text-7xl text-zinc-900">
              Vielseitig einsetzbar.
            </h2>
            <p className="max-w-md text-lg text-zinc-600">
              Ob modern, klassisch oder natürlich – unsere Materialien lassen sich flexibel einsetzen und passen sich unterschiedlichsten Projekten an. Von Wegen und Terrassen bis zu Beeten, Mauern und Akzenten im Garten.
            </p>
            <InteractiveElement cursorType="link">
              <Link href="/produkte" passHref>
                <Button size="lg" className="font-bold">
                  Unsere Produkte ansehen
                </Button>
              </Link>
            </InteractiveElement>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative aspect-[3/4] w-full"
        >
          {image && (
            <Image
              src={image.imageUrl}
              alt={image.description}
              data-ai-hint={image.imageHint}
              fill
              className="rounded-lg object-cover"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};
