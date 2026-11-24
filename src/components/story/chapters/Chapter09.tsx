// src/components/story/chapters/Chapter09.tsx

import Chapter from '../Chapter';
import Reveal from '../Reveal';
import Stars from '../Stars';
import './Chapter09.css';

/** IX · Ce que je veux te dire aujourd'hui — 340vh */
export default function Chapter09() {
  return (
    <Chapter
      n={9}
      numeral="IX"
      title="Ce que je veux te dire aujourd’hui"
      height={340}
      stageClassName="story-sky-night"
    >
      <Stars count={90} seed={7} staggered />

      <div className="ch9-text">
        <div>
          <Reveal a={0.06} d={0.05} z={0.48} className="story-cap ch9-cap">
            IX · Aujourd’hui
          </Reveal>
          <Reveal a={0.1} d={0.08} z={0.48} className="story-serif ch9-a">
            Aujourd’hui, je n’ai pas envie de laisser mes sentiments dans le silence.
          </Reveal>
          <Reveal a={0.22} d={0.08} z={0.48} className="story-serif ch9-b">
            J’ai envie de te dire combien tu comptes pour moi.
          </Reveal>
        </div>
        <div>
          <Reveal a={0.56} d={0.06} z={0.93} className="story-serif ch9-c">
            Combien je t’admire.
          </Reveal>
          <Reveal a={0.64} d={0.06} z={0.93} className="story-serif ch9-c">
            Combien tu me touches.
          </Reveal>
          <Reveal soft a={0.72} d={0.08} z={0.93} className="story-serif ch9-last">
            Combien je t’aime.
          </Reveal>
        </div>
      </div>
    </Chapter>
  );
}
