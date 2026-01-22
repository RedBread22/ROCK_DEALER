"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from 'react';

type AnimatedTextProps = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  stagger?: number;
  once?: boolean;
};

export const AnimatedText = ({
  text,
  el: Wrapper = 'p',
  className,
  stagger = 0.025,
  once = true,
}: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.disconnect();
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once]);

  return (
    <Wrapper ref={ref} className={cn("overflow-hidden", className)} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={cn(
            "inline-block will-change-transform",
            isInView ? "animate-reveal-up" : "translate-y-full opacity-0"
          )}
          style={{ animationDelay: `${(i * stagger).toFixed(3)}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Wrapper>
  );
};
