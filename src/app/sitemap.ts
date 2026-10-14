import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { config } from '@/lib/config';
import { products } from '@/data/products';
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const timeHost = (await headers()).get('host')?.split(':')[0] === 'time.devarajsolutions.site';
  if (timeHost) return config.siteUrl ? [{ url: config.timeUrl + '/' }] : [];
  return config.siteUrl ? ['', '/products', '/about', '/contact', '/privacy', '/terms', ...products.map(p => '/products/' + p.slug)].map(path => ({ url: config.siteUrl + path })) : [];
}
