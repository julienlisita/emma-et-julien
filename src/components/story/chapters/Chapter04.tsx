// src/components/story/chapters/Chapter04.tsx

import clsx from 'clsx';
import Chapter from '../Chapter';
import Illustration from '../Illustration';
import Reveal from '../Reveal';
import './Chapter04.css';

/** IV · Tes yeux, ton sourire — 360vh */
export default function Chapter04() {
  return (
    <Chapter
      n={4}
      numeral="IV"
      title="Tes yeux, ton sourire"
      height={360}
      stageClassName="ch4-stage"
    >
      <Illustration name="oceanJoueContreJoue" sizes="100vw" className="ch4-img" />
      <div className="story-fill ch4-veil-top" />
      <div className="story-fill ch4-veil-bottom" />

      <div className="story-text-top">
        <Reveal a={0.1} d={0.06} z={0.48} className="story-cap">
          IV · Tes yeux, ton sourire
        </Reveal>
        <Reveal soft a={0.13} d={0.08} z={0.48} className={clsx('story-serif', 'ch4-big')}>
          Et puis il y a tes yeux.
        </Reveal>
        <Reveal
          soft
          a={0.3}
          d={0.08}
          z={0.48}
          className={clsx('story-serif', 'ch4-big')}
          style={{ marginTop: 0 }}
        >
          Ton sourire.
        </Reveal>
      </div>

      <div className="story-text-bottom">
        <Reveal a={0.54} d={0.08} className="story-serif ch4-text">
          Il suffit que je pense à ton visage pour retrouver cette délicieuse vulnérabilité que j’ai
          ressentie lorsque je t’ai rencontrée.
        </Reveal>
        <Reveal soft a={0.7} d={0.1} className="story-serif ch4-final">
          Comme si, devant toi, je pouvais encore tomber amoureux pour la première fois.
        </Reveal>
      </div>

      <div className="story-fill ch4-in" />
      <div className="story-fill ch4-out" />
    </Chapter>
  );
}
