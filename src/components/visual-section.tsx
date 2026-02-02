"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { InteractiveElement } from './interactive-element';

const ParallaxImage = ({
  id,
  speed,
  className,
  scrollY,
}: {
  id: string;
  speed: number;
  className?: string;
  scrollY: number;
}) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) return null;

  return (
    <div
      className={cn("absolute h-full w-full", className)}
      style={{ transform: `translateY(${scrollY * speed}px)`, willChange: 'transform' }}
    >
      <Image
        src={image.imageUrl}
        alt={image.description}
        data-ai-hint={image.imageHint}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
};

export const VisualSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="products" className="relative min-h-[180vh] w-full bg-secondary">
      <div className="sticky top-0 h-screen overflow-hidden">
        <ParallaxImage id="kinetic-1" speed={-0.15} scrollY={scrollY} className="h-[120%] w-3/5" />
        <ParallaxImage id="kinetic-2" speed={-0.25} scrollY={scrollY} className="left-1/3 top-1/4 h-2/5 w-2/5" />
        <ParallaxImage id="kinetic-4" speed={-0.05} scrollY={scrollY} className="left-2/3 top-0 h-4/5 w-1/3" />

        <div className="absolute inset-0 flex items-center justify-center">
          <InteractiveElement cursorType="text">
            <div className="max-w-xl text-center">
              <h2 className="font-headline text-5xl leading-tight md:text-7xl">
                Materialien mit Charakter
              </h2>
              <p className="mt-4 text-lg text-background">
                Unsere Steine, Platten und Kiese überzeugen durch Struktur, Farbe und Beständigkeit – für Außenbereiche, die lange Freude machen.
              </p>
            </div>
          </InteractiveElement>
        </div>
      </div>
    </section>
  );
};
