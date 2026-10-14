import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { config } from '@/lib/config';
export default async function robots(): Promise<MetadataRoute.Robots> {
  const timeHost = (await headers()).get('host')?.split(':')[0] === 'time.devarajsolutions.site';
  const origin = timeHost ? config.timeUrl : config.siteUrl;
  return { rules: { userAgent: '*', ...(config.siteUrl ? { allow: '/', disallow: '/api/' } : { disallow: '/' }) }, ...(config.siteUrl ? { sitemap: origin + '/sitemap.xml' } : {}) };
}
