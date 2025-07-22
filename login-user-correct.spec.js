import { test, expect, chromium } from '@playwright/test';

test.setTimeout(120_000); 

test('Register and delete account on automationexercise.com', async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 800 }); // Slow motion 800ms
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://automationexercise.com/test_cases');
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: 'Test Case 2: Login User with' }).click();
  await page.locator('#collapse2').getByText('Launch browser').click();
  await page.getByRole('link', { name: '\'http://automationexercise.' }).click();
  await page.getByText('AutomationExercise Full-').first().click();
  await page.getByRole('img', { name: 'demo website for practice' }).click();
  await page.getByText('Features Items  Added! Your').click();
  await page.locator('form')
    .filter({ hasText: 'Your email or password is' })
    .getByPlaceholder('Email Address')
    .fill('robi@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Logged in as robert').click();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
  await browser.close();
});
