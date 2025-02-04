import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/aiv/');
  await page.getByRole('textbox', { name: 'Your email' }).click();
  await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Your email' }).fill('A');
  await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Your email' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: ' Administration ' }).click();
  await page.getByRole('link', { name: ' Users' }).click();
  await page.locator('a').filter({ hasText: 'Create User' }).click();
  await page.locator('#mat-mdc-dialog-0').getByText('Username').click();
  await page.locator('.flex > .p-inputtext').first().click();
  await page.locator('.flex > .p-inputtext').first().press('CapsLock');
  await page.locator('.flex > .p-inputtext').first().fill('D');
  await page.locator('.flex > .p-inputtext').first().press('CapsLock');
  await page.locator('.flex > .p-inputtext').first().fill('Demo');
  await page.getByText('Email Address').click();
  await page.locator('div:nth-child(2) > .flex > .p-inputtext').click();
  await page.locator('div:nth-child(2) > .flex > .p-inputtext').press('CapsLock');
  await page.locator('div:nth-child(2) > .flex > .p-inputtext').fill('D');
  await page.locator('div:nth-child(2) > .flex > .p-inputtext').press('CapsLock');
  await page.locator('div:nth-child(2) > .flex > .p-inputtext').fill('Demo@aivhub.com');
  await page.getByText('First Name').click();
  await page.locator('div:nth-child(3) > .flex > .p-inputtext').click();
  await page.locator('div:nth-child(3) > .flex > .p-inputtext').press('CapsLock');
  await page.locator('div:nth-child(3) > .flex > .p-inputtext').fill('D');
  await page.locator('div:nth-child(3) > .flex > .p-inputtext').press('CapsLock');
  await page.locator('div:nth-child(3) > .flex > .p-inputtext').fill('Demo');
  await page.getByText('Last Name').click();
  await page.locator('div:nth-child(4) > .flex > .p-inputtext').click();
  await page.locator('div:nth-child(4) > .flex > .p-inputtext').fill('aiv');
  await page.getByText('Password', { exact: true }).click();
  await page.locator('input[type="password"]').first().click();
  await page.locator('input[type="password"]').first().fill('password');
  await page.getByText('Confirm Password').click();
  await page.locator('input[type="password"]').nth(1).click();
  await page.locator('input[type="password"]').nth(1).fill('password');
  await page.locator('p-dropdown').filter({ hasText: 'Internal User' }).getByLabel('dropdown trigger').click();
  await page.getByText('Backup User').click();
  await page.getByRole('button', { name: 'dropdown trigger' }).nth(1).click();
  await page.getByLabel('Admin', { exact: true }).getByText('Admin').click();
  await page.locator('label').filter({ hasText: 'Admin' }).click();
  await page.locator('#mat-mdc-dialog-0 span').filter({ hasText: 'Inactive' }).locator('span').click();
  await page.locator('p-dropdown').filter({ hasText: 'Request/Alerts' }).getByLabel('dropdown trigger').click();
  await page.getByRole('option', { name: 'mainHeader_Datasets' }).locator('div').first().click();
  await page.getByRole('button', { name: 'Submit' }).click();
  
// //   // Wait for the "User Created Successfully" message to appear
//   await page.getByText('User Created Successfully').waitFor({timeout: 130000});
  
  // Click the "User Created Successfully" message
   await page.getByText('User Created Successfully');
});
