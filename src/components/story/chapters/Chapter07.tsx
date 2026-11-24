// src/components/story/chapters/Chapter07.tsx

import Chapter from '../Chapter';
import Illustration from '../Illustration';
import Reveal from '../Reveal';
import './Chapter07.css';

/** VII · La femme de ma vie — 440vh */
export default function Chapter07() {
  return (
    <Chapter n={7} numeral="VII" title="La femme de ma vie" height={440}>
      <div className="story-fill ch7-bg" />

      {/* Arche étroite au centre qui s'agrandit jusqu'au plein écran */}
      <div className="ch7-mask">
        <Illustration name="bordeauxRobeBlanche" sizes="100vw" className="ch7-img" />
        <div className="story-fill ch7-veil" />
      </div>

      <div className="ch7-head">
        <Reveal a={0.02} d={0.05} z={0.3} className="story-cap story-cap--deep">
          VII · La femme de ma vie
        </Reveal>
        <Reveal a={0.05} d={0.08} z={0.3} className="story-serif ch7-head-text">
          Quand je pense à la femme avec laquelle je voudrais partager ma vie,
        </Reveal>
      </div>

      <div className="ch7-foot">
        <Reveal soft a={0.15} d={0.08} z={0.3} className="story-serif ch7-foot-text">
          c’est toi que je vois.
        </Reveal>
      </div>

      <div className="story-text-bottom">
        <div className="ch7-cells">
          <div>
            <Reveal a={0.58} d={0.06} z={0.78} className="story-serif ch7-line">
              Celle avec qui je voudrais construire un foyer,
            </Reveal>
            <Reveal a={0.62} d={0.06} z={0.78} className="story-serif ch7-line">
              traverser les années,
            </Reveal>
            <Reveal a={0.66} d={0.06} z={0.78} className="story-serif ch7-line">
              connaître les joies comme les difficultés.
            </Reveal>
          </div>
          <div>
            <Reveal soft a={0.82} d={0.08} className="story-serif ch7-final">
              Celle dont je voudrais tenir la main lorsque nous aurons vieilli.
            </Reveal>
          </div>
        </div>
      </div>

      <div className="story-fill ch7-out" />
    </Chapter>
  );
}
