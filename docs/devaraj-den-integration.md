# Devaraj Den integration

Devaraj Den is a separate sibling application (`../Devaraj Den`), not a Time module. It has independent authentication, PostgreSQL database, Go API and Next.js frontend. See its `docs/devaraj-den` for setup and verification.

This website adds `orders` / `devaraj-den` to the typed registry, a workflow illustration, product card, homepage entry and dedicated marketing landing component. Existing registry-driven contact choices, footer links and routes include it. No product database or secrets are shared with the company website.

Following the operator's launch confirmation, availability is **Available** and Devaraj Den is featured as product 02 after Time. The default app URL is `https://den.devarajsolutions.site`; `NEXT_PUBLIC_DEVARAJ_DEN_URL` remains an optional public deployment override. Homepage, catalog, footer and dedicated landing page link to the app. The hero now introduces both products, and Time's self-hosting/source services are explicitly labeled as Time-only. Contact inquiries retain the internal `orders` selection value for compatibility.

Launch copy explains English/Khmer order management, manual customer-payment records, optional Telegram alerts, paid-only Team invitations and verified Cutluy subscription activation. It does not imply bank verification of customer orders, automatic chat import or recurring debits. Development-only availability notices have been replaced; screenshot/example-data disclosures remain. At the operator's request, permanent prices are **Starter $13 / 30 days** and **Growth $20 / 30 days**, also linked to the in-app price confirmation. These supersede the temporary $1 test price and the earlier proposed $12 restoration. The sibling Devaraj Den API includes migration 003 to set the live database catalog when the operator runs migrations; the company website does not access or mutate that database. Apply that migration before publishing matching marketing prices. Existing invoices retain their original amounts.

Targeted browser check uses port 3002 so it does not accidentally test Devaraj Den's own frontend on 3001:

```sh
npx playwright test --config playwright.orders.config.ts
```

The website's existing Next.js 16.4.0 dependency triggered a build-time security advisory during this work. Resolve the advisory before production release. Dependency changes are deliberately not mixed with the product catalog integration or existing user edits to contact/configuration.

Launch/pricing follow-up checks: TypeScript, ESLint, all 4 unit tests, production build and both targeted Chrome browser tests pass. Browser coverage verifies Time remains first, Devaraj Den is second and Available, cards do not overlap, live links and $13/$20 pricing, Devaraj Den contact routing, and mobile dark-mode overflow. Build/browser startup initially stopped for the existing Next.js security reminder and succeeded on retry; this does not resolve the vulnerability. Local configuration also lacks a metadata base: set `NEXT_PUBLIC_SITE_URL=https://devarajsolutions.site` in production for canonical/social URLs. These are local checks, not a Vercel deployment or a fresh live payment test.
