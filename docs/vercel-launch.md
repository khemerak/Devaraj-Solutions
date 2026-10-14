# Vercel launch: devarajsolutions.site

Repository: https://github.com/khemerak/Devaraj-Solutions

Import this repository into Vercel as a Next.js project. Root directory is `./` (the repository contains the website itself), build command is `npm run build`, and output directory should remain the framework default. Vercel runs the Next.js adapter; do not configure the Docker standalone start script as a Vercel command.

Set this variable for **Production** before deploying:

```
NEXT_PUBLIC_SITE_URL=https://devarajsolutions.site
```

Leave it unset for preview environments to keep previews non-indexable. The product website defaults to https://time.devarajsolutions.site. Devaraj Time is marked as source-available; this subdomain hosts only its landing page, with the application distributed through GitHub.

Contact delivery can be configured later using the server-only settings documented in README.md. Without them, the page honestly displays an unavailable state.

After the first successful deployment, add devarajsolutions.site and www.devarajsolutions.site in the project's Domains settings. Select devarajsolutions.site as primary and redirect www to it. Copy the exact project-specific A/CNAME/TXT values Vercel returns into Namecheap Advanced DNS when using Namecheap DNS. Replace only conflicting parking/redirect records for @/www; preserve unrelated email and verification records. No guessed DNS targets are stored in this repository.

Verify DNS configuration and HTTPS, then check homepage, products, showcase, About, Contact, sitemap.xml, robots.txt, and canonical/social URLs. Legal policies remain draft documents requiring review before public launch.

Vercel's Hobby plan is for personal, non-commercial projects. Choose an appropriate commercial plan for this company website; account creation, billing selection, and service connection are owner actions.

## Devaraj Time subdomain

Add `time.devarajsolutions.site` to the **same Vercel project** as the company website. In your DNS provider, add the `time` record using the exact values shown by Vercel, then wait for domain verification and TLS. No separate application deployment is needed for this marketing page.

The host-based rewrite serves `/time` at the subdomain root. `/time` is also available on local and preview deployments for review. Company product links point to the subdomain; inquiries and company navigation use the company origin. The existing `/products/devaraj-time` route remains available for old links. This subdomain is the marketing website, not the attendance application login.

After deploying, verify the company “View product” link, subdomain root, product-only navigation, screenshots, and setup/hosting inquiry links. Set NEXT_PUBLIC_DEVARAJ_TIME_URL only when intentionally using a different marketing origin, and update the host rewrite accordingly.
