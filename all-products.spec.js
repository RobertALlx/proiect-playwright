import { test, expect,chromium } from '@playwright/test';
test.setTimeout(130_000); 
test('Test Case 8: Verify All Products and product detail page ', async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 1000 });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://automationexercise.com/test_cases');
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: 'Test Case 8: Verify All' }).click();
  await page.locator('#collapse8').getByText('Launch browser').click();
  await page.getByRole('link', { name: '\'http://automationexercise.' }).click();
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('heading', { name: 'All Products' }).click();
  await page.locator('.nav.nav-pills.nav-justified > li > a').first().click();
  await page.getByRole('img', { name: 'ecommerce website products' }).first().click();
  await page.getByText('Blue Top Category: Women >').click();
  await page.getByRole('heading', { name: 'Blue Top' }).click();
  await page.getByText('Category: Women > Tops').click();
  await page.getByText('Rs.').click();
  await page.getByRole('link', { name: '(6) Polo' }).click();
  await page.goto('https://automationexercise.com/product_details/1');
  await page.getByText('Condition:').click();
  await page.getByText('Condition: New').click();
  await page.getByText('Availability: In Stock').click();
  await page.getByRole('img', { name: 'ecommerce website products' }).nth(2).click();
});