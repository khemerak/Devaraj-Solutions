import {test,expect} from '@playwright/test';
test('wide layouts use the viewport with readable mobile layouts',async({page})=>{
 for(const width of [375,768,1440,2560]){
  await page.setViewportSize({width,height:1100});
  for(const route of ['/','/about']){
   await page.goto(route);
   expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
   const box=await page.locator('header .container').boundingBox();
   expect(box!.width).toBeGreaterThan(width*.86);
   if(width>=1440){const content=await page.locator(route==='/'?'.home-hero':'.about-page > section.section').boundingBox();expect(content!.width).toBeGreaterThan(width*.86);}
  }
 }
 await page.emulateMedia({colorScheme:'dark'});await page.setViewportSize({width:2560,height:1440});await page.goto('/');await page.screenshot({path:'docs/home-wide-dark.png',fullPage:true});await page.goto('/about');await page.screenshot({path:'docs/about-wide-dark.png',fullPage:true});
});

