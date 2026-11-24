// src/components/story/RevealWords.tsx

import clsx from 'clsx';
import type { CSSVars } from './types';

export type RevealWord = { text: string; italic?: boolean };

type RevealWordsProps = {
  words: RevealWord[];
  /** Début du premier mot */
  a: number;
  /** Décalage entre deux mots (défaut 0,024) */
  step?: number;
  /** Durée d'entrée de chaque mot (défaut 0,05) */
  d?: number;
  /** Début de la sortie (commune à tous les mots) */
  z?: number;
  className?: string;
};

/** Phrase révélée mot par mot : chaque mot est un inline-block avec un --a décalé. */
export default function RevealWords({
  words,
  a,
  step = 0.024,
  d = 0.05,
  z,
  className,
}: RevealWordsProps) {
  return (
    <p className={className}>
      {words.map((w, i) => {
        const vars: CSSVars = { '--a': Number((a + i * step).toFixed(3)), '--d': d, '--z': z };
        return (
          <span key={i}>
            <span className={clsx('story-word', 'reveal', w.italic && 'story-it')} style={vars}>
              {w.text}
            </span>
            {i < words.length - 1 ? ' ' : null}
          </span>
        );
      })}
    </p>
  );
}
