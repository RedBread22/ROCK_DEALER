"use client";

import React, { useRef } from 'react';
import { AnimatedText } from './animated-text';
import { InteractiveElement } from './interactive-element';

export const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const handleContactClick = () => {
    document.getElementById('product-contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background py-20 px-4"
    >
      <div className="relative z-10 flex flex-col items-center gap-12 text-center">
        <AnimatedText
          text="Interesse an unseren Produkten?"
          el="h2"
          className="font-headline text-[10vw] leading-tight sm:text-8xl md:text-9xl"
        />
        <InteractiveElement cursorType="magnetic">
          <button
            onClick={handleContactClick}
            className="group relative rounded-full border border-primary bg-primary px-12 py-6 text-xl font-bold text-primary-foreground transition-colors duration-300 hover:bg-transparent hover:text-primary"
          >
            <span className="relative z-10">KONTAKT AUFNEHMEN</span>
          </button>
        </InteractiveElement>
      </div>
    </section>
  );
};
