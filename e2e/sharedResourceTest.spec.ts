import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test.describe('AIV Login and Create MySQL', () => {
  test('Login, Navigate, and Create MySQL', async ({ page }, testInfo) => {
    testInfo.setTimeout(120000); // Set timeout for this specific test to 2 minutes

    const BASE_URL = process.env.AIV_BASE_URL;
    const USERNAME = process.env.AIV_USERNAME;
    const PASSWORD = process.env.AIV_PASSWORD;

    // Increase default navigation timeout
    page.setDefaultTimeout(90000);

    try {
      // Navigate with more robust navigation options
      await page.goto(BASE_URL, {
        waitUntil: 'networkidle',
        timeout: 120000
      });

      // Wait for login form to be fully loaded
      await page.waitForSelector('input[placeholder="Your email"]', { state: 'visible', timeout: 30000 });

      // Fill credentials
      await page.locator('input[placeholder="Your email"]').fill(USERNAME);
      await page.locator('input[placeholder="Password"]').fill(PASSWORD);

      // Click login with retry mechanism
      await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle', timeout: 60000 }),
        page.locator('button[color="primary"]').click(),
      ]);

      // Verify successful login by checking for a key element
      await expect(page.locator('.fa-regular.fa-bars.text-base')).toBeVisible({ timeout: 30000 });

      // Rest of the login flow remains the same...
      await page.locator('.fa-regular.fa-bars.text-base').click();

      // Click on the second element
      await page.locator('.mat-expansion-indicator.ng-tns-c75-12.ng-trigger.ng-trigger-indicatorRotate.ng-star-inserted').click();

      // --- New Steps for Dataset Creation ---
      const page3Promise = page.waitForEvent('popup');
      await page.getByLabel('Master Data').getByRole('link', { name: '' }).nth(1).click();
      const page3 = await page3Promise;
      await page3.locator('a').filter({ hasText: 'Create Dataset' }).click();
      await page3.getByText('Existing Files').click();
      await page3.locator('div').filter({ hasText: /^JSON$/ }).locator('div').nth(2).click();
  await page3.getByText('csvjson.json').click();
await page3.getByRole('listitem').filter({ hasText: 'Output Columns' }).locator('span').first().click();
  await page3.getByRole('listitem').filter({ hasText: 'Preview' }).locator('span').first().click();
  await page3.getByRole('textbox', { name: 'Dataset Name' }).click();
  await page3.getByRole('textbox', { name: 'Dataset Name' }).fill('ExistingFile');
  await page3.getByRole('button', { name: 'Create' }).click();
  await page3.getByRole('link', { name: '' }).click();
    } catch (error) {
      console.error('Login test failed:', error);
      throw error;
    }
  });
});