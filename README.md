# Emma & Julien

Site personnel et narratif (une seule page, plusieurs sections, animations et interactions côté client) consacré à notre histoire, nos souvenirs, nos voyages, nos animaux et notre quotidien.

Initialisé à partir du template `nextjs-ts-tailwind-template`, puis simplifié : pas de base de données, d'authentification, d'administration ni de backend.

## Stack

- [Next.js](https://nextjs.org/) 16 — App Router, Turbopack
- [TypeScript](https://www.typescriptlang.org/) — mode strict, alias `@/*` → `src/*`
- [Tailwind CSS](https://tailwindcss.com/) 3 — layout et responsive ; styles visuels dans des fichiers CSS avec design tokens
- ESLint + Prettier

## Installation

Prérequis : Node.js 24.

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000). Aucune variable d'environnement n'est requise.

Variable optionnelle : `NEXT_PUBLIC_SITE_URL` (URL publique, utilisée pour `metadataBase`).

## Scripts

| Script         | Description                          |
| -------------- | ------------------------------------ |
| `dev`          | Serveur de développement (Turbopack) |
| `build`        | `next build`                         |
| `start`        | Serveur de production                |
| `lint`         | ESLint                               |
| `lint:fix`     | ESLint avec correction automatique   |
| `format`       | Prettier : formate les fichiers      |
| `check-format` | Prettier : vérification seule        |
| `check-types`  | Vérification TypeScript              |

## Aperçu du projet

- **Routes** : App Router uniquement, sous `src/app/` (page d'accueil et 404).
- **Screens** : composition UI dans `src/screens/` (`*Screen.tsx`), sans data fetching.
- **Composants** : `src/components/` (ui, layout, patterns, data-display, navigation). Tailwind pour le layout et le responsive, CSS co-localisé pour le visuel, avec les tokens de `src/app/globals.css`.
- **Référencement** : site temporairement non indexable (`robots` noindex, `robots.txt` en `Disallow: /`).

Règles et conventions : `docs/RULES.md`. Architecture : `docs/ARCHITECTURE.md`.

## Déploiement

```bash
npm run build
npm run start
```
