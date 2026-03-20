'use client';

import Link from 'next/link';
import { Info } from 'lucide-react';
import { InteractiveElement } from './interactive-element';
import { Button } from '@/components/ui/button';

export const SortimentNotice = () => {
  const handleContactClick = () => {
    document.getElementById('product-contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-primary/10 border-y border-primary/20 py-16 sm:py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="flex justify-center">
            <Info className="h-10 w-10 text-primary" />
          </div>
          <h2 className="font-headline text-3xl md:text-4xl">
            Noch mehr Auswahl vor Ort
          </h2>
          <p className="text-lg text-muted-foreground">
            Unser Online-Sortiment zeigt nur einen Teil unseres Angebots. Besuchen Sie uns vor Ort oder kontaktieren Sie uns – wir beraten Sie gerne zu unserem gesamten Produktsortiment und finden die perfekte Lösung für Ihr Projekt.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <InteractiveElement cursorType="link">
              <Button size="lg" className="font-bold" onClick={handleContactClick}>
                Kontakt aufnehmen
              </Button>
            </InteractiveElement>
            <InteractiveElement cursorType="link">
              <Button asChild variant="outline" size="lg" className="font-bold">
                <Link href="/produkte">
                  Online-Sortiment ansehen
                </Link>
              </Button>
            </InteractiveElement>
          </div>
        </div>
      </div>
    </section>
  );
};
