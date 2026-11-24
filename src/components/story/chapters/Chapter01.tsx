// src/components/story/chapters/Chapter01.tsx

import Chapter from '../Chapter';
import Illustration from '../Illustration';
import Reveal from '../Reveal';
import './Chapter01.css';

/** I · Emma — 340vh */
export default function Chapter01() {
  return (
    <Chapter n={1} numeral="I" title="Emma" height={340} stageClassName="ch1-stage">
      <Illustration name="parisSeine" sizes="100vw" priority className="ch1-img" />
      <div className="story-fill ch1-veil" />

      <div className="ch1-cue">
        <p className="story-serif ch1-sig">Pour Emma</p>
        <span className="story-cap">Faire défiler</span>
        <span className="ch1-cue-line" aria-hidden="true" />
      </div>

      <div className="story-text-bottom">
        <Reveal soft a={0.12} d={0.1} z={0.52} className="story-serif story-it ch1-name">
          Emma,
        </Reveal>
        <Reveal a={0.22} d={0.1} z={0.52} className="story-serif ch1-l1">
          il y a tant de choses que j’ai envie de te dire…
        </Reveal>
      </div>
      <div className="story-text-bottom">
        <Reveal soft a={0.6} d={0.1} z={0.86} zd={0.05} className="story-serif story-it ch1-l2">
          Et tant de choses que j’aime chez toi.
        </Reveal>
      </div>

      <div className="story-fill ch1-out" />
    </Chapter>
  );
}
