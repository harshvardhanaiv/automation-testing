import * as dotenv from 'dotenv';
dotenv.config();
import { test } from '@playwright/test';
import * as path from 'path'; // Importing path

test('Login and Create Alert Test with Longer Delays', async ({ page }) => {
    // Set a longer timeout for the test
    test.setTimeout(600000); // 10 minutes

    // Check if required environment variables are defined
    const { AIV_BASE_URL, AIV_USERNAME, AIV_PASSWORD, DEMO_USERNAME, DEMO_PASSWORD } = process.env;
    if (!AIV_BASE_URL || !AIV_USERNAME || !AIV_PASSWORD || !DEMO_USERNAME || !DEMO_PASSWORD) {
        throw new Error('One or more environment variables are missing in the .env file');
    }

    // Navigate to the application URL
    console.log("Navigating to application URL...");
    await page.goto(AIV_BASE_URL, { waitUntil: 'load' });
    await page.waitForTimeout(5000);

    // Perform login
    console.log("Filling in email...");
    await page.getByRole('textbox', { name: 'Your email' }).fill(AIV_USERNAME);
    await page.waitForTimeout(4000);

    console.log("Filling in password...");
    await page.getByRole('textbox', { name: 'Password' }).fill(AIV_PASSWORD);
    await page.waitForTimeout(4000);

    console.log("Clicking login button...");
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(6000);

    // Navigate through menus and access Alerts
    console.log("Opening menu...");
    await page.getByRole('button', { name: '' }).click();
    await page.waitForTimeout(4000);

    console.log("Accessing Requests menu...");
    await page.getByRole('button', { name: ' Request ' }).click();
    await page.waitForTimeout(4000);

    console.log("Navigating to Alerts...");
    await page.getByRole('link', { name: ' Alerts' }).click();
    await page.waitForTimeout(4000);

    // Click upload link and upload a file
    console.log("Clicking upload link...");
    await page.locator('a').filter({ hasText: 'Upload' }).click();
    await page.waitForTimeout(4000);

    console.log("Clicking upload button...");
    await page.getByRole('button', { name: '' }).click();
    await page.waitForTimeout(4000);

    // Correct file path using path.resolve()
    const filePath = path.resolve(__dirname, '..', 'assets', 'Table Widget .png');
    console.log('File path:', filePath);

    // Upload the file
    console.log("Uploading file...");
    await page.setInputFiles('input[type="file"]', filePath);
    await page.waitForTimeout(5000);

    const inputFileLocator = page.locator('input[type="file"]');
    await inputFileLocator.setInputFiles(filePath);
    await page.waitForTimeout(5000);

    // Click on 'Create new' button
    console.log("Creating new alert...");
    await page.locator('div').filter({ hasText: /^Create newReplace Default$/ }).locator('span').first().click();
    await page.waitForTimeout(4000);

    // Fill details
    console.log("Filling details...");
    await page.getByRole('textbox').nth(1).click();
    await page.waitForTimeout(2000);
    await page.getByRole('textbox').nth(1).fill('Table Widget Image');
    await page.waitForTimeout(2000);
    await page.getByText('Privilege', { exact: true }).click();
    await page.waitForTimeout(2000);
    await page.locator('#mat-mdc-dialog-0 svg').click();
    await page.waitForTimeout(2000);
    await page.locator('div').filter({ hasText: /^Users$/ }).locator('span').click();
    await page.waitForTimeout(2000);

    // Continue with alert creation
    console.log("Finalizing alert creation...");
    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('Demo');
    await page.waitForTimeout(2000);
    await page.getByText('Private').click();
    await page.getByRole('gridcell', { name: 'Select row' }).locator('span').first().click();
    await page.getByRole('option', { name: 'label_internal' }).click();
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.waitForTimeout(4000);
    await page.getByRole('button', { name: 'Ok' }).click();
    await page.waitForTimeout(4000);

    // Logout and verify
    console.log("Logging out...");
    await page.getByRole('link', { name: 'AdminProfile-Image' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('listitem').filter({ hasText: 'Logout' }).click();
    await page.waitForTimeout(4000);

    // Login with demo credentials
    console.log("Logging in with demo credentials...");
    await page.getByRole('textbox', { name: 'Your email' }).fill(DEMO_USERNAME);
    await page.getByRole('textbox', { name: 'Password' }).fill(DEMO_PASSWORD);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(4000);

    console.log("Navigating to Alerts as Demo user...");
    await page.getByRole('button', { name: '' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: ' Request ' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: ' Alerts' }).click();
    await page.waitForTimeout(2000);

    await page.getByRole('link', { name: 'DemoProfile-Image' }).click();
    await page.locator('#mat-menu-panel-0').getByText('Logout').click();

    console.log("File uploaded successfully and logged out.");

    // Admin logs back in to delete the alert
    console.log("Logging back in as admin...");
    await page.getByRole('textbox', { name: 'Your email' }).fill(AIV_USERNAME);
    await page.getByRole('textbox', { name: 'Password' }).fill(AIV_PASSWORD);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(5000);

    console.log("Navigating through menus...");
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: ' Request ' }).click();
    await page.getByRole('link', { name: ' Alerts' }).click();
    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('Table Widget');
    await page.getByRole('gridcell', { name: 'Select row' }).locator('span').first().click();
    await page.locator('a').filter({ hasText: 'Delete' }).click();
    await page.getByRole('checkbox', { name: 'All versions' }).check();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(2000);

});
