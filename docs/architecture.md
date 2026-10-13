# Architecture
Static-first server components provide marketing routes, with small client islands for navigation, motion, and inquiry submission. There is no database, login, shared authentication, or dependency on Devaraj Time. The contact API is the only dynamic business endpoint. Atomic Redis rate limits are external and shared across instances; email is sent server-side via Resend.

One typed catalog supplies every product list and generic detail route. Configuration rejects malformed/non-HTTP external URLs. Production SEO is emitted only when the production origin is configured. Illustrative UI examples remain labeled.
