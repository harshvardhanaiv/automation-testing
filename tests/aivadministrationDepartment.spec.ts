// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   // Navigate to the application
//   await page.goto('http://localhost:8080/aiv/', { timeout: 30000 });

//   // Enter email
//   await page.getByRole('textbox', { name: 'Your email' }).click({ timeout: 5000 });
//   await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Your email' }).fill('A');
//   await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Your email' }).fill('Admin');
//   await page.getByRole('textbox', { name: 'Your email' }).press('Tab');

//   // Enter password
//   await page.getByRole('textbox', { name: 'Password' }).fill('password', { timeout: 5000 });
//   await page.getByRole('button', { name: 'Login' }).click({ timeout: 5000 });

//   // Open menu
//   await page.getByRole('button', { name: '' }).click({ timeout: 5000 });

//   // Navigate to Administration -> Users
//   await page.getByRole('button', { name: ' Administration ' }).click({ timeout: 5000 });
//   await page.getByRole('link', { name: ' Users' }).click({ timeout: 5000 });

//   // Select a user row
//   await page.getByRole('gridcell', { name: 'Select row' }).locator('span').first().click({ timeout: 5000 });

//   // Navigate to Departments
//   await page.getByRole('button', { name: '' }).click({ timeout: 5000 });
//   await page.getByRole('link', { name: ' Departments' }).click({ timeout: 5000 });

//   // Create a new department
//   await page.locator('a').filter({ hasText: 'Create' }).click({ timeout: 5000 });
//   await page.getByRole('textbox', { name: 'Department Name' }).click({ timeout: 5000 });
//   await page.getByRole('textbox', { name: 'Department Name' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Department Name' }).fill('AIVAI');
//   await page.getByRole('textbox', { name: 'Department Name' }).press('Tab');

//   // Enter department details
//   await page.getByRole('textbox', { name: 'Department Code' }).fill('AIVAI01', { timeout: 5000 });
//   await page.getByRole('textbox', { name: 'Department Code' }).press('Tab');
//   await page.getByRole('textbox', { name: 'User Name' }).fill('AIVONE', { timeout: 5000 });
//   await page.getByRole('textbox', { name: 'User Name' }).press('Tab');
//   await page.getByRole('textbox', { name: 'Password', exact: true }).fill('PASSWORD', { timeout: 5000 });
//   await page.getByRole('textbox', { name: 'Password', exact: true }).press('Tab');
//   await page.getByRole('textbox', { name: 'Confirm Password' }).fill('PASSWORD', { timeout: 5000 });

//   // Submit the form
//   await page.getByRole('button', { name: 'Submit' }).click({ timeout: 15000 });
// });

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const logWithTimestamp = (message) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  };

  // Navigate to the application
  await page.goto('http://localhost:8080/aiv/', { timeout: 30000 });
  logWithTimestamp('Navigated to the application.');

  // Enter email
  await page.getByRole('textbox', { name: 'Your email' }).click({ timeout: 5000 });
  await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Your email' }).fill('A');
  await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Your email' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Your email' }).press('Tab');
  logWithTimestamp('Entered email.');

  // Enter password
  await page.getByRole('textbox', { name: 'Password' }).fill('password', { timeout: 5000 });
  await page.getByRole('button', { name: 'Login' }).click({ timeout: 5000 });
  logWithTimestamp('Entered password and clicked login.');

  // Open menu
  await page.getByRole('button', { name: '' }).click({ timeout: 5000 });
  logWithTimestamp('Opened menu.');

  // Navigate to Administration -> Users
  await page.getByRole('button', { name: ' Administration ' }).click({ timeout: 5000 });
  await page.getByRole('link', { name: ' Users' }).click({ timeout: 5000 });
  logWithTimestamp('Navigated to Administration -> Users.');

  // Select a user row
  await page.getByRole('gridcell', { name: 'Select row' }).locator('span').first().click({ timeout: 5000 });
  logWithTimestamp('Selected a user row.');

  // Navigate to Departments
  await page.getByRole('button', { name: '' }).click({ timeout: 5000 });
  await page.getByRole('link', { name: ' Departments' }).click({ timeout: 5000 });
  logWithTimestamp('Navigated to Departments.');

  // Create a new department
  await page.locator('a').filter({ hasText: 'Create' }).click({ timeout: 5000 });
  await page.getByRole('textbox', { name: 'Department Name' }).click({ timeout: 5000 });
  await page.getByRole('textbox', { name: 'Department Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Department Name' }).fill('AIVAI');
  await page.getByRole('textbox', { name: 'Department Name' }).press('Tab');
  logWithTimestamp('Entered department name.');

  // Enter department details
  await page.getByRole('textbox', { name: 'Department Code' }).fill('AIVAI01', { timeout: 5000 });
  await page.getByRole('textbox', { name: 'Department Code' }).press('Tab');
  await page.getByRole('textbox', { name: 'User Name' }).fill('AIVONE', { timeout: 5000 });
  await page.getByRole('textbox', { name: 'User Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('PASSWORD', { timeout: 5000 });
  await page.getByRole('textbox', { name: 'Password', exact: true }).press('Tab');
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('PASSWORD', { timeout: 5000 });
  logWithTimestamp('Entered department details.');

  // Submit the form
  await page.getByRole('button', { name: 'Submit' }).click({ timeout: 15000 });
  logWithTimestamp('Submitted the form successfully.');
});
