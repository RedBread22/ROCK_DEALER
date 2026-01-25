"use client";

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { InteractiveElement } from './interactive-element';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Produktliste', href: '/produktliste' },
  { name: 'Kontakt', href: '/#contact' },
];

export const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isHomePage = pathname === '/';
    const isAnchorLink = href.startsWith('/#');

    if (isHomePage && isAnchorLink) {
      e.preventDefault();
      const targetId = href.substring(2);
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
    // For other cases, Next.js Link will handle navigation
    setIsMenuOpen(false);
  };
  
  const handleHomeLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
        e.preventDefault();
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const NavLinks = ({ className, stagger = 0 }: { className?: string, stagger?: number }) => (
    <>
      {navLinks.map((link, index) => (
        <InteractiveElement key={link.name} cursorType="magnetic">
          <Link
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className={cn('nav-link relative px-2 py-1 font-medium text-foreground transition-colors hover:text-primary', className)}
            style={{ animationDelay: `${stagger + index * 0.1}s` }}
          >
            {link.name}
          </Link>
        </InteractiveElement>
      ))}
    </>
  );

  const isProductPage = pathname === '/produktliste';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        hasScrolled && 'bg-background/80 backdrop-blur-sm',
        isProductPage && 'bg-background/80 backdrop-blur-sm border-b border-border'
      )}
    >
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        <InteractiveElement cursorType="link">
          <Link href="/" onClick={handleHomeLinkClick}>
            <Logo className="h-8 w-auto text-foreground transition-transform duration-300 hover:scale-105" />
          </Link>
        </InteractiveElement>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLinks className="text-lg" />
        </nav>

        {/* Mobile Nav Trigger */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <InteractiveElement cursorType="magnetic">
                <button aria-label="Open menu">
                  <Menu className="h-8 w-8 text-foreground" />
                </button>
              </InteractiveElement>
            </SheetTrigger>
            <SheetContent side="left" className="w-full border-r-0 bg-background/95 p-0">
                <div className="flex h-full flex-col">
                  <div className="flex h-24 shrink-0 items-center justify-between border-b border-border px-4">
                     <Link href="/" onClick={handleHomeLinkClick}>
                        <Logo className="h-8 w-auto text-foreground" />
                     </Link>
                     <InteractiveElement cursorType="magnetic">
                      <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                          <X className="h-8 w-8 text-foreground" />
                      </button>
                    </InteractiveElement>
                  </div>
                  <nav className="flex flex-1 flex-col items-center justify-center gap-12 text-center">
                     <NavLinks className="animate-reveal-up text-4xl" stagger={0.3} />
                  </nav>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
