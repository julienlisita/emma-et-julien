// src/components/story/chapters/Chapter02.tsx

import clsx from 'clsx';
import Chapter from '../Chapter';
import Illustration from '../Illustration';
import Reveal from '../Reveal';
import './Chapter02.css';

/** II · La première pensée — 320vh */
export default function Chapter02() {
  return (
    <Chapter n={2} numeral="II" title="La première pensée" height={320}>
      <div className="story-fill ch2-sky-a" />
      <div className="story-fill ch2-sky-b" />
      <div className="ch2-sun story-zoom" aria-hidden="true" />

      <div className="ch2-wrap">
        <div className="ch2-text">
          <Reveal a={0.14} d={0.06} className="story-cap story-cap--deep">
            II · La première pensée
          </Reveal>
          <Reveal a={0.18} d={0.08} className="story-serif ch2-l1">
            Chaque matin, lorsque j’ouvre les yeux,
          </Reveal>
          <Reveal soft a={0.28} d={0.1} className={clsx('story-serif', 'story-it', 'ch2-l2')}>
            tu es ma première pensée.
          </Reveal>
          <Reveal a={0.58} d={0.1} className="story-body ch2-body">
            Avant même que la journée ne commence, il y a déjà quelque chose de toi dans mon cœur.
          </Reveal>
        </div>

        <div className="ch2-arch">
          <Illustration
            name="mainsSpitz"
            sizes="(max-width: 760px) 70vw, 40vw"
            className="ch2-img"
          />
        </div>
      </div>

      <div className="story-fill ch2-out" />
    </Chapter>
  );
}
