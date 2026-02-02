'use client';

import * as React from 'react';
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
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { AnimatedText } from './animated-text';

const sliderImageIds = [
  'slider-1',
  'slider-2',
  'slider-3',
  'slider-4',
  'slider-5',
  'slider-6',
  'slider-7',
];

export const ImpressionsSlider = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  
  const sliderImages = PlaceHolderImages.filter(img => sliderImageIds.includes(img.id));

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

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
    <section className="w-full py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <AnimatedText
            el="h2"
            text="Impressionen"
            className="font-headline text-5xl md:text-6xl text-primary"
          />
          <p className="mt-4 text-lg text-muted-foreground">
            Einblicke in die Vielseitigkeit und Ästhetik unserer Materialien.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {sliderImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg shadow-primary/10">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
        
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'h-3 w-3 rounded-full transition-colors duration-300',
                index === current ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground/50'
              )}
              aria-label={`Gehe zu Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
