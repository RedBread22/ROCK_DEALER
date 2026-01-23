import { cn } from '@/lib/utils';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("font-headline text-2xl font-bold tracking-wider", className)}>
      ROCK DEALER
    </div>
  );
};
