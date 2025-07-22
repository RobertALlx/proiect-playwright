import { test, expect, chromium } from '@playwright/test';
test.setTimeout(120_000);
test('Login user with incorrect credentials - slow motion', async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 1000 });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://automationexercise.com/test_cases');
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: 'Test Case 3: Login User with' }).click();
  await page.getByRole('link', { name: '\'http://automationexercise.' }).click();
  await page.locator('div').filter({ hasText: 'Category Women Dress Tops' }).nth(1).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('form')
    .filter({ hasText: 'Login' })
    .getByPlaceholder('Email Address')
    .fill('alalala@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
  await browser.close();
});
