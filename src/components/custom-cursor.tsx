"use client";

import { useCursor } from '@/hooks/use-cursor';
import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';

export const CustomCursor = () => {
  const { cursorType } = useCursor();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);

    document.addEventListener('mousemove', updatePosition);
    document.body.addEventListener('mouseenter', onMouseEnter);
    document.body.addEventListener('mouseleave', onMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseenter', onMouseEnter);
      document.body.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  if (!isClient) return null;

  const cursorSize = cursorType === 'text' ? 60 : cursorType === 'magnetic' ? 80 : 24;

  return (
    <div
      className={cn(
        "pointer-events-none fixed left-0 top-0 z-[9999] transition-[width,height] duration-300 ease-out",
        visible ? "opacity-100" : "opacity-0"
      )}
      style={{
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
        transform: `translate(${position.x - cursorSize / 2}px, ${position.y - cursorSize / 2}px)`,
        willChange: 'transform, width, height'
      }}
    >
      <div className={cn(
        'h-full w-full rounded-full border-2 transition-transform duration-300 ease-out',
        cursorType === 'default' && 'border-primary',
        cursorType === 'link' && 'scale-150 border-primary',
        cursorType === 'text' && 'scale-125 bg-primary/20 border-primary',
        cursorType === 'magnetic' && 'scale-150 bg-primary/20 border-primary'
      )}></div>
    </div>
  );
};
