'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { productCategories } from '@/lib/products';
import { cn } from '@/lib/utils';
import { InteractiveElement } from './interactive-element';

export const CategoryNav = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);
  const currentCategorySlug = pathSegments[1];

  return (
    <nav className="sticky top-24 z-40 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex justify-center px-4">
        <div className="overflow-x-auto py-2">
          <ul className="flex items-center gap-4 whitespace-nowrap sm:gap-6">
            <li>
              <InteractiveElement cursorType="link">
                <Link
                  href="/produkte"
                  className={cn(
                    'relative block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary sm:text-base',
                    pathname === '/produkte' ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                  )}
                >
                  Alle Produkte
                </Link>
              </InteractiveElement>
            </li>
            {productCategories.map((category) => {
              const href = `/produkte/${category.id}`;
              const isActive = currentCategorySlug === category.id;
              return (
                <li key={category.id}>
                  <InteractiveElement cursorType="link">
                    <Link
                      href={href}
                      className={cn(
                        'relative block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary sm:text-base',
                        isActive ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                      )}
                    >
                      {category.name}
                    </Link>
                  </InteractiveElement>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
