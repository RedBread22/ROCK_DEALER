import { cn } from '@/lib/utils';
import Image from 'next/image';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
        src="/images/Logo.webp"
        alt="ROCK DEALER Logo"
        width={280}
        height={40}
        className={cn(className)}
        priority
      />
  );
};
