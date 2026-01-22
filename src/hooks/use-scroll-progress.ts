"use client";

import { useState, useEffect, useRef } from 'react';

export const useScrollProgress = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const onScroll = () => {
      const { top, height } = element.getBoundingClientRect();
      const screenHeight = window.innerHeight;
      
      const value = (screenHeight - top) / (screenHeight + height);
      setProgress(Math.max(0, Math.min(1, value)));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { ref, progress };
};
