// src/components/story/chapters/Chapter06.tsx

import Chapter from '../Chapter';
import Illustration from '../Illustration';
import Reveal from '../Reveal';
import './Chapter06.css';

/** VI · Le bonheur des choses simples — 500vh */
export default function Chapter06() {
  return (
    <Chapter n={6} numeral="VI" title="Le bonheur des choses simples" height={500}>
      <div className="story-fill ch6-bg" />

      {/* Texte fantôme : traverse l'écran de droite à gauche */}
      <p className="story-serif ch6-ghost story-zoom" aria-hidden="true">
        les choses simples · les choses simples
      </p>

      <div className="ch6-intro">
        <Reveal a={0.02} d={0.05} z={0.2} className="story-cap story-cap--deep">
          VI · Le bonheur des choses simples
        </Reveal>
        <Reveal soft a={0.04} d={0.07} z={0.2} className="story-serif ch6-big">
          Avec toi, même les instants les plus simples deviennent précieux.
        </Reveal>
      </div>

      {/* Bande horizontale : entre par la droite puis défile vers la gauche (h = progression 0,12 → 0,76) */}
      <div className="ch6-strip">
        <figure className="ch6-fig" style={{ marginTop: '-8vh' }}>
          <div className="ch6-ph">
            <Illustration
              name="lacPins"
              sizes="(max-width: 760px) 40vw, 30vw"
              className="ch6-img"
            />
          </div>
          <figcaption className="story-cap ch6-caption">Au bord du lac</figcaption>
        </figure>
        <p className="story-serif ch6-word">Une baignade</p>

        <figure className="ch6-fig" style={{ marginTop: '10vh' }}>
          <div className="ch6-ph ch6-ph--landscape">
            <Illustration
              name="soireeSpitz"
              sizes="(max-width: 760px) 60vw, 45vw"
              className="ch6-img"
            />
          </div>
          <figcaption className="story-cap ch6-caption">Nos soirées, tous les trois</figcaption>
        </figure>
        <p className="story-serif ch6-word">un moment à ne rien faire…</p>

        <figure className="ch6-fig" style={{ marginTop: '-6vh' }}>
          <div className="ch6-ph">
            <Illustration
              name="cafePetitDejeuner"
              sizes="(max-width: 760px) 40vw, 30vw"
              className="ch6-img"
              style={{ objectPosition: '50% 30%' }}
            />
          </div>
          <figcaption className="story-cap ch6-caption">Nos matins au café</figcaption>
        </figure>
        <p className="story-serif ch6-word">un sourire échangé,</p>
      </div>

      <div className="story-fill ch6-end" />
      <div className="ch6-endtext">
        <Reveal a={0.82} d={0.06} z={0.95} zd={0.04} className="story-serif ch6-e1">
          Ce n’est pas seulement ce que nous vivons qui me rend heureux.
        </Reveal>
        <Reveal soft a={0.87} d={0.06} z={0.95} zd={0.04} className="story-serif ch6-e2">
          C’est de le vivre avec toi.
        </Reveal>
      </div>
    </Chapter>
  );
}
