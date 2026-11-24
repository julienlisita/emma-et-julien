// src/components/story/chapters/Chapter03.tsx

import Chapter from '../Chapter';
import Illustration from '../Illustration';
import Reveal from '../Reveal';
import RevealWords, { type RevealWord } from '../RevealWords';
import './Chapter03.css';

const WORDS: RevealWord[] = [
  { text: 'Il' },
  { text: 'y' },
  { text: 'a' },
  { text: 'dans' },
  { text: 'ta' },
  { text: 'voix' },
  { text: 'une' },
  { text: 'douceur', italic: true },
  { text: 'qui' },
  { text: 'me' },
  { text: 'touche' },
  { text: 'comme' },
  { text: 'aucune' },
  { text: 'autre.' },
];

const WAVE_PATH =
  'M0 15 Q 25 3 50 15 T 100 15 T 150 15 T 200 15 T 250 15 T 300 15 T 350 15 T 400 15 T 450 15 T 500 15 T 550 15 T 600 15';

/** III · Ta voix — 300vh */
export default function Chapter03() {
  return (
    <Chapter n={3} numeral="III" title="Ta voix" height={300} stageClassName="ch3-stage">
      <div className="ch3-wrap">
        <Reveal as="div" a={0.04} d={0.1} z={0.9} className="ch3-oval">
          <Illustration name="emmaSpitzCuisine" sizes="280px" className="ch3-img" />
        </Reveal>

        <Reveal a={0.08} d={0.06} z={0.9} className="story-cap story-cap--deep">
          III · Ta voix
        </Reveal>

        <RevealWords words={WORDS} a={0.14} z={0.9} className="story-serif ch3-l1" />

        <svg
          className="ch3-wave"
          viewBox="0 0 600 30"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path pathLength="1" d={WAVE_PATH} />
        </svg>

        <Reveal a={0.56} d={0.1} z={0.9} className="story-serif ch3-l2">
          Tes mots résonnent en moi avec cette tendresse que je ne retrouve nulle part ailleurs.
        </Reveal>
      </div>
    </Chapter>
  );
}
