# CLAUDE.md

Site personnel « Pour Emma » (projet `emma-et-julien`) : déclaration d'amour en dix chapitres racontée au défilement, en Next.js (App Router) + React + TypeScript + Tailwind CSS. Aucune base de données, authentification, administration ni backend métier.

Path alias: `@/*` → `src/*`.

Dependency versions are defined in `package.json`, which is the source of truth.

## Reference Documentation

Read the relevant documentation before making any code changes:

- `docs/RULES.md` — development rules (styling, naming conventions, Server/Client Components, commits).
- `docs/ARCHITECTURE.md` — directory structure and styling architecture.
- `README.md` — installation, scripts, and deployment.
- `handoff/` — original design hand-off (texts, illustrations, specs). It is the reference and must never be modified.

Follow the documented conventions.

If the documentation conflicts with the actual implementation, report the inconsistency before making changes.

## Commands

- Development: `npm run dev`
- Production build: `npm run build`
- TypeScript validation: `npm run check-types`
- ESLint validation: `npm run lint`
- Formatting validation: `npm run check-format`

Before completing a task, run the relevant validation commands.

There are currently no automated tests in the repository.

## Core Development Rules

Detailed rules are defined in `docs/RULES.md`.

- Preserve the existing architecture. Any architectural changes, new dependencies, or new patterns must be justified and approved before implementation.
- `src/screens/*Screen.tsx` components are responsible for UI composition only and must not fetch data.
- Server Components by default; use `'use client'` only when needed (state, effects, animations, interactions).
- Use Tailwind CSS for layout and responsive design.
- Use co-located CSS files for colors, borders, typography, visual effects, and interactive states.
- Use design tokens defined in `src/app/globals.css`. Avoid hardcoded hexadecimal colors.
- Use the App Router exclusively. The Pages Router is not allowed.
- Do not reword the texts, do not alter the illustrations, and add nothing after « Et toujours. » (see `docs/RULES.md` §7).
- Follow Conventional Commits: `type(scope): message`, with one logical change per commit.

## Important Considerations

### Environment Variables

`.env` files may contain sensitive information. Never expose their contents or commit them. The project needs no environment variable to run (`NEXT_PUBLIC_SITE_URL` is optional).

## Dependency Updates and Migrations

For any significant dependency update or technical migration:

1. Inspect the current dependency versions and project configuration.
2. Consult the official migration guides and documentation.
3. Identify breaking changes, incompatibilities, and potential risks.
4. Present a migration plan before modifying the code.
5. Request approval before implementing major changes.
6. Apply changes incrementally, in logically grouped steps.
7. Validate the application after each step.

Additional rules:

- Preserve existing functionality.
- Never run `npm audit fix --force` without explicit approval.
- Never suppress TypeScript or ESLint errors merely to make the build pass.
- Avoid unrelated changes.
- Update project documentation whenever architecture or conventions change.

## Communication

- Always communicate with the user in French, even though this file is written in English.
- Briefly explain important technical decisions.
- Clearly report risks, limitations, and trade-offs.
- Prefer simple, maintainable, and reusable solutions.
- Never implement major changes without prior approval.
