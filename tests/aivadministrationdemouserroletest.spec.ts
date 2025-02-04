import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the AIV application
  await page.goto('http://localhost:8080/aiv/', { timeout: 30000 });

  // Interact with email textbox
  await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).click();
  await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).fill('A');
  await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).fill('Admin');

  // Enter password and login
  await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).press('Tab');
  await page.getByRole('textbox', { name: 'Password', timeout: 5000 }).fill('password');
  await page.getByRole('button', { name: 'Login', timeout: 5000 }).click();

  // Navigate to Administration -> Users
  await page.getByRole('button', { name: '', timeout: 5000 }).click();
  await page.getByRole('button', { name: ' Administration ', timeout: 5000 }).click();
  await page.getByRole('link', { name: ' Users', timeout: 5000 }).click();

  // Assign roles to users
  await page.locator('tr:nth-child(2) > td > .e-checkbox-wrapper > .e-frame', { timeout: 5000 }).click();
  await page.locator('tr:nth-child(2) > td:nth-child(2) > .flex > .fa-light', { timeout: 5000 }).click();
  await page.getByRole('menuitem', { name: ' Assign Roles to Users', timeout: 5000 }).click();
  await page.getByRole('button', { name: 'Submit', timeout: 5000 }).click();

  // Logout and login as another user
  await page.getByRole('link', { name: 'AdminProfile-Image', timeout: 5000 }).click();
  await page.locator('#mat-menu-panel-0').getByText('Logout', { timeout: 5000 }).click();
  await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).click();
  await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).fill('D');
  await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).fill('Demo');
  await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).press('Tab');
  await page.getByRole('textbox', { name: 'Password', timeout: 5000 }).fill('password');
  await page.getByRole('button', { name: 'Login', timeout: 5000 }).click();

  // Interact with the second user's profile
  await page.getByRole('link', { name: 'DemoProfile-Image', timeout: 5000 }).click();
  await page.locator('.cdk-overlay-backdrop', { timeout: 5000 }).click();
  await page.getByRole('button', { name: '', timeout: 5000 }).click();
  await page.getByRole('button', { name: ' Administration ', timeout: 5000 }).click();
  await page.getByRole('button', { name: ' Administration ', timeout: 5000 }).click();
});
