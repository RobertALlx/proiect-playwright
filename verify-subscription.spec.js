import { test, expect, chromium } from '@playwright/test';
test.setTimeout(130_000); 
test('Test Case 10: Verify Subscription in home page', async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 1000 });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://automationexercise.com/test_cases');
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: 'Test Case 10: Verify' }).click();
  await page.getByRole('link', { name: '\'http://automationexercise.' }).click();
  await page.getByRole('textbox', { name: 'Your email address' }).click();
  await page.getByRole('textbox', { name: 'Your email address' }).fill('robittest@gmail.com');
  await page.locator('div').filter({ hasText: 'Subscription Get the most' }).nth(3).click();
  await page.getByRole('heading', { name: 'Subscription' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByText('You have been successfully').click();
});