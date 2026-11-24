// src/app/metadata.ts

import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/config/site';

export const metadata: Metadata = {
  title: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  // Site personnel : non indexable (temporaire)
  robots: { index: false, follow: false },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  manifest: '/site.webmanifest',
};
