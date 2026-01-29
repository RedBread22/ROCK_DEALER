'use client';

import Link from 'next/link';
import { InteractiveElement } from './interactive-element';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:text-left">
          
          {/* Left: Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-headline text-base uppercase tracking-widest text-primary">
              Kontakt
            </h3>
            <div className="mt-6 space-y-2 text-muted-foreground">
              <p>Mo - Fr: 07:00 - 17:00 Uhr</p>
              <p>Kerschbaum 49</p>
              <p>8542 St. Peter im Sulmtal</p>
              <InteractiveElement cursorType="link">
                <a href="mailto:office@rock-dealer.com" className="mt-4 block text-primary underline transition-colors hover:text-primary/80">
                  office@rock-dealer.com
                </a>
              </InteractiveElement>
              <InteractiveElement cursorType="link">
                <a href="tel:+436641000290" className="block text-primary underline transition-colors hover:text-primary/80">
                  +43 664 1000290
                </a>
              </InteractiveElement>
            </div>
          </div>

          {/* Middle: Copyright (Order changes on mobile) */}
          <div className="flex items-center justify-center order-last md:order-none">
             <p className="text-sm text-muted-foreground">&copy; Rock-Dealer 2025.</p>
          </div>

          {/* Right: Navigation */}
          <div className="flex flex-col items-center md:items-end md:text-right">
            <h3 className="font-headline text-base uppercase tracking-widest text-primary">
              Navigation
            </h3>
            <nav className="mt-6 space-y-2">
              <InteractiveElement cursorType="link">
                <Link href="/impressum" className="block text-primary underline transition-colors hover:text-primary/80">
                  Impressum
                </Link>
              </InteractiveElement>
              <InteractiveElement cursorType="link">
                <Link href="/agb" className="block text-primary underline transition-colors hover:text-primary/80">
                  AGB
                </Link>
              </InteractiveElement>
               <InteractiveElement cursorType="link">
                <Link href="/produkte/zierkies" className="block text-primary underline transition-colors hover:text-primary/80">
                  Kies & Zierkies
                </Link>
              </InteractiveElement>
               <InteractiveElement cursorType="link">
                <Link href="/produkte/natursteine" className="block text-primary underline transition-colors hover:text-primary/80">
                  Bruchstein
                </Link>
              </InteractiveElement>
               <InteractiveElement cursorType="link">
                <Link href="/produkte/feinsteinzeug" className="block text-primary underline transition-colors hover:text-primary/80">
                   Natursteinplatten & Feinsteinzeug
                </Link>
              </InteractiveElement>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
