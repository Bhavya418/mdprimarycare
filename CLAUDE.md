# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

MDPrimaryCare is a marketing/informational website for a primary-care clinic, built with Next.js 15 (App Router), React 19, TypeScript (strict), and Tailwind CSS v4. It is a content site with one piece of real backend logic: an appointment-request form that emails the clinic and the patient.

## Commands

```bash
npm run dev          # Dev server with Turbopack (http://localhost:3000)
npm run build        # Production build (Turbopack)
npm start            # Serve production build

npm run lint         # ESLint with --fix
npm run lint:check   # ESLint, no fix (used by CI)
npm run format       # Prettier --write
npm run format:check # Prettier check (used by CI)
npm run type-check   # tsc --noEmit
npm run validate     # type-check + lint:check + format:check (run this before pushing)
```

There is **no test setup** despite what README.md / DEVELOPMENT_GUIDE.md claim. `jest.config.js` and `jest.setup.js` are empty, there is no `test` script in `package.json`, and Jest is not a dependency. Those docs are out of date — ignore their testing/coverage sections.

Pre-commit hook (Husky + lint-staged) runs `eslint --fix` + `prettier --write` on staged files. CI (`.github/workflows`) runs lint:check, type-check, format:check, build, and `npm audit` on push/PR to `main` and `dev`; pushes to `main` deploy to Vercel.

## Architecture

- **Routing** — App Router under `src/app/`. Pages: `(home)` (route group, the `/` landing page), `about`, `services`, `team`, `testimonials`, `contact`. Each page composes section components from `src/components/`.
- **Layout** — `src/app/layout.tsx` is the single root layout. It loads all Google fonts (exposed as CSS variables), and globally mounts `Footer`, `BackToTopButton`, `ChatBot`, and the `react-hot-toast` `<Toaster>`. Individual pages do not render these.
- **Components** — `src/components/` is organized by feature/section folder (e.g. `Hero/`, `Team/`, `Appointment/`, `Testimonials/`, `Navigation/`). Components are presentational; data is hardcoded in the components themselves. Note `src/lib/constants.ts`, `src/lib/utils.ts`, and `src/types/index.ts` exist but are **empty** — there is no shared util/type layer yet.
- **Path alias** — `@/*` maps to `src/*`.

### Appointment flow (the only backend logic)

`src/components/Appointment/AppointmentBook.tsx` POSTs the form (via `axios`) to `src/app/api/appointment/route.ts`, surfacing success/error with toasts. The route validates required fields, then uses `nodemailer` over SMTP to send two emails: a notification to `CLINIC_EMAIL` and a confirmation to the patient. Email HTML templates are inlined in the route. SMTP failures return 500 with a user-facing message; the route requires `SMTP_USER`/`SMTP_PASS` to be set or it returns "Email service not configured". See `EMAIL_SETUP.md` for SMTP provider details (Gmail app-password, SendGrid, etc.).

### ChatBot

`src/components/ChatBot/ChatBot.tsx` is a client component that injects Google Dialogflow's `df-messenger` widget by appending the gstatic script/CSS to `<head>` on mount (and cleaning up on unmount). It is configured entirely via env vars.

### Client vs server

This is mostly server components. Anything using browser APIs / hooks is marked `'use client'`. `src/components/ClientOnly.tsx` wraps children that must only render after hydration (avoids SSR mismatch).

## Environment variables

Config lives in `.env.local` (gitignored). Required for the appointment form: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CLINIC_EMAIL`. ChatBot: `PROJECT_ID`, `AGENT_ID`, `LANGUAGE_CODE`, `LOCATION`, `CHAT_TITLE`. App: `NEXT_PUBLIC_APP_URL`, `NEXT_PUBLIC_APP_NAME`.

## Conventions

- ESLint uses **two** configs: `eslint.config.mjs` (flat config, what ESLint 9 actually runs) extending `next/core-web-vitals` + `next/typescript`, and a legacy `.eslintrc.json`. Prefer editing `eslint.config.mjs`.
- Prettier: single quotes, semicolons, 2-space indent, with `prettier-plugin-tailwindcss` for class sorting.
- TypeScript is strict with extras: `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitReturns`. `no-explicit-any` and `no-non-null-assertion` are warnings, not errors.
- Tailwind v4 (CSS-first config via `@import 'tailwindcss'` and `@theme` in `src/app/globals.css`; semantic color tokens like `--primary` are defined there). There is no `tailwind.config.js`.
