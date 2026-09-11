# NewsPulse

NewsPulse AI is a frontend-first news intelligence dashboard for tracking developing stories. It groups related coverage into living story streams and highlights what is new, changed, disputed, and still unknown.

## Features

- Developing story dashboard with momentum and status indicators
- Story detail pages with an AI-style briefing and chronological timeline
- What's New comparison for newly reported, changed, conflicting, and unknown details
- Multi-source comparison with a transparent source-agreement metric
- Search, category filtering, saved stories, and followed stories
- Responsive light and dark themes
- Local demo data with browser `localStorage` persistence
- Simulated breaking updates for demonstrating timeline and notification behavior
- Relevant editorial imagery for each story category

## Tech Stack

- React 18
- Vite 5
- React Router
- Tailwind CSS
- Lucide React icons

## Development Tools

NewsPulse was developed with **Antigravity** as an AI-assisted development tool. It was used to help with project scaffolding, UI implementation, debugging, responsive design improvements, API integration, and documentation. The application itself runs on React, Vite, Tailwind CSS, and the configured news API providers.

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

### Production build

```bash
npm run build
npm run preview
```

The Vercel build command is `npm run build`. Dependencies are installed from `package.json`; `node_modules` must not be committed.

## Main Routes

| Route | Purpose |
| --- | --- |
| `/` | Product landing page |
| `/login` | Email and password sign-in form |
| `/signup` | New user onboarding form |
| `/forgot-password` | Simulated password recovery |
| `/dashboard` | Developing story intelligence hub |
| `/story/:id` | Detailed story brief, sources, and timeline |
| `/latest` | Latest story view |
| `/trending` | Momentum-ranked stories |
| `/categories` | Filter stories by category |
| `/search` | Search story titles, summaries, and categories |
| `/saved` | Bookmarked stories |
| `/profile` | User profile and activity |
| `/settings` | Theme and preference controls |

## Project Structure

```text
src/
  components/       Shared layout and story components
  data/             Local story and notification data
  hooks/            Authentication and preference state
  pages/            Route-level screens
  services/         Local news data access
  utils/            Ranking, grouping, date, and formatting helpers
```

## Authentication Note

This project currently uses a frontend authentication prototype. Users enter a username or email and password when signing in, and new accounts collect a username, email, password, and confirmation. Account state is stored locally; there are no hard-coded login values or real server-side authentication.

## Live News API

The app requests live headlines through the Vercel serverless function at `/api/news`. It tries GNews first through `GNEWS_API_KEY`, then NewsData.io through `NEWSDATA_API_KEY` if GNews is unavailable, rate-limited, or returns no recent articles. Both providers are normalized into NewsPulse story cards. If both fail, the client falls back to local stories in `src/data/demoData.js`.

Never use a `VITE_` prefix for API keys because Vite exposes those variables to browser code. Add `GNEWS_API_KEY` and `NEWSDATA_API_KEY` in the Vercel project settings and in a local `.env` file for development. Do not commit `.env` or paste keys into source code.

## Data and Images

The sample stories are stored in `src/data/demoData.js`. Story images use remote Unsplash URLs and include descriptive alt text. Replace these URLs with approved, owned assets before using the application in production.

## Deployment

For Vercel:

1. Import the GitHub repository.
2. Keep the framework preset as Vite, or use the build command `npm run build`.
3. Leave the output directory as `dist`.
4. Add any required environment variables in the Vercel project settings.
5. Deploy from the `main` branch.

## Development Notes

The current experience is intentionally frontend-first and uses local data. A production release should add a backend authentication service, secure API keys on the server, real news ingestion, image licensing review, and server-side persistence.
