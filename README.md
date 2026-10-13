# Devaraj Solutions
Independent company website for the Devaraj Solutions product ecosystem. Devaraj Time remains a separate application and repository; this website never accesses its database.

## Stack and setup
Next.js App Router, TypeScript, React, Tailwind CSS, Lucide icons, and Motion. Node 24 recommended (Next.js requires at least Node 20.9).

```sh
npm ci
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000. Commands: `npm run typecheck`, `npm run lint`, `npm run build`, `npm start`, `npm test`, and `npx playwright test`.

## Configuration
- `NEXT_PUBLIC_SITE_URL`: verified production origin. Without it canonical URLs and sitemap entries are omitted and indexing is disabled.
- `NEXT_PUBLIC_DEVARAJ_TIME_URL`: actual product URL. Invalid/non-HTTP URLs are ignored; external links are hidden when unset.
- `DEVARAJ_TIME_AVAILABLE`: set `true` only after verifying deployment and advertised capabilities. Defaults to in development.
- `CONTACT_EMAIL`: optional public email contact.
- `RESEND_API_KEY`, `CONTACT_FROM`, `CONTACT_TO`: server-only Resend delivery credentials. Verify t
- he sender domain with the provider.
- `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`: server-only shared rate limiter. Delivery stays disabled unless all provider and rate-limit variables are supplied.

Public URLs and product status are evaluated at build time. Contact availability is rendered dynamically using runtime configuration. Rebuild after configuration changes. Never place secrets in NEXT_PUBLIC variables. No social links are shown because none were supplied.

## Architecture
`src/app` holds routes and the contact endpoint; `src/components` holds reusable layout, product, and preview components; `src/data/products.ts` is the typed catalog; `src/lib` contains configuration, metadata, and validation. Product detail routes are generated from catalog data. See docs/adding-products.md.

Contact submissions use same-origin validation, byte-size and field limits, a honeypot, plain-text emails, and an atomic shared limit of five requests per ten minutes. Configure your ingress to overwrite x-forwarded-for; untrusted forwarded headers undermine per-IP limiting. Provider errors never produce a success message. Provider acceptance does not guarantee mailbox delivery.

## Deployment
Vercel: import this folder as the project root, set environment variables, and build with `npm run build`. Docker/Linux instructions are in docs/deployment.md. Deployment is intentionally not performed.

## Known limitations / launch checklist
No verified production URLs, email credentials, or social accounts were supplied. Preview data is illustrative, product capabilities are intended scope until verified, and legal pages require legal review. Establish inquiry retention and legal entity/jurisdiction details before launch. No claims of customers, performance metrics, or certifications are made. The UI uses local system fonts to avoid remote font dependencies. No actual product screenshots were supplied. Docker deployment and real email delivery require environment-specific verification. Light and dark themes are included, with system preference detection and a persistent header switch.


## Verification notes
The scripts use Next.js's supported Webpack path because Turbopack's CSS subprocess failed in this Windows environment. npm audit reported five high-severity findings in the development-only ESLint glob/braces dependency chain; the latest braces release remains 3.0.3 and no compatible upstream patch was available at implementation time. Production dependencies were clean at installation. Do not apply npm audit fix --force blindly: its proposed remedy downgrades the Next.js lint configuration to version 14.

## Appearance
The supplied transparent Devaraj Solutions logo is used in the header, footer, ecosystem, and browser icon. Its original PNG is retained at public/logos/devaraj-solutions.png. Dark mode renders the same black artwork in white through CSS, without changing the source asset.

The header theme switch persists a light/dark choice in localStorage. Until a choice is saved, the theme follows the operating system, including changes while the page is open. A small pre-paint script applies the preference to avoid a light flash. No account or cookies are needed.


## Layout
The company pages use fluid viewport gutters instead of a fixed maximum content width. The homepage uses a large typographic opening, an edge-to-edge product showcase, and open editorial sections. The About page pairs its headline with introductory copy and uses open mission/vision columns. Legal text retains a reading-width limit. Both themes and the mobile layout share the same structure.

## Product showcase
`/products/devaraj-time` is the public Devaraj Time marketing destination. Product cards link here so visitors see audiences, documented capabilities, benefits, access requirements and current scope before entering the independent application. `NEXT_PUBLIC_DEVARAJ_TIME_URL` points to the verified application entry point; it is not required to read the showcase. Product inquiry links preselect the corresponding product in the contact form. Repository and hosting publication require the owner's real Git URL, domain and credentials.
