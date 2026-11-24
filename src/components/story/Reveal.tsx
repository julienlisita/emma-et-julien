// src/components/story/Reveal.tsx

import clsx from 'clsx';
import type { CSSVars } from './types';

type RevealProps = {
  as?: 'p' | 'div' | 'span' | 'figcaption';
  /** Début de l'entrée (progression du chapitre, 0 → 1) */
  a: number;
  /** Durée de l'entrée (défaut 0,08) */
  d?: number;
  /** Début de la sortie (défaut : jamais) */
  z?: number;
  /** Durée de la sortie (défaut 0,06) */
  zd?: number;
  /** Ajoute un flou 8px → 0 à l'entrée (grandes phrases) */
  soft?: boolean;
  className?: string;
  style?: CSSVars;
  children: React.ReactNode;
};

/** Texte révélé au défilement. Formule dans docs/04 et components/story/story.css. */
export default function Reveal({
  as: Tag = 'p',
  a,
  d,
  z,
  zd,
  soft,
  className,
  style,
  children,
}: RevealProps) {
  const vars: CSSVars = { '--a': a, '--d': d, '--z': z, '--zd': zd, ...style };
  return (
    <Tag className={clsx('reveal', soft && 'reveal--soft', className)} style={vars}>
      {children}
    </Tag>
  );
}
