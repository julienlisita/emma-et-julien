# Architecture

This document describes the architecture as implemented. It must be kept in sync with the code. The conventions to follow when changing the code are in `docs/RULES.md`.

---

## Architecture summary

- « Pour Emma »: a single-page narrative site made of ten chapters told through scrolling, illustrated with Ghibli-style illustrations.
- No database, authentication, administration, business backend or collected data.
- App Router handles routing; `src/screens/` contains screen components only.
- Server Components by default. The only Client Component of the story is `ScrollEngine`.
- All animations are CSS formulas of a scroll progress variable written by `ScrollEngine`.
- Tailwind = layout/responsive for the template components; the story's visuals and scroll formulas live in co-located CSS files using design tokens.

## 1. High-level stack

- **Next.js 16** — App Router only (`src/app/`). Turbopack bundler; ESLint flat config (`eslint.config.mjs`).
- **TypeScript** — Strict; path alias `@/*` → `src/*`.
- **Tailwind CSS 3** — Layout and responsive; visual styles in component CSS files using design tokens from `globals.css`.
- **next/font/google** — Cormorant Garamond and Jost, exposed as `--font-cormorant` / `--font-jost` and the `--font-display` / `--font-text` tokens.
- **next/image** — Illustrations in AVIF/WebP, quality 90.

---

## 2. Folder structure and roles

```
emma-et-julien/
├── docs/                   # ARCHITECTURE.md, RULES.md
├── handoff/                # Original design hand-off (reference, never modified)
├── public/
│   └── images/illustrations/   # The 11 illustrations, untouched
└── src/
    ├── app/                # App Router: routes, layouts, global styles, metadata
    │   ├── (site)/         # Site layout and home page
    │   └── not-found.tsx   # 404 page
    ├── components/
    │   ├── story/          # « Pour Emma » (see 2.3)
    │   │   └── chapters/   # Chapter01 … Chapter10 (+ CSS)
    │   ├── data-display/   # FeatureCard (template, unused)
    │   ├── layout/         # Section, SectionWrapper, Split (template, unused)
    │   ├── navigation/     # Pagination (template, unused)
    │   ├── patterns/       # ActionsStack, Cta, HeaderBlock, PageHero, SplitSection (template, unused)
    │   └── ui/             # Button, Modal, Eyebrow, PageTitle, … (template, unused)
    ├── config/             # site.ts (name, URL), illustrations.ts (files, alt text)
    ├── lib/                # resolveColor
    ├── screens/            # HomeScreen
    └── utils/              # align, stars (deterministic star field)
```

### 2.1 `src/app/`

- **Root**: `layout.tsx` (html lang="fr", fonts, `globals.css`), `metadata.ts`, `viewport.ts`, `robots.ts`, `not-found.tsx`.
- **`(site)/`**: site layout (`<main>` and `#modal-root`) and `page.tsx` (home), which renders `HomeScreen`.
- The site is non-indexable: `robots: { index: false }` in `metadata.ts` and `Disallow: /` in `robots.ts`. No sitemap.

### 2.2 `src/screens/`

- `HomeScreen` composes `ScrollEngine`, `ProgressThread`, a visually hidden `<h1>` and the ten chapters. Screens do not fetch data.

### 2.3 `src/components/story/`

- `ScrollEngine.tsx` — Client Component, renders nothing. See section 3.
- `Chapter.tsx` — `<section data-ch>` of a given height (in vh) with a sticky 100dvh stage.
- `Reveal.tsx`, `RevealWords.tsx` — text revealed by scroll (fade + rise, optional blur), word by word for chapter III.
- `Illustration.tsx` — `next/image` wrapper (`fill`, `cover`) fed by `config/illustrations.ts`.
- `Stars.tsx` — star field generated on the server from `utils/stars.ts` (Park-Miller, seeds 7 and 23).
- `ProgressThread.tsx` — the only UI element: a thin gold vertical thread that disappears before the final declaration.
- `story.css` — primitives (`story-*`, `reveal`), sky and star styles, reduced motion.
- `chapters/ChapterNN.tsx/.css` — one composition per chapter; classes prefixed `chN-`.

---

## 3. Scroll engine

1. `ScrollEngine` measures section tops and heights (on mount, `resize` and body resize) and, on each frame (`requestAnimationFrame`, passive listener), computes `p = clamp((scrollY − sectionTop) / (sectionHeight − viewportHeight), 0, 1)` and writes it as `--p` on each `[data-ch]`. It writes `g = scrollY / (scrollHeight − viewportHeight)` as `--g` on `[data-progress]`.
2. Everything else is declarative CSS: opacities, translations, zooms, `clip-path`, SVG strokes are `calc()` / `clamp()` of `var(--p)`.
3. Text reveal (`.reveal`): `--a` start, `--d` duration (0.08), `--z` exit start (never), `--zd` exit duration (0.06).
4. The window scrolls (not a dedicated container); stages use `100dvh` with a `100vh` fallback.

## 4. Routing and layouts

- Only `/` and the 404 page exist. The site has no header, footer or menu.

## 5. Styling flow

- Tokens are defined in `src/app/globals.css`: template tokens, then the « Pour Emma » block (colors, gradients, veils, fonts).
- Chapter layouts use CSS files with a single breakpoint at 760px, plus a tablet-portrait rule (761–1100px) for chapters II and V.
- `prefers-reduced-motion` is handled in `story.css` and in the chapters that have looping animations.

## 6. Images

- Source files in `public/images/illustrations/` are never altered. `next/image` generates AVIF/WebP (`images.formats` and `images.qualities` in `next.config.ts`).
- All images are loaded at startup (chapter I with priority, the others with low priority) so that none is empty when it is revealed.

## Non-responsibilities

- No data fetching layer, database, authentication, form handling or analytics.
