"use client";
import React from 'react';
import { AnimatedText } from './animated-text';
import { InteractiveElement } from './interactive-element';

export const HeroSection = () => {
  return (
    <section id="home" className="relative flex h-screen min-h-[700px] w-full flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col">
          <AnimatedText 
            text="ROCK"
            el="h1"
            className="font-headline text-primary text-[10vw] leading-none md:text-[12vw] lg:text-[14vw]"
          />
          <AnimatedText 
            text="DEALER"
            el="h1"
            className="self-end font-headline text-[10vw] leading-none md:text-[12vw] lg:text-[14vw]"
            stagger={0.05}
          />
        </div>
        <div className="mt-24">
          <InteractiveElement cursorType="text">
            <p className="max-w-md text-lg text-muted-foreground">
              Hochwertige Natursteine, Kies & Platten für Garten, Terrasse und Außenbereiche.
            </p>
          </InteractiveElement>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="relative h-16 w-px bg-foreground/30">
          <div className="absolute left-0 top-0 h-4 w-px animate-[scroll-down_2s_ease-out_infinite] bg-primary"></div>
        </div>
      </div>
    </section>
  );
};
