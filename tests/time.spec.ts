import { test, expect } from '@playwright/test';
test('Time has its own landing page and routes inquiries to the company', async ({ page, request }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'View product', exact: true })).toHaveAttribute('href', 'https://time.devarajsolutions.site');
  await page.goto('/time');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Smarter attendance');
  await expect(page.getByRole('navigation', { name: 'Main navigation', exact: true })).toHaveCount(0);
  await expect(page.getByRole('navigation', { name: 'Product navigation' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Request a hosting quote', exact: true })).toHaveAttribute('href', 'https://devarajsolutions.site/contact?product=time&service=hosting');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://time.devarajsolutions.site');
  for (const width of [375, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  const response = await request.get('/', { headers: { host: 'time.devarajsolutions.site' } });
  expect(response.ok()).toBe(true);
  const html = await response.text();
  expect(html).toContain('Product navigation');
  expect(html).toContain('Smarter attendance');
  expect(html).not.toContain('aria-label="Main navigation"');
});
