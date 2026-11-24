// src/components/story/Stars.tsx

import { makeStars } from '@/utils/stars';
import type { CSSVars } from './types';

type StarsProps = {
  count: number;
  seed: number;
  /** Chaque étoile apparaît à son propre seuil de progression */
  staggered?: boolean;
  /** Toutes les étoiles sont visibles (chapitre X) */
  allVisible?: boolean;
  className?: string;
};

/** Champ d'étoiles décoratif, généré côté serveur. */
export default function Stars({
  count,
  seed,
  staggered = false,
  allVisible = false,
  className,
}: StarsProps) {
  const stars = makeStars(count, seed, staggered);
  return (
    <div
      className={['story-fill', allVisible ? 'story-stars--on' : '', className ?? '']
        .filter(Boolean)
        .join(' ')}
      aria-hidden="true"
    >
      {stars.map((st, i) => {
        const style: CSSVars = {
          left: `${st.x}%`,
          top: `${st.y}%`,
          width: `${st.size}px`,
          height: `${st.size}px`,
          '--a': st.a,
          '--dl': `${st.delay}s`,
        };
        return <i key={i} className="story-star" style={style} />;
      })}
    </div>
  );
}
