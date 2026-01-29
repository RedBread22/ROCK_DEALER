"use client";

import { Logo } from '@/components/logo';
import Link from 'next/link';
import { InteractiveElement } from './interactive-element';
import { usePathname } from 'next/navigation';

export const Footer = () => {
    const pathname = usePathname();

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        const isHomePage = pathname === '/';
        const isAnchorLink = href.startsWith('/#');

        if (isHomePage && isAnchorLink) {
        e.preventDefault();
        const targetId = href.substring(2);
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }
    };


  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 py-12 text-center md:flex-row md:text-left">
        <InteractiveElement cursorType="link">
          <Link href="/">
            <Logo className="h-8 w-auto text-foreground transition-transform duration-300 hover:scale-105" />
          </Link>
        </InteractiveElement>
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <InteractiveElement cursorType="link">
            <Link href="/" onClick={(e) => handleLinkClick(e, '/')} className="nav-link relative font-medium">Home</Link>
          </InteractiveElement>
          <InteractiveElement cursorType="link">
            <Link href="/produkte" className="nav-link relative font-medium">Unsere Produkte</Link>
          </InteractiveElement>
          <InteractiveElement cursorType="link">
            <Link href="/#contact" onClick={(e) => handleLinkClick(e, '/#contact')} className="nav-link relative font-medium">Kontakt</Link>
          </InteractiveElement>
        </nav>
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} ROCK DEALER. Alle Rechte vorbehalten</p>
      </div>
    </footer>
  );
};
