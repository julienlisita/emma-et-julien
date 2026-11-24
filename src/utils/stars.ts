// src/utils/stars.ts

export type Star = {
  /** Position, en % (chaînes déjà formatées) */
  x: string;
  y: string;
  /** Taille, en px */
  size: string;
  /** Seuil d'apparition (progression du chapitre) */
  a: string;
  /** Délai du scintillement, en s */
  delay: string;
};

/**
 * Étoiles déterministes (générateur Park-Miller) : mêmes positions à chaque rendu,
 * identiques à celles de la maquette (graines 7 et 23).
 */
export function makeStars(count: number, seed: number, staggered: boolean): Star[] {
  let s = seed;
  const r = () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
  const out: Star[] = [];
  for (let i = 0; i < count; i++) {
    const big = r() > 0.86;
    out.push({
      x: (r() * 100).toFixed(2),
      y: (r() * 82).toFixed(2),
      size: (big ? 2.2 + r() * 1.4 : 1 + r() * 1.2).toFixed(2),
      a: staggered ? (r() * 0.5).toFixed(3) : '0',
      delay: (r() * 6).toFixed(2),
    });
  }
  return out;
}
