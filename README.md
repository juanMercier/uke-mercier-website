# UkeMercier Website

Website for **UkeMercier** — ukulele lessons and community events in Lisbon, Portugal. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Deployed on Vercel.

## Install & Run

```bash
npm install
```

Copy the environment variables file and fill in the Firebase credentials:

```bash
cp .env.example .env.local
```

```bash
npm run dev      # http://localhost:3000
```

## Build & Deploy

```bash
npm run build    # production build
npm run start    # run the production build locally
npm run lint     # ESLint check
```

Deployments to production are handled automatically by **Vercel** on push to `master`.

To deploy manually via the Vercel CLI:

```bash
npx vercel --prod
```

## Environment Variables

Required for the chord sheet reader (`/explorar/leitor-de-cifras`) — Firebase Storage:

```
NEXT_PUBLIC_API_KEY
NEXT_PUBLIC_AUTH_DOMAIN
NEXT_PUBLIC_PROJECT_ID
NEXT_PUBLIC_STORAGE_BUCKET
NEXT_PUBLIC_MESSAGING_SENDER_ID
NEXT_PUBLIC_APP_ID
```
