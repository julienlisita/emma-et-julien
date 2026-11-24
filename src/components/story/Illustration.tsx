// src/components/story/Illustration.tsx

import Image from 'next/image';
import clsx from 'clsx';
import { ILLUSTRATIONS, type IllustrationKey } from '@/config/illustrations';
import type { CSSVars } from './types';

type IllustrationProps = {
  name: IllustrationKey;
  sizes: string;
  className?: string;
  style?: CSSVars;
  /** Image du premier chapitre : chargée en priorité */
  priority?: boolean;
  /** Anime l'image (zoom / parallaxe) : neutralisé en mode animations réduites */
  zoom?: boolean;
};

/**
 * Illustration plein cadre (object-fit: cover). Les images sont toutes chargées dès l'ouverture
 * (priorité basse sauf le chapitre I) pour qu'aucune ne soit vide au moment de son dévoilement.
 */
export default function Illustration({
  name,
  sizes,
  className,
  style,
  priority,
  zoom = true,
}: IllustrationProps) {
  const { src, alt } = ILLUSTRATIONS[name];
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={90}
      priority={priority}
      loading={priority ? undefined : 'eager'}
      fetchPriority={priority ? undefined : 'low'}
      className={clsx('story-cover', zoom && 'story-zoom', className)}
      style={style}
    />
  );
}
