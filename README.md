# Genshin GW

Voice-line guessing games inspired by Genshin Impact. This Next.js 15 app ships with a daily challenge, an endless arcade mode, and an admin toolkit for curating character data and audio hints streamed straight from S3.

## Table of Contents
- [Overview](#overview)
- [Highlights](#highlights)
- [Screens & Routes](#screens--routes)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Data & Assets](#data--assets)
- [Audio Delivery via S3](#audio-delivery-via-s3)
- [Game Modes](#game-modes)
- [Admin & Tooling](#admin--tooling)
- [Feedback Loop](#feedback-loop)
- [Deployment Notes](#deployment-notes)
- [Roadmap Ideas](#roadmap-ideas)

## Overview

Genshin GW challenges players to identify characters from their in–game voice lines. Each puzzle rolls out structured hints—from element and weapon type to rare voice clips—and persists the player’s progress locally. Endless mode lets fans grind streaks, while administrators can audit every voice line, listen to the associated audio, and flag inconsistencies.

The project doubles as a showcase for:
- modern App Router patterns in Next.js 15 with Turbopack,
- themed UI built on Tailwind CSS v4, shadcn/ui primitives, Radix UI, and Framer Motion,
- AWS S3–backed audio streaming with range request support, and
- typed content pipelines that keep a large character database maintainable.

## Highlights
- Daily character puzzle with up to five guesses, progressive hint unlocks, and streak tracking persisted in `localStorage`.
- Endless arcade mode that shuffles the entire roster, records best streaks, and refreshes automatically when you finish the deck.
- Developer sandbox to test puzzle setups by selecting the exact solution and verifying hint content.
- Voice-line hint component that handles playback, graceful failure states, and feedback submission when clips are missing or mismatched.
- Admin panel with advanced filtering, complete character bios, and direct access to every available voice line and audio clip.
- Feedback API that turns player reports into actionable emails using Nodemailer and your SMTP provider of choice.

## Screens & Routes
| Route | Description |
|-------|-------------|
| `/daily` | Public daily challenge (default landing page via redirect in `src/app/page.tsx`). |
| `/daily/dev` | Local-only sandbox for QA and content validation. |
| `/endless` | Endless mode with cumulative stats and streaks. |
| `/admin` | Protected admin login + management panel (cookies + HMAC auth). |
| `/api/voicelines` | Streams audio files from S3 with range requests and response caching (`src/app/api/voicelines/route.ts`). |
| `/api/feedback` | Accepts voice-line issue reports and dispatches email notifications (`src/app/api/feedback/route.ts`). |
| `/api/admin` | Session management for the admin portal (`src/app/api/admin/route.ts`). |

## Tech Stack
- **Framework:** Next.js 15 (App Router, React 19, Turbopack dev/build pipelines)
- **Styling:** Tailwind CSS v4, shadcn/ui components, Radix UI primitives, `@emotion/styled`
- **Animation:** Framer Motion, Embla carousel (for future expansions)
- **State & Forms:** React Hook Form + Zod resolvers, `class-variance-authority`
- **Audio & Media:** Custom hook around the `Audio` API for streaming control
- **Data & Types:** TypeScript, Zod, barrel exports generated via `barrelsby`
- **Infrastructure:** AWS SDK v3 (S3 client), Nodemailer for SMTP email
- **Tooling:** ESLint 9, Prettier, Turbopack, `npm run up` utility for rebuilding character barrels

## Project Structure

```
src/
├─ app/
│  ├─ daily/          # Daily challenge UI + helpers
│  ├─ endless/        # Endless arcade mode
│  ├─ admin/          # Admin login and panel
│  └─ api/            # API routes (S3 audio, feedback, admin session)
├─ components/        # Shared UI primitives (buttons, badges, toast UI)
├─ lib/
│  ├─ db/             # Character + voice-line datasets (per element)
│  ├─ hooks/          # Custom hooks (voice line player, etc.)
│  ├─ server/         # Server-only utilities (S3 client, admin auth)
│  ├─ scripts/        # Maintenance scripts for voice-line assets
│  └─ daily-challenge.ts # Core puzzle logic & hint builders
public/
├─ assets/ui/         # Character icons used across the app
└─ assets/voicelines/ # Local audio cache (optional; S3 is primary source)
```

## Getting Started

### Prerequisites
- Node.js 20+ (aligns with Next.js 15 requirements)
- npm, pnpm, or yarn (examples assume npm)
- AWS credentials with permission to read from the configured S3 bucket
- SMTP credentials if you plan to receive feedback emails locally

### Installation
```bash
npm install
```

### Local Development
```bash
# Runs Next.js with Turbopack
npm run dev
```
Visit `http://localhost:3000` — you’ll be redirected to `/daily`.

### Build & Production
```bash
npm run build   # Next.js production build
npm run start   # Start production server (post-build)
```

### Quality of Life Scripts
- `npm run lint` – ESLint (App Router aware).
- `npm run format` – Prettier across the repo.
- `npm run up` – Regenerate barrel exports inside `src/lib/db/characters` after adding or renaming character files.

## Environment Variables

Create a `.env.local` during development (keep secrets out of version control). The project reads the following keys:

```bash
# AWS voice-line streaming
AWS_REGION=
AWS_S3_BUCKET=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=

# Admin authentication
ADMIN=             # Username expected by the login form
HASHED_PASSWORD=   # Exact string compared on login (store a hashed value if the frontend sends a hash)
ADMIN_SESSION_SECRET= # Optional HMAC secret; falls back to PASSWORD

# Feedback email (Nodemailer)
SMTP_HOST=
SMTP_PORT=465
SMTP_USER=
SMTP_PASS=
EMAIL_FROM="Genshin GW"
PERSONAL_MAIL=     # Where feedback reports are delivered
```

> ❗️ **Security tip:** never check real credentials into git. The sample `.env` above is strictly illustrative.

## Data & Assets
- Character metadata lives in `src/lib/db/characters` (grouped by element) and is typed through `src/lib/types.ts`.
- Voice-line transcripts and metadata are in `src/lib/db/voice-lines`.
- Scripts under `src/lib/scripts/` help convert raw text dumps into structured data (`generateVoicelineList.js`) and reconcile audio IDs (`update_audio_ids.py`).
- Icon art is stored in `public/assets/ui`, matching the `character.icon` field exported by the database.

When you add new characters or update voice lines:
1. Drop new assets in the appropriate `public/assets/` directory.
2. Update the TypeScript definition in the correct `src/lib/db/**` file.
3. Run `npm run up` to refresh barrel exports.

## Audio Delivery via S3
- `src/lib/server/s3-client.ts` constructs a configured `S3Client` with optional explicit credentials.
- `/api/voicelines` validates `route` and `file` params, builds a safe S3 key (`voicelines/<route>/<file>.ogg`), and streams the object back as a web stream.
- Range requests (`Range` header) are supported so the native Audio element can buffer efficiently.
- Responses include caching headers (`Cache-Control`, `ETag`, `Last-Modified`) to reduce repeated downloads.

You can optionally place a mirrored set of `.ogg` files under `public/assets/voicelines` for local development; swap the API to read from disk if you prefer offline work.

## Game Modes

### Daily Challenge (`src/app/daily/components/daily-game.tsx`)
- Deterministic daily solution picked via a hashed date-based seed (`pickDailyCharacter`).
- Up to five guesses per day (`MAX_DAILY_ATTEMPTS`), with hints unlocking after each wrong attempt (`filterDependentHints`).
- Progress, revealed hints, and solved streaks persist to `localStorage` keyed by the ISO date.
- Themes adapt to the solution’s element thanks to palettes in `daily-challenge.ts`.

### Endless Mode (`src/app/endless/components/endless-game.tsx`)
- Shuffles the full roster and keeps a rotating deck so you’ll eventually see every character.
- Tracks cumulative stats (`totalSolved`, `bestStreak`, etc.) in `localStorage`.
- After each round you can reveal the answer, keep guessing, or jump straight to the next character.

### Dev Sandbox (`src/app/daily/dev/components/dev-game.tsx`)
- Lets content editors pick the solution manually and confirm which hints surface.
- Shares most of the UI logic with the daily mode but skips persistence and restrictions.

## Admin & Tooling
- Admin authentication uses signed cookies (`src/lib/server/admin-auth.ts`) with HMAC signatures to prevent tampering.
- The admin panel (`src/app/admin/components/AdminPanel.tsx`) offers:
  - Query-as-you-type filtering by name, element, region, weapon, or voice actors.
  - Detail cards showing release info, birthdays, routes, and VA credits.
  - Complete voice-line lists with inline playback and status badges.
- Logout simply clears the cookie via `DELETE /api/admin`.

## Feedback Loop
- The `VoiceLineHint` component exposes a “Let me know” dropdown, sending structured reports to `/api/feedback`.
- Reports include issue type, character, voice line text, the attempted audio source, browser UA, and timestamp.
- Nodemailer (`src/app/api/feedback/route.ts`) formats a rich HTML email highlighting action items for maintainers.
- Errors are surfaced to the player with toasts (Sonner) and kept non-blocking—gameplay can continue even if a report fails.

## Deployment Notes
- Designed for deployment on Vercel or any Node 18+/20+ host that supports Next.js 15 (App Router, edge-ready).
- Ensure production environments expose the same environment variables listed above.
- S3 access must allow `GetObject` on `voicelines/*`. For least privilege, lock the IAM policy to `s3:GetObject` and optionally `s3:ListBucket` if you plan to add index endpoints later.
- SMTP credentials should be scoped to send-only; consider environment-specific mailboxes (development, staging, production).
- Remember to configure a custom domain or rewrite if hosting assets from a CDN; the `buildVoiceLineAudioSrc` helper assumes `/api/voicelines`.

## Roadmap Ideas
1. Leaderboards with authenticated user accounts and cloud storage of stats.
2. Shareable daily results (“spoiler-safe” emojis similar to Wordle).
3. Progressive web app enhancements (offline caching of the daily puzzle + audio).
4. Automated validation script that checks S3 for missing voice-line files before each deployment.
5. Localization support for non-English transcripts and UI copy.

---

Built with care for the Genshin community. If you remix or extend it, let people know where the voice lines came from and keep the feedback loop alive!
