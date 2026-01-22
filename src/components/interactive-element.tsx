"use client";
import { useCursor } from '@/hooks/use-cursor';
import React from 'react';

type InteractiveElementProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  cursorType?: 'link' | 'text' | 'magnetic';
  className?: string;
  [key: string]: any;
};

export const InteractiveElement = ({
  children,
  as: Component = 'div',
  cursorType = 'link',
  className,
  ...props
}: InteractiveElementProps) => {
  const { setCursorType } = useCursor();

  return (
    <Component
      className={className}
      onMouseEnter={() => setCursorType(cursorType)}
      onMouseLeave={() => setCursorType('default')}
      {...props}
    >
      {children}
    </Component>
  );
};
