"use client";

import { HeroSection } from '@/components/hero-section';
import { PhilosophySection } from '@/components/philosophy-section';
import { VisualSection } from '@/components/visual-section';
import { ExperimentalSection } from '@/components/experimental-section';
import { CTASection } from '@/components/cta-section';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <PhilosophySection />
      <VisualSection />
      <ExperimentalSection />
      <CTASection />
    </main>
  );
}
