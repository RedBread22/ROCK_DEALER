"use client";

import React from 'react';
import { useScrollProgress } from '@/hooks/use-scroll-progress';
import { InteractiveElement } from './interactive-element';

export const PhilosophySection = () => {
  const { ref, progress } = useScrollProgress<HTMLElement>();
  const leftTextTranslateX = -50 + progress * 100;
  const rightTextTranslateX = 50 - progress * 100;
  const opacity = Math.sin(progress * Math.PI);

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden py-32"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <InteractiveElement cursorType="text">
                <h2 className="font-headline text-2xl text-primary">01 / Unsere Philosophie</h2>
              </InteractiveElement>
            </div>
            <div className="space-y-6">
              <p className="text-2xl font-medium leading-snug md:text-4xl">
                Wir glauben an natürliche Materialien, ehrliche Qualität und langlebige Lösungen. Jeder Stein hat seinen Charakter – und jede Fläche verdient eine saubere, durchdachte Umsetzung.
              </p>
            </div>
          </div>
          <div
            className="relative h-64 w-full will-change-transform"
            style={{ opacity: opacity }}
          >
            <h3
              className="absolute left-0 top-0 font-headline text-6xl text-muted-foreground md:text-8xl"
              style={{ transform: `translateX(${leftTextTranslateX}%)` }}
            >
              NATÜRLICH.
            </h3>
            <h3
              className="absolute right-0 top-24 font-headline text-6xl text-muted-foreground md:text-8xl"
              style={{ transform: `translateX(${rightTextTranslateX}%)` }}
            >
              BESTÄNDIG.
            </h3>
            <h3
              className="absolute left-1/2 top-48 -translate-x-1/2 font-headline text-6xl text-primary md:text-8xl"
              style={{ transform: `translateX(-50%) scale(${0.8 + progress * 0.4})` }}
            >
              ZEITLOS.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
