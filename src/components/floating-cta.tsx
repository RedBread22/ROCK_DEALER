'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';

export const FloatingCTA = () => {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isHome = pathname === '/';
    if (isHome) {
      e.preventDefault();
      document.getElementById('product-contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link
      href="/#product-contact"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
      aria-label="Jetzt anfragen"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Jetzt anfragen</span>
    </Link>
  );
};
