"use client";

import { HeroSection } from '@/components/hero-section';
import { PhilosophySection } from '@/components/philosophy-section';
import { VisualSection } from '@/components/visual-section';
import { HeroSliderSection } from '@/components/hero-slider-section';
import { ExperimentalSection } from '@/components/experimental-section';
import { CTASection } from '@/components/cta-section';
import { ContactFormSection } from '@/components/contact-form-section';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSliderSection />
      <HeroSection />
      <PhilosophySection />
      <VisualSection />
      <ExperimentalSection />
      <CTASection />
      <ContactFormSection />
    </main>
  );
}
