// src/components/story/chapters/Chapter10.tsx

import Chapter from '../Chapter';
import Illustration from '../Illustration';
import Reveal from '../Reveal';
import Stars from '../Stars';
import './Chapter10.css';

/**
 * X · La déclaration — 560vh
 * Rien ne sort : à p = 1 la composition reste affichée. Aucun bouton, aucun lien, rien après « Et toujours. ».
 */
export default function Chapter10() {
  return (
    <Chapter
      n={10}
      numeral="X"
      title="La déclaration"
      height={560}
      stageClassName="story-sky-night"
    >
      <Stars count={70} seed={23} allVisible className="ch10-stars" />

      {/* Le baiser émerge de la nuit */}
      <Illustration name="baiserPlaceDeLaBourse" sizes="100vw" className="ch10-img" />
      <div className="story-fill ch10-veil" />
      <div className="story-fill ch10-dim" />

      <div className="ch10-text">
        <Reveal soft a={0.36} d={0.12} className="story-serif ch10-love">
          Je t’aime.
        </Reveal>
        <p className="story-serif ch10-row">
          <Reveal as="span" a={0.52} d={0.08}>
            Aujourd’hui.
          </Reveal>{' '}
          <Reveal as="span" a={0.58} d={0.06} className="ch10-dot" decorative>
            ·
          </Reveal>{' '}
          <Reveal as="span" a={0.62} d={0.08}>
            Demain.
          </Reveal>
        </p>
        <Reveal soft a={0.74} d={0.12} className="story-serif ch10-always">
          Et toujours.
        </Reveal>
        <div className="ch10-rule" aria-hidden="true" />
      </div>
    </Chapter>
  );
}
