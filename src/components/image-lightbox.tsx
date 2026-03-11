'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type LightboxImage = {
  src: string;
  alt: string;
};

type ImageLightboxProps = {
  images: LightboxImage[];
  initialIndex?: number;
  open: boolean;
  onClose: () => void;
};

export function ImageLightbox({ images, initialIndex = 0, open, onClose }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (open) {
      setCurrentIndex(initialIndex);
    }
  }, [open, initialIndex]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (hasMultiple && e.key === 'ArrowRight') {
        goNext();
      } else if (hasMultiple && e.key === 'ArrowLeft') {
        goPrev();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose, goNext, goPrev, hasMultiple]);

  // Touch swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null || !hasMultiple) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    setTouchStart(null);
  };

  if (!images.length) return null;

  const current = images[currentIndex];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Bild-Lightbox"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90" />

          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Schließen"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Counter */}
          {hasMultiple && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-white/70 text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}

          {/* Prev button */}
          {hasMultiple && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
          )}

          {/* Next button */}
          {hasMultiple && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          )}

          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="relative z-[1] max-h-[85vh] max-w-[90vw] md:max-w-[80vw]"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative h-[70vh] w-[90vw] md:h-[80vh] md:w-[75vw]">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Convenience hook to manage lightbox state
 */
export function useLightbox() {
  const [lightboxState, setLightboxState] = useState<{
    open: boolean;
    images: LightboxImage[];
    index: number;
  }>({ open: false, images: [], index: 0 });

  const openLightbox = useCallback((images: LightboxImage[], index = 0) => {
    setLightboxState({ open: true, images, index });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxState((prev) => ({ ...prev, open: false }));
  }, []);

  return { lightboxState, openLightbox, closeLightbox };
}
