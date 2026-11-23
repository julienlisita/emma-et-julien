// src/app/robots.ts

import type { MetadataRoute } from 'next';

// Site personnel : aucune indexation (temporaire)
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
  };
}
