# Vercel launch: devarajsolutions.site

Repository: https://github.com/khemerak/Devaraj-Solutions

Import this repository into Vercel as a Next.js project. Root directory is `./` (the repository contains the website itself), build command is `npm run build`, and output directory should remain the framework default. Vercel runs the Next.js adapter; do not configure the Docker standalone start script as a Vercel command.

Set this variable for **Production** before deploying:

```
NEXT_PUBLIC_SITE_URL=https://devarajsolutions.site
```

Leave it unset for preview environments to keep previews non-indexable. Keep NEXT_PUBLIC_DEVARAJ_TIME_URL unset until the independent application is actually deployed, and keep DEVARAJ_TIME_AVAILABLE=false. Product cards already lead to the public /products/devaraj-time showcase.

Contact delivery can be configured later using the server-only settings documented in README.md. Without them, the page honestly displays an unavailable state.

After the first successful deployment, add devarajsolutions.site and www.devarajsolutions.site in the project's Domains settings. Select devarajsolutions.site as primary and redirect www to it. Copy the exact project-specific A/CNAME/TXT values Vercel returns into Namecheap Advanced DNS when using Namecheap DNS. Replace only conflicting parking/redirect records for @/www; preserve unrelated email and verification records. No guessed DNS targets are stored in this repository.

Verify DNS configuration and HTTPS, then check homepage, products, showcase, About, Contact, sitemap.xml, robots.txt, and canonical/social URLs. Legal policies remain draft documents requiring review before public launch.

Vercel's Hobby plan is for personal, non-commercial projects. Choose an appropriate commercial plan for this company website; account creation, billing selection, and service connection are owner actions.
