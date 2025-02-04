// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('http://localhost:8080/aiv/', { timeout: 10000 }); // Page load timeout

//   // Wait for and interact with elements
//   await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).click();
//   await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).fill('A');
//   await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).fill('Admin');
  
//   await page.getByRole('textbox', { name: 'Password', timeout: 5000 }).click();
//   await page.getByRole('textbox', { name: 'Password', timeout: 5000 }).fill('password');
//   await page.getByRole('button', { name: 'Login', timeout: 5000 }).click();
  
//   // Wait and click on buttons
//   await page.getByRole('button', { name: '', timeout: 5000 }).click();
//   await page.getByRole('button', { name: ' Administration ', timeout: 5000 }).click();
//   await page.getByRole('link', { name: ' Users', timeout: 5000 }).click();
  
//   // Wait for the checkbox to be visible and clickable, then click
//   const checkboxLocator = page.locator('tr:nth-child(2) > td > .e-checkbox-wrapper > .e-frame');
//   await expect(checkboxLocator).toBeVisible({ timeout: 10000 }); // Wait for the checkbox to be visible
//   await checkboxLocator.click({ timeout: 10000 }); // Click with extended timeout
  
//   // Wait for and click on toolbar row
//   await page.locator('mat-toolbar-row', { timeout: 5000 }).click();
  
//   // Wait for and click on the icon in the second row
//   await page.locator('tr:nth-child(2) > td:nth-child(2) > .flex > .fa-light', { timeout: 5000 }).click();
  
//   // Wait for and click the "Delete" menu item
//   await page.getByRole('menuitem', { name: ' Delete', timeout: 5000 }).click();
  
//   // Wait for and click the Delete button
//   await page.getByRole('button', { name: 'Delete', timeout: 5000 }).click();
  
//   // Wait for and verify the "Deleted successfully" message
//   await page.getByText('Deleted successfully', { timeout: 5000 }).click();
// });
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/aiv/');
  await page.getByRole('textbox', { name: 'Your email' }).click();
  await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Your email' }).fill('A');
  await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Your email' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Your email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: ' Administration ' }).click();
  await page.getByRole('link', { name: ' Users' }).click();
  await page.locator('a').filter({ hasText: 'Create User' }).click();
  await page.locator('.flex > .p-inputtext').first().click();
  await page.locator('.flex > .p-inputtext').first().press('CapsLock');
  await page.locator('.flex > .p-inputtext').first().fill('TOM');
  await page.locator('div:nth-child(2) > .flex > .p-inputtext').click();
  await page.locator('div:nth-child(2) > .flex > .p-inputtext').fill('TOM@AIVHUB.COM');
  await page.locator('div:nth-child(2) > .flex > .p-inputtext').press('Tab');
  await page.locator('div:nth-child(3) > .flex > .p-inputtext').fill('TOM');
  await page.locator('div:nth-child(3) > .flex > .p-inputtext').press('Tab');
  await page.locator('div:nth-child(4) > .flex > .p-inputtext').fill('AIV');
  await page.locator('div:nth-child(4) > .flex > .p-inputtext').press('Tab');
  await page.locator('input[type="password"]').first().fill('PASSWORD');
  await page.locator('input[type="password"]').first().press('Tab');
  await page.locator('input[type="password"]').nth(1).fill('PASSWORD');
  await page.locator('p-dropdown').filter({ hasText: 'Internal User' }).getByLabel('dropdown trigger').click();
  await page.getByLabel('Internal User').getByText('Internal User').click();
  await page.getByText('Backup User').click();
  await page.getByRole('button', { name: 'dropdown trigger' }).nth(1).click();
  await page.getByLabel('Admin', { exact: true }).getByText('Admin').click();
  await page.locator('label').filter({ hasText: 'Admin' }).click();
  await page.locator('#mat-mdc-dialog-0 span').filter({ hasText: 'Inactive' }).locator('span').click();
  await page.locator('#pr_id_5_label div').first().click();
  await page.getByRole('option', { name: 'mainHeader_Datasets' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
});