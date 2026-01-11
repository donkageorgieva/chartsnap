# ChartSnap

Trading screenshot journal focused on decision quality. Capture before/after charts, annotate key zones, track discipline, and analyze how process adherence impacts performance.

## Stack (planned)

| Layer    | Tech                                                                                                               |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| Frontend | React + TypeScript, Vite, TanStack Query, React Hook Form + Zod, Tailwind + shadcn/ui, Recharts, Vitest + RTL      |
| Backend  | Node.js + Express, OpenAPI (YAML-first) + Swagger UI, Prisma ORM, SQLite (dev) / PostgreSQL (prod), Multer uploads |

## High-level features

1. Upload/store before & after trade screenshots.
2. Journal entries with structured metadata (instrument, direction, entry/stop/target, notes).
3. Rectangle annotations for key zones (entry, stop, target, mistakes).
4. Gallery view with filters (instrument, setup, date range, discipline score).
5. Customizable discipline checklist with auto score.
6. Analytics: discipline vs win-rate, top setups, missed rules.

## Current status

- `api/` includes:
  - Express server wired to the OpenAPI spec served at `/docs`.
  - Auth routes (`/auth/register`, `/auth/login`, `/users/me`) with Prisma + JWT.
  - Prisma schema, initial migration, and `.env.example`.
- `client/` contains a Vite + React + TypeScript shell with SCSS support (`reset.scss`, mixins, global entry).
- Root Prettier config + VS Code settings keep formatting consistent.

## Next steps

1. Flesh out the React UI (routing, layout shell, journaling flows).
2. Implement journal-entry CRUD + file uploads in the API.
3. Add automated tests (Vitest/RTL for client, integration tests for API).
4. Containerize via Docker or add a root `npm run dev` that runs both workspaces concurrently.
5. Prepare deployment scripts/infrastructure (Render/Fly.io/S3+CloudFront, etc.).

## Development

### Prerequisites

- Node.js 20.19+ (required by Vite and Prisma).
- npm 10+ (ships with Node 20).

### Backend (`api/`)

```bash
cd api
npm install
cp .env.example .env   # fill JWT_SECRET with a strong value
npx prisma migrate dev # creates dev SQLite DB
npm run dev            # http://localhost:4000
```

Key scripts:

| Script              | Description                        |
| ------------------- | ---------------------------------- |
| `npm run dev`       | ts-node-dev powered Express server |
| `npm run build`     | TSC compile to `dist/`             |
| `npm start`         | Run compiled server                |
| `npm run spec:lint` | Lint the OpenAPI spec with Redocly |

Environment variables (`api/.env`):

```
PORT=4000
DATABASE_URL="file:./dev.db"
JWT_SECRET="change-me"
```

### Frontend (`client/`)

```bash
cd client
npm install
npm run dev   # http://localhost:5173
```

Key scripts:

| Script            | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Vite dev server with HMR           |
| `npm run build`   | Type-check + Vite production build |
| `npm run preview` | Serve the production build locally |

Global styling lives in `src/index.scss`, which `@use`s partials like `shared/styles/_reset.scss` and `_mixins.scss`. Import additional shared styles there as the UI grows.

### Spec

`spec/chartsnap.yaml` is the source of truth for the API. View it via Swagger UI at `http://localhost:4000/docs` or lint it with `npm run spec:lint` inside `api/`.
