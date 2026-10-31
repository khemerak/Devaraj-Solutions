# Devaraj Orders integration

Devaraj Orders is a separate sibling application (`../Devaraj Den`), not a Time module. It has independent authentication, PostgreSQL database, Go API and Next.js frontend. See its `docs/devaraj-den` for setup and verification.

This website adds `orders` / `devaraj-orders` to the typed registry, a workflow illustration, product card, homepage entry and dedicated marketing landing component. Existing registry-driven contact choices, footer links and routes include it. No product database or secrets are shared with the company website.

Following the operator's launch confirmation, availability is **Available** and Devaraj Orders is featured as product 02 after Time. The default app URL is `https://den.devarajsolutions.site`; `NEXT_PUBLIC_DEVARAJ_DEN_URL` remains an optional public deployment override. Homepage, catalog, footer and dedicated landing page link to the app. The hero now introduces both products, and Time's self-hosting/source services are explicitly labeled as Time-only. Contact inquiries retain the internal `orders` selection value for compatibility.

Launch copy explains English/Khmer order management, manual customer-payment records, optional Telegram alerts, paid-only Team invitations and verified Cutluy subscription activation. It does not imply bank verification of customer orders, automatic chat import or recurring debits. Development-only availability notices have been replaced; screenshot/example-data disclosures remain. Current prices are **Starter $8 / 30 days** and **Growth $15 / 30 days**, also linked to the in-app price confirmation. The Scale plan is no longer offered. The sibling Devaraj Orders API owns the live subscription catalog; the company website does not access or mutate that database. Existing invoices retain their original amounts.

Targeted browser check uses port 3002 so it does not accidentally test Devaraj Orders' own frontend on 3001:

```sh
npx playwright test --config playwright.orders.config.ts
```

The website's existing Next.js 16.4.0 dependency triggered a build-time security advisory during this work. Resolve the advisory before production release. Dependency changes are deliberately not mixed with the product catalog integration or existing user edits to contact/configuration.

Launch/pricing follow-up checks cover TypeScript, ESLint, unit tests, the production build and targeted Chrome browser tests. Browser coverage verifies Time remains first, Devaraj Orders is second and Available, cards do not overlap, live links and $8/$15 pricing, Devaraj Orders contact routing, and mobile dark-mode overflow. Local configuration also requires `NEXT_PUBLIC_SITE_URL=https://devarajsolutions.site` in production for canonical/social URLs. These are local checks, not a Vercel deployment or a fresh live payment test.
