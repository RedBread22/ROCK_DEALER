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
                <h2 className="font-headline text-2xl text-primary">01 / PHILOSOPHY</h2>
              </InteractiveElement>
            </div>
            <div className="space-y-6">
              <p className="text-2xl font-medium leading-snug md:text-4xl">
                We believe in motion as a primary tool for communication. Every pixel is an opportunity for expression, every interaction a chance to tell a story.
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
              MOVE.
            </h3>
            <h3
              className="absolute right-0 top-24 font-headline text-6xl text-muted-foreground md:text-8xl"
              style={{ transform: `translateX(${rightTextTranslateX}%)` }}
            >
              ENGAGE.
            </h3>
            <h3
              className="absolute left-1/2 top-48 -translate-x-1/2 font-headline text-6xl text-primary md:text-8xl"
              style={{ transform: `translateX(-50%) scale(${0.8 + progress * 0.4})` }}
            >
              INSPIRE.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
