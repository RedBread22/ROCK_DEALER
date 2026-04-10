'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
    window.location.reload();
  }

  function reject() {
    localStorage.setItem('cookie-consent', 'rejected');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] border-t border-border bg-card p-4 shadow-lg sm:p-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:gap-6">
        <p className="text-sm text-muted-foreground sm:text-base">
          Wir verwenden Cookies, um die Nutzererfahrung zu analysieren und unsere
          Website zu verbessern. Mit Ihrer Zustimmung helfen Sie uns dabei. Mehr
          erfahren Sie in unserer{' '}
          <Link href="/datenschutz" className="underline hover:text-foreground">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={reject}
            className="rounded-md bg-secondary px-5 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
