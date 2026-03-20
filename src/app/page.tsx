"use client";

import { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/hero-section';
import { HeroSliderSection } from '@/components/hero-slider-section';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const PhilosophySection = dynamic(() => import('@/components/philosophy-section').then(m => ({ default: m.PhilosophySection })));
const VisualSection = dynamic(() => import('@/components/visual-section').then(m => ({ default: m.VisualSection })));
const ExperimentalSection = dynamic(() => import('@/components/experimental-section').then(m => ({ default: m.ExperimentalSection })));
const CTASection = dynamic(() => import('@/components/cta-section').then(m => ({ default: m.CTASection })));
const ContactFormSection = dynamic(() => import('@/components/contact-form-section').then(m => ({ default: m.ContactFormSection })));

const heroSliderImageIds = [
  'slider-2',
  'slider-1',
  'slider-3',
  'slider-4',
  'slider-5',
  'slider-6',
  'slider-7',
];

export default function Home() {
  const [videoDone, setVideoDone] = useState(false);
  const [firstSlideReady, setFirstSlideReady] = useState(false);

  const sliderImages = useMemo(
    () =>
      heroSliderImageIds
        .map((id) => PlaceHolderImages.find((img) => img.id === id))
        .filter((img): img is NonNullable<typeof img> => !!img),
    []
  );

  useEffect(() => {
    if (!videoDone) {
      return;
    }

    const firstSrc = sliderImages[0]?.imageUrl;
    if (!firstSrc) {
      setFirstSlideReady(true);
      return;
    }

    let cancelled = false;
    const preloadFirst = new window.Image();
    const preloadSecond = sliderImages[1]?.imageUrl
      ? new window.Image()
      : null;

    preloadFirst.onload = () => {
      if (cancelled) return;
      setFirstSlideReady(true);
    };

    preloadFirst.onerror = () => {
      if (cancelled) return;
      setFirstSlideReady(true);
    };

    preloadFirst.src = firstSrc;

    if (preloadSecond && sliderImages[1]?.imageUrl) {
      preloadSecond.src = sliderImages[1].imageUrl;
    }

    return () => {
      cancelled = true;
    };
  }, [videoDone, sliderImages]);

  const slideshowActive = videoDone && firstSlideReady;

  return (
    <main className="w-full">
      {!videoDone ? (
        <section className="relative w-full h-screen overflow-hidden bg-black">
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
              onEnded={() => setVideoDone(true)}
              className="w-full h-full object-contain"
            >
              <source src="/videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      ) : !slideshowActive ? (
        <section className="relative w-full h-screen overflow-hidden bg-black" aria-label="Slideshow loading" />
      ) : (
        <HeroSliderSection isActive={slideshowActive} />
      )}
      <HeroSection />
      <PhilosophySection />
      <VisualSection />
      <ExperimentalSection />
      <CTASection />
      <ContactFormSection />
    </main>
  );
}
