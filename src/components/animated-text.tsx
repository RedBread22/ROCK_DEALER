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

  let charIndex = 0;

  return (
    <Wrapper ref={ref} className={cn("overflow-hidden", className)} aria-label={text}>
      {text.split(' ').map((word, i, arr) => {
        const wordElement = (
          <span key={i} className="inline-block"> {/* This prevents the word from breaking */}
            {word.split('').map((char, j) => {
              const delay = (charIndex + j) * stagger;
              return (
                <span
                  key={j}
                  className={cn(
                    "inline-block will-change-transform",
                    isInView ? "animate-reveal-up" : "translate-y-full opacity-0"
                  )}
                  style={{ animationDelay: `${delay.toFixed(3)}s` }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );

        charIndex += word.length;
        
        if (i < arr.length - 1) {
          const spaceDelay = charIndex * stagger;
          charIndex += 1;
          return [
            wordElement,
            <span
              key={`space-${i}`}
              className={cn(
                "inline-block will-change-transform",
                isInView ? "animate-reveal-up" : "translate-y-full opacity-0"
              )}
              style={{ animationDelay: `${spaceDelay.toFixed(3)}s`, whiteSpace: 'pre' }}
            >
              {' '}
            </span>
          ];
        }

        return wordElement;
      })}
    </Wrapper>
  );
};
