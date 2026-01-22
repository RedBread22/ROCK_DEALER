"use client";

import React, { useRef } from 'react';
import { AnimatedText } from './animated-text';
import { InteractiveElement } from './interactive-element';

export const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background py-20"
    >
      <div className="relative z-10 flex flex-col items-center gap-12 text-center">
        <AnimatedText
          text="Ready for the new wave?"
          el="h2"
          className="font-headline text-6xl md:text-8xl lg:text-9xl"
        />
        <InteractiveElement cursorType="magnetic">
          <button
            className="group relative rounded-full border border-primary bg-primary px-12 py-6 text-xl font-bold text-primary-foreground transition-colors duration-300 hover:bg-transparent hover:text-primary"
          >
            <span className="relative z-10">LET'S CREATE</span>
          </button>
        </InteractiveElement>
      </div>
    </section>
  );
};
