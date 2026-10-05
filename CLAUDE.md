# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run lint     # ESLint
```

## Stack

- **Next.js 14** (App Router) + TypeScript + Tailwind CSS
- **Framer Motion** for animations, **Lucide React** + **React Icons** for icons
- **Radix UI** (Dialog, Slot) for accessible primitives
- **Firebase Storage** — serves PDF chord sheets in `/explorar/leitor-de-cifras`
- **Formspree** (`movqqnlv`) — event registration forms
- **Vercel Analytics** — passive, no config needed
- **pdfjs-dist** — PDF rendering (loaded dynamically, SSR disabled)

## Architecture

All content is **static files** — no database, no CMS:

| Data file | Purpose |
|---|---|
| `src/data/events.json` | All events (past + upcoming) |
| `src/data/blogPosts.json` | Blog articles |
| `src/data/videoData.ts` | YouTube videos with difficulty levels |

Pages consume these directly; there are no API routes.

### Event system

Events in `events.json` use this shape:
```json
{
  "id": number,
  "title": string,
  "date": "DD-MM-YYYY",
  "from": "HH:MM",
  "to": "HH:MM",
  "location": string,
  "description": string,
  "content": string,
  "image": "/eventos/filename.ext",
  "past": boolean
}
```

**Ordering rule:** `EventsList` reverses the array before display, so **append new events to the end** of `events.json` to make them appear first.

**Homepage** shows: all upcoming events (`past: false`) + 2 most recent past events (`past: true, count={2}`).

Event images go in `/public/eventos/`. Blog images go in `/public/blog/`.

### Routing

```
/                   → src/app/home/page.tsx   (src/app/page.tsx just re-exports it)
/eventos            → src/app/eventos/page.tsx
/eventos/[id]       → src/app/eventos/[id]/page.tsx   ("use client" — has registration modal)
/blog/[id]          → src/app/blog/[id]/page.tsx
/explorar/*         → src/app/explorar/ (afinacao, historia-do-ukulele, videos, vantagens, tipos-de-ukulele, leitor-de-cifras)
/aulas, /sobre, /contactos, /politica-de-privacidade
```

`src/app/layout.tsx` wraps everything in `<Wrapper>` (Header + Footer) and injects Vercel Analytics.

### Environment variables (Firebase)

Required for the chord sheet reader — set in `.env.local`:
```
NEXT_PUBLIC_API_KEY
NEXT_PUBLIC_AUTH_DOMAIN
NEXT_PUBLIC_PROJECT_ID
NEXT_PUBLIC_STORAGE_BUCKET
NEXT_PUBLIC_MESSAGING_SENDER_ID
NEXT_PUBLIC_APP_ID
```

## Content language

All user-facing content is in **Portuguese (PT-PT)**.
