// src/components/story/Chapter.tsx

import clsx from 'clsx';
import type { CSSVars } from './types';

type ChapterProps = {
  /** Numéro du chapitre (1 → 10) */
  n: number;
  /** Chiffre romain, pour l'aria-label */
  numeral: string;
  title: string;
  /** Hauteur de la section, en vh (la durée du chapitre) */
  height: number;
  stageClassName?: string;
  stageStyle?: CSSVars;
  children: React.ReactNode;
};

/** Section haute contenant un « stage » collant plein écran. */
export default function Chapter({
  n,
  numeral,
  title,
  height,
  stageClassName,
  stageStyle,
  children,
}: ChapterProps) {
  return (
    <section
      className="story-ch"
      data-ch={n}
      style={{ height: `${height}vh` }}
      aria-label={`Chapitre ${numeral}, ${title}`}
    >
      <div className={clsx('story-stage', stageClassName)} style={stageStyle}>
        {children}
      </div>
    </section>
  );
}
