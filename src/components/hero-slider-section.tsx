'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const sliderImageIds = [
  'slider-2',
  'slider-1',
  'slider-3',
  'slider-4',
  'slider-5',
  'slider-6',
  'slider-7',
];

export const HeroSliderSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const sliderImages = sliderImageIds
    .map(id => PlaceHolderImages.find(img => img.id === id))
    .filter((img): img is ImagePlaceholder => !!img);

  useEffect(() => {
    if (!api) return;
    
    setScrollSnaps(api.scrollSnapList());
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  const scrollTo = React.useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <Carousel
        setApi={setApi}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]}
        opts={{
          loop: true,
        }}
        className="w-full h-full relative"
      >
        <CarouselContent className="-ml-0 h-full">
          {sliderImages.map((image, index) => (
            <CarouselItem key={index} className="pl-0 h-full">
              <div className="relative h-full w-full">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 text-white bg-black/30 hover:bg-black/50 border-none transition-colors rounded-full" />
        <CarouselNext className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 text-white bg-black/30 hover:bg-black/50 border-none transition-colors rounded-full" />
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'h-2 w-2 rounded-full transition-all duration-300',
                index === current ? 'w-6 bg-white' : 'bg-white/50 hover:bg-white/75'
              )}
              aria-label={`Gehe zu Slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};
