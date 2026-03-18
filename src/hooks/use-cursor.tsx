"use client";

import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';

export type CursorType = 'default' | 'link' | 'text' | 'magnetic';

type CursorContextType = {
  cursorType: CursorType;
  setCursorType: (type: CursorType) => void;
};

const CursorContext = createContext<CursorContextType | null>(null);

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursorType, setCursorTypeRaw] = useState<CursorType>('default');

  const setCursorType = useCallback((type: CursorType) => {
    setCursorTypeRaw((prev) => (prev === type ? prev : type));
  }, []);

  const value = useMemo(
    () => ({ cursorType, setCursorType }),
    [cursorType, setCursorType]
  );

  return (
    <CursorContext.Provider value={value}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};
