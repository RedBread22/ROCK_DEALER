import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { CursorProvider } from '@/hooks/use-cursor';
import { Header } from '@/components/header';
import { CustomCursor } from '@/components/custom-cursor';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'ROCK DEALER',
  description: 'Hochwertige Natursteine, Kies & Platten für Garten, Terrasse und Außenbereiche.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased lg:cursor-none">
        <CursorProvider>
          <CustomCursor />
          <Header />
          {children}
          <Footer />
          <Toaster />
        </CursorProvider>
      </body>
    </html>
  );
}
