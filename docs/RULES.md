# Project rules (non-negotiable)

These rules describe the conventions used in this codebase. Follow them strictly for consistency and maintainability.

---

## Hard constraints (must be followed)

- Do not change existing architecture or folder structure.
- Do not introduce new libraries or styling systems without prior approval.
- App Router only — the Pages Router is not used.
- Tailwind is for layout/responsive only; visual styles live in component CSS files (the scroll-driven story is the one documented exception, see §7).
- `handoff/` is the original design reference: never modify it.

---

## 1. Styling

### 1.1 Tailwind for layout and responsive only

Use **Tailwind CSS** (or `@apply` in CSS files) for:

- Layout: flexbox, grid, alignment, spacing
- Responsive behavior: breakpoints (`sm:`, `md:`, `lg:`), visibility (`hidden`, `lg:block`)
- Structural sizing and positioning (e.g. `w-full`, `max-w-6xl`, `px-4`)

Prefer Tailwind utility classes directly in JSX for layout/responsive.  
Use `@apply` in component CSS files when grouping layout rules into a named class.

### 1.2 CSS files for visual styles

Use **component-level CSS files** (e.g. `Button.css`, `Header.css`) for:

- Colors (via design tokens: `var(--color-*)`, `var(--btn-primary-bg)`, etc.)
- Borders, shadows
- Transitions, focus/hover/active states
- Thematic typography (font-weight, text-decoration, etc.)

Design tokens are defined in **`src/app/globals.css`** (sources → brand → UI tokens).

Rules:

- Do not hardcode hex, rgb, or hsl values for brand/UI colors in components.
- Always use existing tokens when possible.
- If a new visual variable is required, add a token in `globals.css` following the existing structure.
- Reuse an existing token only if its value and theme behavior (light/dark) match; otherwise add a dedicated token.
- Each component that needs custom visuals must have a co-located `.css` file imported in the component (e.g. `import './Button.css'`).

### 1.3 Summary

| Concern                   | Use                    |
| ------------------------- | ---------------------- |
| Layout, flex, grid        | Tailwind (or `@apply`) |
| Responsive, breakpoints   | Tailwind               |
| Colors, borders, shadows  | CSS + design tokens    |
| Hover, focus, transitions | CSS files              |

### 1.4 Scope of the rules

- **Pages and screens**: Tailwind for layout and responsive only. Colors and visual identity use CSS files and design tokens.
- **Shared components** (`src/components/ui/`, `layout/`, `patterns/`, etc.): prefer semantic tokens (e.g. `--color-surface`, `--color-primary`) for important colors.
- Do not add Tailwind color classes: use a co-located CSS class with design tokens.

---

## 2. File and folder structure

- **Do not rename or move** the existing top-level folders:
  `src/app`, `src/components`, `src/screens`, `src/config`, `src/lib`, `src/types`, `src/utils`, `public`.
- App Router routes live under `src/app/` only.
- Screen components live in `src/screens/` and are imported by `app/**/page.tsx` files.
- `src/screens/` contains UI composition only (no data fetching, no routing logic).
- The site has no backend, database or authentication. Content is static.

---

## 3. Naming conventions

### Components

- PascalCase (e.g. `Button.tsx`, `SectionTitle.tsx`).
- Co-located CSS must use the same base name (e.g. `Button.css`).

### Screens

- Must use the `*Screen.tsx` suffix (e.g. `HomeScreen.tsx`).
- Screens live in `src/screens/`.

### Route segments

- Lowercase folder names.
- Dynamic segments use brackets (e.g. `[slug]`).

---

## 4. Server and Client Components

- Server Components are the default.
- Add `'use client'` only where needed (state, effects, browser APIs, animations, interactions), and keep Client Components as small and as low in the tree as possible.
- Pass static content from Server Components to Client Components as props rather than turning whole sections into Client Components.

---

## 5. Accessibility and responsive design

- Use semantic HTML and a coherent heading hierarchy.
- Interactive elements must be keyboard accessible with a visible focus state.
- Respect `prefers-reduced-motion` for animations.
- Design mobile-first; use Tailwind breakpoints for responsive behavior.

---

## 6. Code quality

- ESLint and Prettier are enforced.
- Run `lint`, `check-types`, and `check-format` before committing.
- TypeScript strict mode is enabled.
- Use the existing `@/*` path alias for `src/`.
- Do not introduce new architectural patterns or dependencies without approval.

---

## 7. « Pour Emma » — expérience au défilement

Rules specific to the story in `src/components/story/` (reference: `handoff/`).

### Scroll engine and CSS

- `ScrollEngine` (the only Client Component of the story) writes `--p` (0 → 1) on each `[data-ch]` section and `--g` on `[data-progress]`. Never store the scroll progress in React state and never re-render per frame.
- Animations are **scrubbed**: opacity, transform, `clip-path`, `filter` and `stroke-dashoffset` are `calc()` / `clamp()` of `var(--p)` in the chapter's CSS file. This is the exception to "Tailwind for layout, CSS for visuals": the scroll-driven formulas must stay in CSS files, and layout that depends on them (positions, sizes, grids) may live there too.
- Chapters are Server Components. Reveal timings (`a`, `d`, `z`, `zd`) are props of `Reveal`; do not change them without checking `handoff/docs/03-chapitres.md`.
- No scroll-jacking, no snapping, no `scroll-behavior` override: the user keeps control, and scrolling back replays everything in reverse.
- Never use `overflow: hidden` on an ancestor of a sticky stage (use `overflow-x: clip`).
- The story root sets `line-height: normal` (the mockup depends on it; Tailwind's preflight sets 1.5).

### Naming

- Chapter components: `ChapterNN.tsx` + co-located `ChapterNN.css`; CSS classes prefixed `chN-` (e.g. `ch4-img`).
- Shared primitives: `story-*` classes in `story.css` (`story-stage`, `story-fill`, `story-cap`, …) and `reveal` / `reveal--soft`.
- Colors, gradients, veils and fonts come from the `--color-*`, `--gradient-*`, `--veil-*` and `--font-*` tokens in `globals.css`.

### Content and images

- Texts are not reworded: they come from `handoff/contenu/textes.json` (French typography: ’, …, ·).
- Illustrations are never edited, regenerated, filtered or replaced. They are listed with their alt text in `src/config/illustrations.ts` and rendered with `Illustration` (`next/image`, quality 90). Only crops, masks, zoom/parallax driven by scroll and overlay veils are allowed.
- Nothing is added after « Et toujours. » (no button, link, form, share or counter), and no analytics without explicit approval.
- Decorative layers (sun, veils, stars, dust, wave, ghost text, progress thread) are `aria-hidden`.

### Motion and responsive

- `prefers-reduced-motion: reduce` removes translations, blur, zoom/parallax and looping animations; fades (driven by the user's scroll) stay.
- Single breakpoint in the mockup: 760px. Tablets in portrait (761–1100px) reuse the stacked phone layout for chapters II and V, where the desktop layout would overflow.

---

## 8. Commits

- Use conventional commits: `type(scope): message`
- Examples:
  - `feat(home): add hero section`
  - `refactor(ui): extract shared button styles`
  - `docs(architecture): align with static site`
- One logical change per commit.
