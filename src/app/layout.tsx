// src/app/layout.tsx

import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';
import { metadata } from './metadata';
import { viewport } from './viewport';
export { metadata, viewport };

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-jost',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
