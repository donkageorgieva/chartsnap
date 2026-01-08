
# ChartSnap

Trading screenshot journal focused on decision quality. Capture before/after charts, annotate key zones, track discipline, and analyze how process adherence impacts performance.

## Stack (planned)

| Layer    | Tech                                                                 |
|----------|----------------------------------------------------------------------|
| Frontend | React + TypeScript, Vite, TanStack Query, React Hook Form + Zod, Tailwind + shadcn/ui, Recharts, Vitest + RTL |
| Backend  | Node.js + Express, OpenAPI (YAML-first) + Swagger UI, Prisma ORM, SQLite (dev) / PostgreSQL (prod), Multer uploads |

## High-level features

1. Upload/store before & after trade screenshots.
2. Journal entries with structured metadata (instrument, direction, entry/stop/target, notes).
3. Rectangle annotations for key zones (entry, stop, target, mistakes).
4. Gallery view with filters (instrument, setup, date range, discipline score).
5. Customizable discipline checklist with auto score.
6. Analytics: discipline vs win-rate, top setups, missed rules.

## Current status

- `api/` Node workspace bootstrapped with Express + TypeScript deps.
- `spec/` folder reserved for OpenAPI contract.
- `.gitignore` covers Node artifacts and env files.

## Next steps

1. Add `src/app.ts` and `src/server.ts`, wire CORS, JSON parsing, `/health`.
2. Add npm scripts (`dev`, `build`, `start`, `spec:validate`).
3. Draft OpenAPI spec (`spec/chartsnap.yaml`), expose via Swagger UI.
4. Initialize Prisma (`npx prisma init`) with base models.
5. Implement Auth & Journal Entry endpoints per spec.

## Development

```bash
cd api
npm install
npm run dev   # after scripts + server scaffold exist
```

Environment variables (`api/.env`):

```
PORT=4000
DATABASE_URL="file:./dev.db"
JWT_SECRET="dev-secret"
```

Copy from `.env.example` before running locally.
