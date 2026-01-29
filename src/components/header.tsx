"use client";

import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { InteractiveElement } from './interactive-element';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { productCategories } from '@/lib/products';

const navLinks = [
  { name: 'Home', href: '/' },
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

  const isProductPage = pathname.startsWith('/produkte');

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        (hasScrolled || isProductPage) && 'bg-background/80 backdrop-blur-sm border-b border-border'
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
            <InteractiveElement cursorType="magnetic">
                <Link
                    href="/"
                    onClick={(e) => handleLinkClick(e, '/')}
                    className='nav-link relative px-2 py-1 font-medium text-foreground transition-colors hover:text-primary text-lg'
                >
                    Home
                </Link>
            </InteractiveElement>
            <DropdownMenu>
                <InteractiveElement cursorType="magnetic">
                    <DropdownMenuTrigger className="nav-link relative flex items-center gap-1 px-2 py-1 font-medium text-foreground transition-colors hover:text-primary focus:outline-none text-lg">
                        Unsere Produkte <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                </InteractiveElement>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuItem asChild>
                        <Link href="/produkte">Alle Produkte</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    {productCategories.map((category) =>
                        category.subCategories && category.subCategories.length > 0 ? (
                        <DropdownMenuSub key={category.id}>
                            <DropdownMenuSubTrigger>
                                <span>{category.name}</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem asChild>
                                <Link href={`/produkte/${category.id}`}>Alle {category.name}</Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                {category.subCategories.map((sub) => (
                                <DropdownMenuItem key={sub.id} asChild>
                                    <Link href={`/produkte/${category.id}/${sub.id}`}>{sub.name}</Link>
                                </DropdownMenuItem>
                                ))}
                            </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                        ) : (
                        <DropdownMenuItem key={category.id} asChild>
                            <Link href={`/produkte/${category.id}`}>{category.name}</Link>
                        </DropdownMenuItem>
                        )
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
            <InteractiveElement cursorType="magnetic">
                <Link
                    href="/#contact"
                    onClick={(e) => handleLinkClick(e, '/#contact')}
                    className='nav-link relative px-2 py-1 font-medium text-foreground transition-colors hover:text-primary text-lg'
                >
                    Kontakt
                </Link>
            </InteractiveElement>
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
                  <nav className="flex flex-1 flex-col items-center justify-center gap-4 text-center px-4">
                    <Link href="/" onClick={(e) => {handleLinkClick(e, '/'); setIsMenuOpen(false);}} className="animate-reveal-up text-4xl font-medium">Home</Link>
                    
                    <Accordion type="single" collapsible className="w-full max-w-xs text-left">
                        <AccordionItem value="produkte" className="border-b-0">
                            <AccordionTrigger className="text-4xl font-medium justify-center [&[data-state=open]>svg]:-rotate-90">
                                <Link href="/produkte" onClick={() => setIsMenuOpen(false)}>Unsere Produkte</Link>
                            </AccordionTrigger>
                            <AccordionContent className="mt-4">
                                {productCategories.map(category => (
                                    category.subCategories ? (
                                        <Accordion key={category.id} type="single" collapsible>
                                            <AccordionItem value={category.id}>
                                                <AccordionTrigger className="text-xl pl-4">
                                                   <Link href={`/produkte/${category.id}`} onClick={() => setIsMenuOpen(false)}>{category.name}</Link>
                                                </AccordionTrigger>
                                                <AccordionContent className="pl-8">
                                                    {category.subCategories.map(sub => (
                                                        <Link key={sub.id} href={`/produkte/${category.id}/${sub.id}`} onClick={() => setIsMenuOpen(false)} className="block py-2 text-lg text-muted-foreground">{sub.name}</Link>
                                                    ))}
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    ) : (
                                        <Link key={category.id} href={`/produkte/${category.id}`} onClick={() => setIsMenuOpen(false)} className="block py-2 text-xl pl-4">{category.name}</Link>
                                    )
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    
                    <Link href="/#contact" onClick={(e) => {handleLinkClick(e, '/#contact'); setIsMenuOpen(false);}} className="animate-reveal-up text-4xl font-medium">Kontakt</Link>
                  </nav>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
