"use client";

import { useCursor } from '@/hooks/use-cursor';
import { cn } from '@/lib/utils';
import React, { useRef, useState, useEffect, useCallback } from 'react';

export const CustomCursor = () => {
  const { cursorType } = useCursor();
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const [visible, setVisible] = useState(true);
  const [isHoverDevice, setIsHoverDevice] = useState(false);

  const updateCursorPosition = useCallback(() => {
    const el = cursorRef.current;
    if (!el) return;
    const { x, y } = positionRef.current;
    const size = el.offsetWidth;
    el.style.transform = `translate(${x - size / 2}px, ${y - size / 2}px)`;
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    if (mediaQuery.matches) {
      setIsHoverDevice(true);
      document.body.style.cursor = 'none';

      const onMouseMove = (e: MouseEvent) => {
        positionRef.current = { x: e.clientX, y: e.clientY };
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(updateCursorPosition);
      };

      const onMouseEnter = () => setVisible(true);
      const onMouseLeave = () => setVisible(false);

      document.addEventListener('mousemove', onMouseMove);
      document.body.addEventListener('mouseenter', onMouseEnter);
      document.body.addEventListener('mouseleave', onMouseLeave);

      return () => {
        document.body.style.cursor = 'auto';
        cancelAnimationFrame(rafRef.current);
        document.removeEventListener('mousemove', onMouseMove);
        document.body.removeEventListener('mouseenter', onMouseEnter);
        document.body.removeEventListener('mouseleave', onMouseLeave);
      };
    }
  }, [updateCursorPosition]);

  if (!isHoverDevice) {
    return null;
  }

  const cursorSize = cursorType === 'text' ? 60 : cursorType === 'magnetic' ? 80 : 24;

  return (
    <div
      ref={cursorRef}
      className={cn(
        "pointer-events-none fixed left-0 top-0 z-[9999] transition-[width,height] duration-300 ease-out",
        visible ? "opacity-100" : "opacity-0"
      )}
      style={{
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
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
