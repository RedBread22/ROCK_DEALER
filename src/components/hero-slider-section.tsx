'use client';

import React, { useEffect, useMemo, useState } from 'react';
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

type HeroSliderSectionProps = {
  isActive?: boolean;
};

export const HeroSliderSection = ({ isActive = true }: HeroSliderSectionProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const sliderImages = useMemo(
    () =>
      sliderImageIds
        .map((id) => PlaceHolderImages.find((img) => img.id === id))
        .filter((img): img is ImagePlaceholder => !!img),
    []
  );

  useEffect(() => {
    if (!api || !isActive || sliderImages.length === 0) return;

    api.reInit();

    const selected = api.selectedScrollSnap();
    const safeIndex = ((selected % sliderImages.length) + sliderImages.length) % sliderImages.length;
    setCurrent(safeIndex);

    const onSelect = () => {
      const nextSelected = api.selectedScrollSnap();
      const nextSafeIndex =
        ((nextSelected % sliderImages.length) + sliderImages.length) % sliderImages.length;
      setCurrent(nextSafeIndex);
    };

    api.on('select', onSelect);
    api.on('reInit', onSelect);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api, isActive, sliderImages.length]);

  const scrollTo = React.useCallback(
    (index: number) => {
      if (!api || sliderImages.length === 0) return;
      const safeIndex = ((index % sliderImages.length) + sliderImages.length) % sliderImages.length;
      api.scrollTo(safeIndex);
    },
    [api, sliderImages.length]
  );

  const scrollSnaps = api?.scrollSnapList() ?? [];
  const autoplayPlugin = useMemo(
    () => (isActive ? [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })] : []),
    [isActive]
  );

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <Carousel
        setApi={setApi}
        plugins={autoplayPlugin}
        opts={{
          loop: true,
          active: isActive,
        }}
        className="w-full h-full relative [&_.overflow-hidden]:h-full"
      >
        <CarouselContent className="-ml-0 h-full">
          {sliderImages.map((image, index) => (
            <CarouselItem key={image.id} className="pl-0 h-full">
              <div className="relative h-full w-full">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  fill
                  className="object-cover opacity-100"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
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
