// src/config/site.ts

export const SITE_NAME = 'Pour Emma';

const DEFAULT_SITE_URL = 'http://localhost:3000';

/** Public base URL of the site (no trailing slash). Optional: set NEXT_PUBLIC_SITE_URL in .env. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '');
