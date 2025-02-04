import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Set a timeout for the page loading
  await page.goto('http://localhost:8080/aiv/', { timeout: 60000 });

  // Click and fill the email textbox with a timeout
  await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).click();
  await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).press('CapsLock');

  await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).fill('A');

  await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).fill('Admin');

  await page.getByRole('textbox', { name: 'Your email', timeout: 5000 }).press('Tab');

  // Fill the password textbox with a timeout
  await page.getByRole('textbox', { name: 'Password', timeout: 5000 }).fill('password');

  // Click the login button with a timeout
  await page.getByRole('button', { name: 'Login', timeout: 5000 }).click();

  // Click the menu button
  await page.getByRole('button', { name: '', timeout: 5000 }).click();

  // Click on Administration
  await page.getByRole('button', { name: ' Administration ', timeout: 5000 }).click();

  // Click on Users
  await page.getByRole('link', { name: ' Users', timeout: 5000 }).click();

  // Click on a user
  await page.locator('tr:nth-child(2) > td:nth-child(2) > .flex > .fa-light', { timeout: 5000 }).click();

  // Select a row
  await page.getByRole('gridcell', { name: 'Select row ', timeout: 5000 }).locator('span').first().click();

  // Check the checkbox
  await page.locator('tr:nth-child(2) > td > .e-checkbox-wrapper > .e-frame', { timeout: 5000 }).click();

  // Click again on the user
  await page.locator('tr:nth-child(2) > td:nth-child(2) > .flex > .fa-light', { timeout: 5000 }).click();

  // Click on 'Assign Roles to Users'
  await page.getByRole('menuitem', { name: ' Assign Roles to Users', timeout: 5000 }).click();

  // Select Administrator role
  await page.getByText('Administrator', { timeout: 5000 }).click();

  // Submit the form
  await page.getByRole('button', { name: 'Submit', timeout: 5000 }).click();
});
