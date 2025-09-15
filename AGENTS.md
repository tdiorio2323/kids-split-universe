# Repository Guidelines

## Project Structure & Module Organization
- `src/pages`: Route views (e.g., `Index.tsx`, `LucaPage.tsx`, `SofiaPage.tsx`, `NotFound.tsx`).
- `src/components/ui`: Reusable shadcn/ui primitives. Keep presentational; kebab-case filenames export PascalCase components.
- `src/hooks`: Custom hooks (`use-*.tsx`).
- `src/lib`: Shared utilities (e.g., `cn` in `src/lib/utils.ts`).
- `public`: Static assets served as-is. `dist/`: build output.
- Tooling: `vite.config.ts` (alias `@` → `src`), `tailwind.config.ts`, `eslint.config.js`.

## Build, Test, and Development Commands
- Install: `npm i`
- Develop: `npm run dev` — starts Vite on `http://localhost:8080` with React SWC.
- Build: `npm run build` — outputs production bundle to `dist/`.
- Preview: `npm run preview` — serves the built app locally.
- Lint: `npm run lint` — runs ESLint on `*.ts, *.tsx` (dist ignored).

## Coding Style & Naming Conventions
- Language: TypeScript + React 18, function components only.
- Components: PascalCase names; type props with `type`/`interface`.
- Files: pages in PascalCase (`src/pages/HomePage.tsx`), hooks kebab-case (`use-mobile.tsx`), UI components kebab-case filenames exporting PascalCase.
- Imports: prefer alias `@/...` (e.g., `import { cn } from '@/lib/utils'`).
- Styling: Tailwind utilities in `className`; compose with `cn(...)`. Avoid inline styles unless necessary.

## Testing Guidelines
- No automated tests are configured yet. Manually verify changes via `npm run dev` and `npm run preview`.
- If introducing tests, prefer Vitest + React Testing Library; place under `src/__tests__/` and name `*.test.tsx`. Keep components pure and props-driven to ease testing.

## Commit & Pull Request Guidelines
- Commits: short, imperative, and scoped (e.g., "Add Kids Portal landing page"). Group related changes. Optional tag like `[skip lovable]` may appear in history.
- PRs: include purpose, linked issues, and screenshots/GIFs for UI. Ensure `npm run lint` and `npm run build` pass. Note any migrations or env changes.

## Security & Configuration Tips
- Env vars: prefix with `VITE_` (e.g., `VITE_API_URL`) and store in `.env.local` (do not commit). Access via `import.meta.env`.
- Deployment: Vercel configured via `vercel.json`. Do not commit secrets; configure them in the hosting environment.
