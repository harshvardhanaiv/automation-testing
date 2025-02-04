import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the URL
  await page.goto('http://localhost:8080/aiv/');
  
  // Login
  await page.getByRole('textbox', { name: 'Your email' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Login' }).click();
  
  // Wait for the dashboard to load
  await page.getByRole('button', { name: '' }).waitFor();

  // Open Dynamic Message
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('link', { name: ' Dynamic Message' }).click();
  
  // Create a section
  await page.getByRole('listitem').filter({ hasText: 'Create' }).click();
  await page.getByText('Section').click();
  await page.getByRole('option', { name: 'label_cmn_section' }).click();

  // Select DASHBOARD, REPORTS, and QUICKRUN
  await page.getByRole('listitem').filter({ hasText: 'DASHBOARD' }).locator('div').nth(2).click();
  await page.getByRole('listitem').filter({ hasText: 'REPORTS' }).locator('div').nth(2).click();
  await page.getByRole('listitem').filter({ hasText: 'QUICKRUN' }).locator('div').nth(2).click();

  // Select start and end dates
  await page.locator('div').filter({ hasText: /^Start Date$/ }).getByRole('button').click();
  await page.getByText('4', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^End Date$/ }).getByRole('button').click();
  await page.getByText('26').nth(1).click();

  // Select Active checkbox
  await page.locator('p-checkbox').filter({ hasText: 'Active' }).locator('div').nth(2).click();

  // Ensure subject input is visible before interacting
  const subjectInput = page.locator('input[name="subject"]');
  await subjectInput.waitFor({ state: 'visible' });
  await subjectInput.scrollIntoViewIfNeeded();
  await subjectInput.fill('Visualization Tools of AIV');
  
  // Copy subject to the description
  await subjectInput.press('ControlOrMeta+A');
  await subjectInput.press('ControlOrMeta+C');
  
  const descriptionEditor = page.locator('quill-editor div').nth(2);
  await descriptionEditor.waitFor({ state: 'visible' });
  await descriptionEditor.scrollIntoViewIfNeeded();
  await descriptionEditor.click();
  await descriptionEditor.press('ControlOrMeta+V');

  // Add options
  await page.getByRole('button', { name: '' }).click();
  const optionInput = page.locator('input[name="option1"]');
  await optionInput.waitFor({ state: 'visible' });
  await optionInput.scrollIntoViewIfNeeded();
  await optionInput.fill('Must Applied AIV');

  // Finalize and submit
  await page.getByRole('button', { name: 'Submit' }).click();

  // Verify successful submission
  await expect(page).toHaveURL(/dashboard/); // Replace with the expected URL after submission
});
