"use client";

import { HeroSection } from '@/components/hero-section';
import { PhilosophySection } from '@/components/philosophy-section';
import { VisualSection } from '@/components/visual-section';
import { ImpressionsSlider } from '@/components/impressions-slider';
import { ExperimentalSection } from '@/components/experimental-section';
import { CTASection } from '@/components/cta-section';
import { ContactFormSection } from '@/components/contact-form-section';
import { VideoSection } from '@/components/video-section';

export default function Home() {
  return (
    <main className="w-full">
      <VideoSection />
      <ImpressionsSlider />
      <HeroSection />
      <PhilosophySection />
      <VisualSection />
      <ExperimentalSection />
      <CTASection />
      <ContactFormSection />
    </main>
  );
}
