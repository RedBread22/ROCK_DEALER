'use client';

import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';
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

          {/* Middle: Social Media */}
          <div className="flex flex-col items-center">
            <h3 className="font-headline text-base uppercase tracking-widest text-primary">
              Folge uns
            </h3>
            <div className="mt-6 flex gap-6">
              <InteractiveElement cursorType="link">
                <a 
                  href="https://www.instagram.com/rock__dealer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="Instagram"
                >
                  <Instagram className="h-7 w-7" />
                </a>
              </InteractiveElement>
              <InteractiveElement cursorType="link">
                <a 
                  href="https://www.facebook.com/p/The-Rock-Dealer-100057296156483/?locale=de_DE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="Facebook"
                >
                  <Facebook className="h-7 w-7" />
                </a>
              </InteractiveElement>
            </div>
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
            </nav>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-16 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">&copy; Rock-Dealer 2025.</p>
        </div>
      </div>
    </footer>
  );
};
