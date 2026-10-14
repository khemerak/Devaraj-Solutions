import {test,expect} from '@playwright/test';
test('product showcase explains audience, benefits, scope, and inquiry routing',async({page})=>{
 await page.goto('/products/devaraj-time');
 await expect(page.getByRole('heading',{level:1})).toContainText('Smarter attendance');
 await expect(page.getByRole('heading',{name:'HR teams and administrators'})).toBeVisible();
 await expect(page.getByRole('heading',{name:'Employees',exact:true})).toBeVisible();
 await expect(page.getByRole('heading',{name:'Corrections with context'})).toBeVisible();
 await expect(page.getByRole('heading',{name:'Know the current scope.'})).toBeVisible();
 await page.getByRole('link',{name:'Discuss your requirements',exact:true}).click();
 await expect(page.locator('select[name=product]')).toHaveValue('time');
 await page.goto('/contact?product=unknown');await expect(page.locator('select[name=product]')).toHaveValue('general');
 for(const width of [375,1440]){await page.setViewportSize({width,height:1000});await page.goto('/products/devaraj-time');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);}
 await page.emulateMedia({colorScheme:'dark'});for(const image of await page.locator('.landing-screen-grid img').all()){await image.scrollIntoViewIfNeeded();await expect.poll(()=>image.evaluate(el=>(el as HTMLImageElement).complete && (el as HTMLImageElement).naturalWidth>0)).toBe(true);}await page.evaluate(()=>{(document.activeElement as HTMLElement)?.blur();window.scrollTo(0,0);});await page.screenshot({path:'docs/time-showcase-dark.png',fullPage:true});
});


