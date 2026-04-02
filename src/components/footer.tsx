'use client';

import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';
import { InteractiveElement } from './interactive-element';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.4a8.16 8.16 0 0 0 4.77 1.53V7.48a4.85 4.85 0 0 1-1.01-.79z" />
  </svg>
);

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
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kerschbaum+49,+8542+St.+Peter+im+Sulmtal"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <p>Kerschbaum 49</p>
                <p>8542 St. Peter im Sulmtal</p>
              </a>
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
              <InteractiveElement cursorType="link">
                <a
                  href="https://www.tiktok.com/@georgpeter496"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="h-7 w-7" />
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
          <p className="text-sm text-muted-foreground">&copy; Rock-Dealer 2026.</p>
        </div>
      </div>
    </footer>
  );
};
