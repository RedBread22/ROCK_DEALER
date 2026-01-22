"use client";

import Image from 'next/image';
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
            Breaking Grids.
          </h2>
          <p className="max-w-md text-lg text-muted-foreground">
            We thrive on the unconventional. Design isn't just about fitting in; it's about standing out, creating memorable digital sculptures that defy expectations and invite interaction.
          </p>
          <InteractiveElement cursorType="link">
            <a href="#" className="inline-block text-xl font-bold text-primary hover:underline">
              View our lab &rarr;
            </a>
          </InteractiveElement>
        </div>
      </div>
    </section>
  );
};
