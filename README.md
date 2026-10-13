# Devaraj Solutions

The official company website for Devaraj Solutions: practical digital products and services built around everyday work.

**Website:** https://devarajsolutions.site
**Devaraj Time showcase:** https://devarajsolutions.site/products/devaraj-time

This website is independent of the Devaraj Time application. It does not share its database, login system, or deployment.

## What is included

- Responsive company, product, About, and Contact pages.
- Light/dark themes with system preference detection and a saved theme switch.
- A typed product catalog and reusable product detail route.
- Devaraj Time source-code links, self-hosting guidance, and optional paid setup/hosting inquiries.
- SEO metadata, sitemap, robots rules, and social-sharing artwork.
- Editable legal drafts that require review before public launch.

## Run locally

Use Node.js 24 and npm. Install from the committed lockfile:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. No credentials are required to read the website. Optional local configuration belongs in an ignored `.env.local` file; no environment files or templates are distributed through Git.

## Configuration

Set production values in your hosting provider's environment settings. Rebuild after changing public URLs or product availability.

| Variable | Purpose |
| --- | --- |
| NEXT_PUBLIC_SITE_URL | Production website origin. Set to the verified company domain in Production only. Without it, indexing is disabled and production canonical/sitemap URLs are omitted. |
| NEXT_PUBLIC_DEVARAJ_TIME_URL | Optional verified attendance application URL. Leave unset when offering source and services rather than a hosted application. |
| DEVARAJ_TIME_AVAILABLE | Set true only after verifying a deployed application. Otherwise the catalog identifies the MIT-licensed source release. |
| CONTACT_EMAIL | Optional override for the public service email. |
| RESEND_API_KEY / CONTACT_FROM / CONTACT_TO | Server-only email delivery configuration. |
| UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN | Server-only shared rate limiting for online submissions. |

The online form is unavailable unless all delivery and rate-limit settings are supplied. Direct contact links remain available:

- Email: [pavkhemerak.official@gmail.com](mailto:pavkhemerak.official@gmail.com)
- Telegram: [@pavkhemerak](https://t.me/pavkhemerak)
- Phone: +85514945699

Only public configuration belongs in NEXT_PUBLIC variables. Keep environment files, provider tokens, private keys, and deployment credentials out of Git. For the contact API, configure trusted reverse-proxy IP headers as described in the architecture documentation.

## Development checks

```sh
npm run lint
npm run typecheck
npm test
npm run build
npx playwright test
```

Browser tests use installed Chrome and a local production server. `npm start` serves the standalone build after `npm run build`. The project uses Webpack because the local Windows environment could not start Turbopack's CSS worker.

## Project structure

- `src/app`: pages, SEO routes, and the contact endpoint.
- `src/components`: shared layout, theme controls, product previews, and forms.
- `src/data/products.ts`: catalog, capabilities, audiences, benefits, source links, and service choices.
- `src/lib`: configuration, metadata, and inquiry validation.
- `public`: approved brand artwork and development-example product screenshots.
- `tests`: validation and browser flows.
- `docs`: architecture, deployment, product registration, and verification records.

To add a product, follow [adding-products.md](docs/adding-products.md). No product database connection is required.

## Deployment

Vercel imports this repository as a Next.js project with root `./` and build command `npm run build`. Keep the framework's default output setting. Set the production origin in Vercel and connect the domain using the exact DNS values it provides. See [Vercel launch instructions](docs/vercel-launch.md).

Docker and Linux hosting are documented in [deployment.md](docs/deployment.md). Secrets are configured on the host and are excluded from image source contexts.

## Product and service model

Devaraj Time is available under the MIT license in its [independent repository](https://github.com/khemerak/Devaraj-Time). Visitors may self-host without buying a service, request paid setup on their infrastructure, or arrange hosting with Devaraj Solutions. Prices, support scope, infrastructure costs, and operating responsibilities are agreed before work starts. No instant signup, checkout, published SLA, or fixed pricing is implied.

## Current limits

Product screenshots show development examples, not customer records. Contact links work without an email provider, but the online submission endpoint needs configured delivery and rate limiting. Legal policies are drafts. Production application readiness and operating limits are documented in the product repository.

The last dependency audit reported five high-severity findings in the development-only Next.js ESLint glob/braces chain. Do not blindly apply a forced audit fix that downgrades the lint configuration. See [verification notes](docs/verification.md) for executed checks and their limits.
