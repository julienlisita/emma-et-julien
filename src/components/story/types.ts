// src/components/story/types.ts

import type { CSSProperties } from 'react';

/** Style React autorisant les variables CSS personnalisées (--a, --d, --z, …). */
export type CSSVars = CSSProperties & { [key: `--${string}`]: string | number | undefined };
