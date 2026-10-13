import {test,expect} from '@playwright/test';
test('open source, self-host guide and separately quoted services',async({page})=>{
 await page.goto('/products/devaraj-time');
 await expect(page.getByRole('link',{name:'Get source code'})).toHaveAttribute('href','https://github.com/khemerak/Devaraj-Time');
 await expect(page.getByRole('heading',{name:'Host it yourself'})).toBeVisible();
 await expect(page.getByRole('heading',{name:'Let us set it up'})).toBeVisible();
 await expect(page.getByRole('heading',{name:'Let us host it'})).toBeVisible();
 await expect(page.getByRole('link',{name:'Read the deployment guide'})).toHaveAttribute('href',/docs\/deployment.md$/);
 await page.getByRole('link',{name:'Request a setup quote'}).click();await expect(page.locator('select[name=product]')).toHaveValue('time');await expect(page.locator('input[name=subject]')).toHaveValue('Devaraj Time setup quote');
 await page.goto('/products/devaraj-time');await page.getByRole('link',{name:'Request a hosting quote'}).click();await expect(page.locator('input[name=subject]')).toHaveValue('Devaraj Time hosting quote');
});

test('service inquiries have direct public contact channels',async({page})=>{await page.goto('/contact?product=time&service=setup');await expect(page.getByRole('link',{name:/Email: pavkhemerak.official/})).toHaveAttribute('href',/mailto:pavkhemerak.official@gmail.com.*Devaraj%20Time%20setup%20quote/);await expect(page.getByRole('link',{name:/Telegram:/})).toHaveAttribute('href','https://t.me/pavkhemerak');await expect(page.getByRole('link',{name:/Phone:/})).toHaveAttribute('href','tel:+85514945699');});
