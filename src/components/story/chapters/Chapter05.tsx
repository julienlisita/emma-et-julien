// src/components/story/chapters/Chapter05.tsx

import clsx from 'clsx';
import Chapter from '../Chapter';
import Illustration from '../Illustration';
import Reveal from '../Reveal';
import './Chapter05.css';

/** V · La femme que j'admire — 380vh */
export default function Chapter05() {
  return (
    <Chapter
      n={5}
      numeral="V"
      title="La femme que j’admire"
      height={380}
      stageClassName="ch5-stage"
    >
      <div className="ch5-grid">
        <figure className="ch5-fig">
          <div className="ch5-frame">
            <Illustration
              name="praguVltava"
              sizes="(max-width: 760px) 70vw, 40vw"
              className="ch5-img"
            />
          </div>
          <Reveal as="figcaption" a={0.12} d={0.06} className="story-cap ch5-caption">
            Prague, au bord de la Vltava
          </Reveal>
        </figure>

        {/* Trois groupes superposés dans la même cellule : chacun sort avant que le suivant n'entre */}
        <div className="ch5-cells">
          <div>
            <Reveal a={0.08} d={0.06} z={0.38} className="story-cap story-cap--deep">
              V · La femme que j’admire
            </Reveal>
            <Reveal a={0.1} d={0.08} z={0.38} className="story-serif ch5-a">
              J’aime la beauté de ton visage, la douceur de tes traits, ton élégance si naturelle.
            </Reveal>
            <Reveal a={0.22} d={0.08} z={0.38} className="story-serif ch5-b">
              Mais ce qui me touche encore davantage, c’est la femme que tu es.
            </Reveal>
          </div>

          <div>
            <Reveal a={0.43} d={0.06} z={0.7} className="story-serif ch5-word">
              Ton intelligence,
            </Reveal>
            <Reveal
              a={0.48}
              d={0.06}
              z={0.7}
              className={clsx('story-serif', 'story-it', 'ch5-word')}
              style={{ paddingLeft: '10%' }}
            >
              tes valeurs,
            </Reveal>
            <Reveal
              a={0.53}
              d={0.06}
              z={0.7}
              className="story-serif ch5-word"
              style={{ paddingLeft: '4%' }}
            >
              ta sensibilité,
            </Reveal>
            <Reveal
              a={0.58}
              d={0.06}
              z={0.7}
              className={clsx('story-serif', 'story-it', 'ch5-word')}
              style={{ paddingLeft: '14%' }}
            >
              ta manière d’être au monde.
            </Reveal>
          </div>

          <div>
            <Reveal soft a={0.76} d={0.08} className="story-serif ch5-f1">
              Je t’admire
            </Reveal>
            <Reveal soft a={0.82} d={0.08} className="story-serif ch5-f2">
              autant que je t’aime.
            </Reveal>
          </div>
        </div>
      </div>

      <div className="story-fill ch5-out" />
    </Chapter>
  );
}
