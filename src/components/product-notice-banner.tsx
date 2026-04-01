import Link from 'next/link';
import { Info } from 'lucide-react';

export const ProductNoticeBanner = () => {
  return (
    <div className="w-full bg-primary/10 border-y border-primary/20 py-4">
      <div className="container mx-auto px-4 flex items-center justify-center gap-3 text-center">
        <Info className="h-5 w-5 shrink-0 text-primary" />
        <p className="text-sm sm:text-base text-muted-foreground">
          Nicht alle Produkte sind auf der Website ersichtlich –{' '}
          <Link href="/#contact" className="text-primary underline underline-offset-2 hover:text-primary/80 font-medium">
            kontaktiere uns
          </Link>{' '}
          für das komplette Sortiment.
        </p>
      </div>
    </div>
  );
};
