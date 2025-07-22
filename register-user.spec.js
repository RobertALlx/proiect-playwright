import { test, expect, chromium } from '@playwright/test';

test.setTimeout(120_000); 
test('Register User with existing email', async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 1000 });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://automationexercise.com/test_cases');
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: 'Test Case 5: Register User' }).click();
  await page.getByRole('link', { name: '\'http://automationexercise.' }).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('heading', { name: 'New User Signup!' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('');
  await page.getByRole('textbox', { name: 'Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name' }).fill('RO');
  await page.getByRole('textbox', { name: 'Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name' }).fill('Robert');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('robitest@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.goto('https://automationexercise.com/login');
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('robert');
  await page.getByRole('textbox', { name: 'Name' }).press('Enter');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('robittest@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByText('Email Address already exist!').click();
});