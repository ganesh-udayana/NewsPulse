# NewsPulse AI 🌐⚡
> **Real-Time News Intelligence & Developing Story Platform**
> *"Most news platforms tell you what's happening. NewsPulse tells you what changed."*

[![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

---

## 🎯 What is NewsPulse AI?
Breaking stories develop rapidly across multiple competing news outlets. Readers often have to sift through 5 to 10 duplicate articles just to figure out what actually happened, what changed since earlier today, what is conflicting, and what remains unconfirmed.

**NewsPulse AI** transforms raw, repetitive news articles into **living developing stories**. Instead of re-reading identical background context, users get:
1. **Developing Story Streams**: Cohesive narrative hubs tracking an event over time.
2. **What's New? (Primary USP)**: High-resolution diff of newly reported facts, changed details, unresolved conflicting reports, and critical unknowns.
3. **Multi-Source Cross-Check**: Side-by-side reporting perspectives with a clear **Source Agreement metric** and transparent non-truth disclaimers.
4. **Interactive Demo Simulation**: Injects live breaking updates into stories on demand to showcase real-time delta updates, timeline progression, and instant notifications.
5. **Client-Side Architecture**: Zero custom backend required, offline-resilient demo fallback, full `localStorage` persistence, responsive design, and accessible dark mode.

---

## 🚀 Quick Start Instructions

```bash
# 1. Enter project directory
cd newspulse-ai

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The app will launch at `http://localhost:3000`.

### Demo Login
- **Email**: `demo@newspulse.ai`
- **Password**: `password123`
- Or simply click **"One-Click Demo Login"** on the login screen.

---

## 🧭 Routes & Capabilities

| Route | View | Description |
| :--- | :--- | :--- |
| `/` | **Landing Page** | Editorial startup presentation, value propositions, and quick launch |
| `/login` | **Login** | Pre-configured demo login credentials & quick access |
| `/signup` | **Signup** | Interest onboarding (Beats selection: AI, Tech, Energy, Markets, etc.) |
| `/forgot-password` | **Password Reset** | Simulated credential recovery flow |
| `/dashboard` | **Intelligence Hub** | Main dashboard with breaking stories, trending momentum, and What Changed Today |
| `/story/:id` | **Story Intelligence** | Deep dive with AI brief, "What's New" diffs, source comparison, and timeline |
| `/latest` | **Latest Wire** | Real-time chronological article dispatch stream |
| `/trending` | **Trending Stories** | Highest velocity stories ranked by cross-source momentum |
| `/categories` | **Category Matrix** | Filtered by Technology, Science, Energy, Geopolitics, Finance, Health |
| `/search` | **Deep Search** | Search by keyword, entity, source, or conflict |
| `/saved` | **Monitored Stories** | Bookmarked and followed story threads |
| `/settings` | **Preferences** | Theme (light/dark), AI brevity mode, conflict notification toggles |
| `/profile` | **Analyst Profile** | Editable profile, activity counts, and followed beats |

---

## 💡 Hackathon Presentation Flow
1. **Landing**: Showcase the problem statement ("News fatigue & duplicate reading").
2. **Login**: Click "One-Click Demo Login".
3. **Dashboard**: Point out the Developing Story cards and momentum indicators.
4. **Story Detail**: Open the EU AI Act or Space Station story.
5. **AI Brief**: Highlight the structured executive brief and key established points.
6. **What's New?**: Emphasize the primary USP: 4 clear quadrants (Newly Reported, Changed, Conflicting, Unknown).
7. **Source Comparison**: Show the multi-source consensus metric and transparency disclaimer.
8. **Demo Simulation**: Click **"Simulate Breaking Update"** to demonstrate live re-clustering, timeline addition, and notification generation without reloading.

---

## 📋 Official Scope Card (Locked at 09:45)
- **Problem**: Readers waste hours re-reading redundant coverage to find what changed in breaking news.
- **Target user**: Policy and market analysts tracking rapidly developing global stories.
- **Core features**:
  1. Story clustering with momentum badges
  2. "What's New" diff (new, changed, conflicting reports)
  3. Multi-source comparison with consensus score
  4. Chronological story timeline
- **Stretch features**:
  1. Breaking update simulation with notifications
  2. Saved stories with category filtering
- **Data source**: Public free APIs and localStorage

---

## 🤖 AI Policy & Tool Disclosure (Mandatory Rubric Section)
In strict accordance with the PVPSIT Hackathon AI Policy (Section 05):
- **AI Coding Assistants Used**: Antigravity, Gemini / Claude for architectural design, boilerplate generation, and styling scaffolding.
- **Human Curation & Ownership**: Every component decomposition, state persistence schema, differential diff data structure, and error boundary was reviewed, structured, and verified by the team. All team members can explain and live-modify any file in this repository.

