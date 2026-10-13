# Deployment
Vercel supports the native Next.js build. Select devaraj-solutions as the root directory. Set verified origins and server-only contact credentials before building; preview environments should omit the production origin so indexing stays disabled.

For Linux: npm ci, npm run build, then npm start under a process manager. Place a TLS reverse proxy ahead of port 3000. Set proxy request limits and overwrite forwarded IP headers. Monitor delivery and rate-limit errors without logging inquiry content or secrets.

Docker: docker build -t devaraj-solutions . then docker run --env-file .env.local -p 3000:3000 devaraj-solutions. Because public configuration is baked into Next.js output, pass --build-arg NEXT_PUBLIC_SITE_URL=https://your-verified-origin and --build-arg NEXT_PUBLIC_DEVARAJ_TIME_URL=https://your-verified-product-origin, plus --build-arg DEVARAJ_TIME_AVAILABLE=true only after verification; .env files are excluded from the image context. The provided Dockerfile defaults to an unconfigured, non-indexable site. Server-only API credentials are runtime variables. Rebuild for changes to public URLs, status.

Verify all routes, robots.txt, sitemap.xml, canonical origins, contact errors, and configured delivery in the target environment. Review legal drafts and confirm product availability before public release.

