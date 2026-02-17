"use client";

import { useState } from 'react';
import { HeroSection } from '@/components/hero-section';
import { PhilosophySection } from '@/components/philosophy-section';
import { VisualSection } from '@/components/visual-section';
import { HeroSliderSection } from '@/components/hero-slider-section';
import { ExperimentalSection } from '@/components/experimental-section';
import { CTASection } from '@/components/cta-section';
import { ContactFormSection } from '@/components/contact-form-section';

export default function Home() {
  const [videoFinished, setVideoFinished] = useState(false);

  return (
    <main className="w-full">
      {!videoFinished ? (
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
              onEnded={() => setVideoFinished(true)}
              className="w-full h-full object-contain"
            >
              <source src="/videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      ) : (
        <HeroSliderSection />
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
