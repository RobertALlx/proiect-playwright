import { test, expect, chromium } from '@playwright/test';

test.setTimeout(120000);

test('Login and logout flow on automationexercise.com', async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://automationexercise.com');
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: 'Signup / Login' }).click();

  await expect(page.getByRole('heading', { name: /Login to your account/i })).toBeVisible();

  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('robittest@gmail.com');
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Password').fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText(/Logged in as/i)).toBeVisible();

  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page.getByRole('heading', { name: /Login to your account/i })).toBeVisible();

  await browser.close();
});
