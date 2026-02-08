"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { InteractiveElement } from './interactive-element';

export const VisualSection = () => {
  const image = PlaceHolderImages.find((img) => img.id === 'kinetic-4');

  if (!image) {
    return null;
  }

  return (
    <section id="products" className="w-full bg-secondary py-24 sm:py-32">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 lg:gap-24">
        {/* Image Block */}
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={image.imageUrl}
            alt={image.description}
            data-ai-hint={image.imageHint}
            fill
            className="rounded-lg object-cover"
          />
        </div>

        {/* Text Content Block */}
        <div className="flex flex-col items-start text-left">
          <h2 className="font-headline text-5xl leading-tight text-foreground md:text-6xl">
            Materialien mit Charakter
          </h2>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Unsere Steine, Platten und Kiese überzeugen durch Struktur, Farbe und Beständigkeit – für Außenbereiche, die lange Freude machen.
          </p>
          <div className="mt-10">
            <InteractiveElement cursorType="link">
              <Link href="/produkte" passHref>
                <Button size="lg" className="font-bold">
                  Unsere Produkte ansehen
                </Button>
              </Link>
            </InteractiveElement>
          </div>
        </div>
      </div>
    </section>
  );
};
