# portfolio

Personal portfolio for Heytor Victor ([heytor.dev](https://heytor.dev)).

## Requirements

- Node.js 22+

If the local `.next` directory is unwritable, run with `NEXT_DIST_DIR=.next-build` for
both `npm run build` and `npm run start` (the two must match).

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve the production build. The app uses
  `output: "standalone"` (see `next.config.mjs`), so `next start` doesn't work;
  `npm run start` runs `scripts/start-standalone.mjs`, which copies the
  `public/` and `<distDir>/static` assets next to the standalone `server.js`
  (the same assets the Dockerfile copies for the container image) and starts
  it. Always run `npm run build` first.
- `npm run lint` — ESLint (next/core-web-vitals)
- `npm test` — Vitest unit/component/architecture tests

## Docker

`docker compose up --build` builds the production image from `Dockerfile` and
serves it on <http://localhost:3000>. There is no source bind-mount, so the
container always runs the image that was built, matching production.
