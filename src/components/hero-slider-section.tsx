'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Image from 'next/image';

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

const SLIDE_INTERVAL_MS = 5000;

export const HeroSliderSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [videoState, setVideoState] = useState<'playing' | 'fading' | 'hidden'>('playing');
  const [videoDone, setVideoDone] = useState(false);
  const [firstSlideReady, setFirstSlideReady] = useState(false);

  const slideshowTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const sliderImages = useMemo(
    () =>
      sliderImageIds
        .map(id => PlaceHolderImages.find(img => img.id === id))
        .filter((img): img is ImagePlaceholder => !!img),
    []
  );

  const clearSlideshowTimer = useCallback(() => {
    if (slideshowTimerRef.current) {
      clearInterval(slideshowTimerRef.current);
      slideshowTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (sliderImages.length === 0) return;

    let isCancelled = false;
    const preloadImage = (src: string) =>
      new Promise<void>((resolve, reject) => {
        const image = new window.Image();
        image.onload = () => resolve();
        image.onerror = () => reject(new Error(`Failed to preload image: ${src}`));
        image.src = src;
      });

    preloadImage(sliderImages[0].imageUrl)
      .then(async () => {
        if (sliderImages[1]) {
          try {
            await preloadImage(sliderImages[1].imageUrl);
          } catch {
            // Optional preload only
          }
        }
        if (!isCancelled) {
          setFirstSlideReady(true);
        }
      })
      .catch(() => {
        if (!isCancelled) {
          setFirstSlideReady(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [sliderImages]);

  const handleVideoEnd = () => {
    setVideoDone(true);
  };

  const slideshowActive = videoDone && firstSlideReady && sliderImages.length > 0;

  useEffect(() => {
    if (slideshowActive) {
      setVideoState('fading');
      return;
    }

    if (!videoDone) {
      setVideoState('playing');
    }
  }, [slideshowActive, videoDone]);

  useEffect(() => {
    if (videoState === 'fading') {
      const fadeOutTimer = setTimeout(() => {
        setVideoState('hidden');
      }, 1000);
      return () => clearTimeout(fadeOutTimer);
    }
  }, [videoState]);

  useEffect(() => {
    if (!api) return;

    setScrollSnaps(api.scrollSnapList());
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      const selected = api.selectedScrollSnap();
      const total = api.scrollSnapList().length;
      const safeIndex = total > 0 ? ((selected % total) + total) % total : 0;
      setCurrent(safeIndex);
    };

    api.on('select', onSelect);
    api.on('reInit', onSelect);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || !slideshowActive || videoState !== 'hidden') {
      clearSlideshowTimer();
      return;
    }

    api.reInit();

    clearSlideshowTimer();
    slideshowTimerRef.current = setInterval(() => {
      api.scrollNext();
    }, SLIDE_INTERVAL_MS);

    return () => {
      clearSlideshowTimer();
    };
  }, [api, slideshowActive, videoState, clearSlideshowTimer]);

  useEffect(() => {
    return () => {
      clearSlideshowTimer();
    };
  }, [clearSlideshowTimer]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!api || scrollSnaps.length === 0) return;
      const safeIndex = ((index % scrollSnaps.length) + scrollSnaps.length) % scrollSnaps.length;
      api.scrollTo(safeIndex);
    },
    [api, scrollSnaps.length]
  );

  const isSliderVisible = videoState !== 'playing';

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <div
        className={cn(
          'absolute inset-0 w-full h-full transition-opacity duration-1000',
          isSliderVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
          }}
          className="w-full h-full relative [&>div]:h-full"
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
                    priority={index < 2}
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
      </div>

      {videoState !== 'hidden' && (
        <div
          className={cn(
            'absolute inset-0 w-full h-full z-20 transition-opacity duration-1000',
            videoState === 'fading' ? 'opacity-0' : 'opacity-100'
          )}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40"
            aria-hidden="true"
          >
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 h-full w-full flex items-center justify-center pt-24">
            <video
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="w-full h-full object-contain"
            >
              <source src="/videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};
