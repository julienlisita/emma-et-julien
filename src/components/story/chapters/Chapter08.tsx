// src/components/story/chapters/Chapter08.tsx

import Chapter from '../Chapter';
import Illustration from '../Illustration';
import Reveal from '../Reveal';
import type { CSSVars } from '../types';
import './Chapter08.css';

/** Poussières dorées : positions et délais fixes (maquette) */
const DUST: { left: string; top: string; delay: string }[] = [
  { left: '18%', top: '62%', delay: '0s' },
  { left: '31%', top: '48%', delay: '1.4s' },
  { left: '44%', top: '70%', delay: '3.1s' },
  { left: '57%', top: '44%', delay: '2.2s' },
  { left: '66%', top: '66%', delay: '4.6s' },
  { left: '78%', top: '52%', delay: '0.8s' },
  { left: '86%', top: '72%', delay: '5.4s' },
  { left: '24%', top: '80%', delay: '6.3s' },
];

/** VIII · Notre avenir — 500vh */
export default function Chapter08() {
  return (
    <Chapter n={8} numeral="VIII" title="Notre avenir" height={500} stageClassName="ch8-stage">
      <div className="story-fill ch8-sky-sunset" />
      <div className="story-fill ch8-sky-dusk" />
      <div className="story-fill story-sky-night ch8-sky-night" />

      {/* Soleil-souvenir : descend et s'efface, le couple à l'intérieur */}
      <div className="ch8-sunbox story-zoom">
        <div className="ch8-halo" aria-hidden="true" />
        <div className="ch8-disc">
          <Illustration
            name="bordeauxNuitSpitz"
            sizes="(max-width: 760px) 64vmin, 520px"
            zoom={false}
            className="ch8-img"
          />
          <div className="story-fill ch8-tint" />
          <div className="story-fill ch8-shade" />
        </div>
      </div>

      <div className="story-fill ch8-dust" aria-hidden="true">
        {DUST.map((d, i) => {
          const style: CSSVars = { left: d.left, top: d.top, animationDelay: d.delay };
          return <i key={i} style={style} />;
        })}
      </div>

      <Reveal a={0.02} d={0.05} z={0.3} className="story-cap ch8-cap">
        VIII · Notre avenir
      </Reveal>

      {/* Trois groupes superposés qui se remplacent, comme des vœux qu'on prononce */}
      <div className="ch8-text">
        <div className="ch8-g1">
          <Reveal a={0.05} d={0.07} z={0.28} className="story-serif ch8-line">
            Je nous imagine un jour devant l’autel,
          </Reveal>
          <Reveal a={0.11} d={0.07} z={0.28} className="story-serif ch8-line">
            échangeant nos vœux
          </Reveal>
          <Reveal a={0.17} d={0.07} z={0.28} className="story-serif story-it ch8-line">
            et nous promettant de nous aimer pour la vie.
          </Reveal>
        </div>
        <div className="ch8-g2">
          <Reveal a={0.35} d={0.07} z={0.56} className="story-serif ch8-line">
            Je t’imagine devenir
          </Reveal>
          <Reveal soft a={0.4} d={0.09} z={0.56} className="story-serif ch8-big">
            la mère de nos enfants.
          </Reveal>
        </div>
        <div className="ch8-g3">
          <Reveal a={0.62} d={0.06} z={0.92} className="story-serif ch8-line">
            Je nous imagine leur transmettre ce que nous avons de plus beau,
          </Reveal>
          <Reveal a={0.68} d={0.06} z={0.92} className="story-serif story-it ch8-line">
            les voir grandir,
          </Reveal>
          <Reveal a={0.74} d={0.06} z={0.92} className="story-serif story-it ch8-line">
            et construire ensemble cette famille.
          </Reveal>
        </div>
      </div>
    </Chapter>
  );
}
