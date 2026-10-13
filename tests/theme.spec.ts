import {test,expect} from '@playwright/test';
test('dark theme follows system, switches, persists, and keeps supplied logo visible',async({page})=>{
 await page.emulateMedia({colorScheme:'dark'});await page.goto('/');
 await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
 await expect(page.getByRole('button',{name:'Switch to light theme'})).toBeVisible();
 await expect(page.locator('header .logo-image')).toHaveAttribute('src',/devaraj-solutions/);
 expect(await page.locator('header .logo-image').evaluate((img)=>getComputedStyle(img).filter)).toContain('invert(1)');
 await page.getByRole('button',{name:'Switch to light theme'}).click();await page.reload();
 await expect(page.locator('html')).toHaveAttribute('data-theme','light');
 await page.getByRole('button',{name:'Switch to dark theme'}).click();
 await page.goto('/about');await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
 for(const route of ['/','/products','/products/devaraj-time','/contact','/privacy','/terms']){await page.goto(route);expect(await page.locator('body').evaluate(el=>getComputedStyle(el).backgroundColor)).toBe('rgb(11, 18, 32)');}
 await page.setViewportSize({width:1440,height:1000});await page.goto('/');await page.screenshot({path:'docs/home-dark-desktop.png',fullPage:true});
 await page.setViewportSize({width:375,height:812});await page.screenshot({path:'docs/home-dark-mobile.png',fullPage:true});
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
 await page.getByRole('button',{name:'Open navigation'}).click();await expect(page.getByRole('navigation',{name:'Mobile navigation'})).toBeVisible();
});
