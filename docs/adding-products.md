# Adding products
The shared catalog at src/data/products.ts drives home featured cards, listings, footer links, contact choices, static route parameters, and sitemap entries.

Add a Product entry with a unique id and slug, name, category, summary, description, features, release status, optional validated external URL, featured flag, headline, details, and steps. For example (replace all placeholders with verified product information before publishing):

```ts
{
 id: 'next-product', slug: 'next-product', name: 'Confirmed product name',
 category: 'Confirmed category', summary: 'Short value proposition',
 description: 'Accurate description', features: ['Confirmed capability'],
 status: 'in-development', featured: false,
 headline: 'A clear product headline',
 details: [{ title: 'Capability', text: 'Its intended behavior' }],
 steps: [{ title: 'First step', text: 'How to begin' }]
}
```
Use httpUrl() for environment-supplied URLs. Do not mark available before verifying the deployed product. Add product-specific branding/preview in ProductCard only if needed; the detail template handles ordinary entries. Store approved assets in public. The existing attendance preview is deliberately rendered only for the Time entry.

Run typecheck, lint, build, and navigation tests. Confirm the new slug, footer link, inquiry option, and sitemap. Rebuild after adding products or changing public URL configuration. Never connect this website to a product's private database or authentication.
