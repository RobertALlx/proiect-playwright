import { test, expect,chromium } from '@playwright/test';

test.setTimeout(130_000); 
test('Test Case 7: Verify Test', async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 1000 });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://automationexercise.com/test_cases');
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: 'Test Case 7: Verify Test' }).click();
  await page.getByRole('link', { name: '\'http://automationexercise.' }).click();
  await page.getByRole('link', { name: 'Website for automation' }).click();
  await page.getByRole('link', { name: ' Test Cases' }).click();
  await page.getByRole('heading', { name: 'Test Cases', exact: true }).click();
});