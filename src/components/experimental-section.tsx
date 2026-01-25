"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useScrollProgress } from '@/hooks/use-scroll-progress';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { InteractiveElement } from './interactive-element';

export const ExperimentalSection = () => {
  const { ref, progress } = useScrollProgress<HTMLElement>();
  const image = PlaceHolderImages.find((img) => img.id === 'kinetic-3');

  const rotation = (progress - 0.5) * -20;
  const scale = 1 + (progress * 0.2);
  const xPos = (progress - 0.5) * -10;

  return (
    <section ref={ref} className="relative min-h-[150vh] w-full overflow-hidden bg-secondary py-24">
      <div className="container mx-auto grid h-full grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="relative h-[60vh] md:h-[80vh]">
          {image && (
            <div 
              className="absolute inset-0 will-change-transform" 
              style={{
                transform: `translateX(${xPos}%) rotate(${rotation}deg) scale(${scale})`,
              }}
            >
              <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover shadow-2xl"
              />
            </div>
          )}
        </div>
        <div className="relative z-10 space-y-8">
          <h2 className="font-headline text-5xl md:text-7xl">
            Vielseitig einsetzbar.
          </h2>
          <p className="max-w-md text-lg text-muted-foreground">
            Ob modern, klassisch oder natürlich – unsere Materialien lassen sich flexibel einsetzen und passen sich unterschiedlichsten Projekten an. Von Wegen und Terrassen bis hin zu Beeten, Mauern und Akzenten im Garten.
          </p>
          <InteractiveElement cursorType="link">
            <Link href="/produkte" className="inline-block text-xl font-bold text-primary hover:underline">
              Unsere Produkte ansehen →
            </Link>
          </InteractiveElement>
        </div>
      </div>
    </section>
  );
};
