# Architecture

This document describes the architecture as implemented. It must be kept in sync with the code. The conventions to follow when changing the code are in `docs/RULES.md`.

---

## Architecture summary

- Single-page personal site (`emma-et-julien`) with several sections, animations and client-side interactions.
- No database, authentication, administration or business backend.
- App Router handles routing; `src/screens/` contains screen components only.
- Server Components by default; Client Components only where interaction requires it.
- Tailwind = layout/responsive; CSS files = visual styling.

## 1. High-level stack

- **Next.js 16** — App Router only (`src/app/`). Turbopack bundler; ESLint flat config (`eslint.config.mjs`).
- **TypeScript** — Strict; path alias `@/*` → `src/*`.
- **Tailwind CSS 3** — Layout and responsive; visual styles in component CSS files using design tokens from `globals.css`.

---

## 2. Folder structure and roles

```
emma-et-julien/
├── docs/                   # ARCHITECTURE.md, RULES.md
├── public/                 # Static assets (favicons, manifest)
└── src/
    ├── app/                # App Router: routes, layouts, global styles, metadata
    │   └── (site)/         # Site layout, home page, not-found
    ├── components/
    │   ├── data-display/   # FeatureCard
    │   ├── layout/         # Section, SectionWrapper, Split
    │   ├── navigation/     # Pagination
    │   ├── patterns/       # ActionsStack, Cta, HeaderBlock, PageHero, SplitSection
    │   └── ui/             # Button, Modal, Eyebrow, PageTitle, SectionTitle, Subtitle, Paragraph, Lead, Prose
    ├── config/             # site.ts (name, URL)
    ├── lib/                # resolveColor
    ├── screens/            # Screen-level UI composition (HomeScreen)
    ├── types/              # Shared types
    └── utils/              # Pure helpers (align)
```

### 2.1 `src/app/`

- **Root**: `layout.tsx` (html/body, `globals.css`), `metadata.ts`, `viewport.ts`, `robots.ts`.
- **`(site)/`**: site layout (`<main>` and `#modal-root`), `page.tsx` (home) and `not-found.tsx`.
- `page.tsx` exports `metadata` and renders a component from `src/screens/`.

### 2.2 `src/screens/`

- Page-level UI composition, imported by `src/app/**/page.tsx`.
- Screens do not fetch data and do not define routes.

### 2.3 `src/components/`

- Reusable components organized by type (see tree above). Each component may have a co-located CSS file with the same base name.

### 2.4 `src/config/`, `src/lib/`, `src/types/`, `src/utils/`

- `config/site.ts`: site name and base URL (`NEXT_PUBLIC_SITE_URL`, optional).
- `lib/resolveColor.ts`, `utils/align.ts`: generic helpers.

---

## 3. Routing and layouts

- Only `/` and the 404 page exist. The site is a single page made of sections.
- Header, footer and final sections will be defined from the design mockup.

## 4. Styling flow

- Tokens (colors, spacing, typography) are defined in `src/app/globals.css`.
- Components use Tailwind for layout/responsive and a co-located CSS file for visual styles, consuming the tokens.

## 5. SEO

- The site is temporarily non-indexable: `robots: { index: false }` in `metadata.ts` and `Disallow: /` in `robots.ts`. No sitemap.

## Non-responsibilities

- No data fetching layer, database, authentication or form handling.
