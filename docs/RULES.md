# Project rules (non-negotiable)

These rules describe the conventions used in this codebase. Follow them strictly for consistency and maintainability.

---

## Hard constraints (must be followed)

- Do not change existing architecture or folder structure.
- Do not introduce new libraries or styling systems without prior approval.
- App Router only — the Pages Router is not used.
- Tailwind is for layout/responsive only; visual styles live in component CSS files.

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

## 7. Commits

- Use conventional commits: `type(scope): message`
- Examples:
  - `feat(home): add hero section`
  - `refactor(ui): extract shared button styles`
  - `docs(architecture): align with static site`
- One logical change per commit.
