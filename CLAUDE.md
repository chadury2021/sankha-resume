# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server
- `npm run build` — TypeScript check + Vite production build
- `npm run lint` — ESLint (max-warnings=0)
- `npm run lint:fix` — Auto-fix ESLint issues
- `npm run format` — Prettier formatting
- `npm run preview` — Preview production build
- `npm test` — Run all tests (Vitest)
- `npm run test:watch` — Run tests in watch mode
- `npm run test:coverage` — Run tests with coverage report

Run a single test file: `npx vitest run src/lib/utils.test.ts`

## Architecture

Personal portfolio SPA built with React 18, TypeScript, Vite, Tailwind CSS, and Framer Motion. Deployed on Vercel.

### Routing

React Router v6 with nested routes under `MainLayout`:

- `/` Home, `/about`, `/education`, `/experience`, `/talks`, `/writings`, `/achievements`, `/research`, `/external-profiles`

Routes defined in `src/App.tsx`. All pages render inside `MainLayout`'s `<Outlet>`.

### Layout

`MainLayout` (`src/layouts/MainLayout.tsx`) manages the sidebar/header state:
- **Desktop (lg+)**: Fixed sidebar + scrollable main content
- **Mobile (<lg)**: Sticky header with hamburger menu, sidebar as modal overlay. Body overflow toggled when sidebar opens.

### Page pattern

Pages with list data keep content in a sibling `data.tsx` file (e.g., `src/pages/Experience/data.tsx`). Pages follow a consistent animation pattern using Framer Motion (`initial={{ opacity: 0, y: 20 }}` → `animate`).

### Reusable components (`src/components/reusable/`)

- **InfoCard** — Two modes: `info` (content display) and `link` (clickable card)
- **DateCard** — Timeline card with date tag, icon, and items grid
- **LinkText** — Styled external link

### SVG imports

SVGs are imported as React components via `vite-plugin-svgr`. Type declarations in `src/types/svg.d.ts`.

### Styling

- Tailwind with custom colors (`primary`, `secondary`, `accent`), custom font families (`ethosNova`, `shuriken`, plus Japanese font stacks for `sans`/`heading`)
- CSS layers in `src/styles/index.css`: `@layer base` for globals, `@layer components` for reusable classes (`.container`, `.title`, `.icon-box`)
- `cn()` utility in `src/lib/utils.ts` (clsx + tailwind-merge) for conditional class merging

### Path aliases

`src/*` is aliased in both `tsconfig.json` and `vite.config.ts`, so imports use `src/` prefix.
