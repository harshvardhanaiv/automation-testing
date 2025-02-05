import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('Check Playwright site', async ({ page }) => {

    await page.goto('http://localhost:8080/aiv/');
    await page.getByPlaceholder('Your email').click();
    await page.getByPlaceholder('Your email').fill('Admin');
    await page.getByPlaceholder('Your email').press('Tab');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('password');
    await page.getByRole('button', { name: 'Login' }).click();

    // Upload the .ds file
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: ' Master Data ' }).click();
    await page.getByRole('link', { name: ' Datasets' }).click();
    await page.locator('a').filter({ hasText: 'Upload' }).click();
    console.log('✅ Navigated to the upload section.');
    const filePath = path.join(__dirname, '../data/Customers.cds'); //filepath
    const fileInput = page.locator('input[type="file"]'); //Locate hidden file input field
    await fileInput.setInputFiles(filePath); //Set file without checking visibility
    console.log('✅ File has been set.');
    const uploadButton = page.locator('(//span[text()="Upload"])[2]'); //Click the upload button and wait for success
    await expect(uploadButton).toBeVisible();
    await uploadButton.click();
    page.getByText('Successfully uploaded:');
    await page.getByRole('button', { name: 'Ok' }).click();
    console.log('✅ File uploaded successfully.');

    // Create dashboard
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('link', { name: '' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Search' }).fill('customers');

    // Check if the file exists
    const dashfile = await page.getByLabel('is template cell column header File Name')
        .getByText('customers')
        .isVisible();

    if (dashfile) {
        console.log('✅ File exists. Deleting it...');

        await page.getByLabel('is template cell column header File Name').getByText('customers').click({
            button: 'right'
        });
        await page.getByRole('menuitem', { name: ' Delete' }).click();
        await page.getByText('Are you sure you want to').click();
        await page.getByText('All versions').click();
        await page.getByRole('button', { name: 'Delete' }).click();
        await page.getByText('Deleted successfully').click();

        console.log('✅ File deleted successfully.');
    }else{
    await page.locator('a').filter({ hasText: 'Create Dashboard' }).click();
    await page.getByRole('textbox').fill('customers');
    await page.getByRole('button', { name: 'Create' }).click();
    await page.getByRole('link', { name: '' }).click();
    await page.getByRole('link', { name: ' Charts' }).click();
    await page.locator('app-get-data-api div').filter({ hasText: /^empty$/ }).click();
    await page.getByLabel('Customers').getByText('Customers.cds').click();
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByRole('option', { name: 'country' }).click();
    await page.locator('div').filter({ hasText: /^empty$/ }).click();
    await page.getByRole('option', { name: 'creditLimit' }).click();
    await page.getByText('Count', { exact: true }).click();
    await page.getByRole('option', { name: 'Sum', exact: true }).click();
    await page.locator('label').filter({ hasText: /^Series$/ }).locator('i').nth(1).click();
    await page.locator('div').filter({ hasText: /^empty$/ }).click();
    await page.getByRole('option', { name: 'extendedPrice' }).click();
    await page.getByText('Count', { exact: true }).click();
    await page.getByRole('option', { name: 'Avg' }).click();
    //await page.locator('label').filter({ hasText: 'Value Axis' }).locator('i').nth(1)
    await page.locator('label').filter({ hasText: 'Value Axis' }).locator('i').nth(1).click();
    await page.getByText('Formatting').click();
    await page.getByRole('link', { name: ' Color & Theme Property' }).click();
    await page.getByText('Default', { exact: true }).click();
    await page.getByRole('option', { name: 'Kelly' }).click();
    await page.getByRole('link', { name: ' Chart3d Configuration' }).click();
    await page.getByText('Enable 3d mode').click();

    await page.waitForTimeout(2000); //the 3D mode takes time so keep it.
    await page.getByRole('link', { name: ' Global Thousand and Decimal' }).click();
    await page.locator('div').filter({ hasText: /^Thousand Separator$/ }).locator('span').click();
    await page.getByRole('link', { name: ' Chart Title' }).click();
    await page.locator('div').filter({ hasText: /^Chart TitleEnable Title$/ }).locator('span').click();
    await page.locator('div').filter({ hasText: /^Text$/ }).getByRole('textbox').click();
    await page.locator('div').filter({ hasText: /^Text$/ }).getByRole('textbox').fill('countries creditlimit');
    await page.getByText('Bold').click();
    await page.getByText('Lighter').click();

    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: ' Chart Display' }).click();
    await page.locator('div').filter({ hasText: /^Multiple Pane$/ }).locator('span').click();

    await page.waitForTimeout(2000); //the 3D mode takes time so keep it.
    await page.getByRole('button', { name: ' Publish' }).click();
    console.log('✅ Chart widget added.');
    }

    // Add chart widget in the dashboard
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('link', { name: '' }).click();
    await page.locator('a').filter({ hasText: 'Create Dashboard' }).click();
    await page.getByRole('textbox').fill('customers');
    await page.getByRole('button', { name: 'Create' }).click();
    await page.getByRole('link', { name: '' }).click();
    await page.getByRole('link', { name: ' Charts' }).click();
    await page.locator('app-get-data-api div').filter({ hasText: /^empty$/ }).click();
    await page.getByLabel('Customers').getByText('Customers.cds').click();
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByRole('option', { name: 'country' }).click();
    await page.locator('div').filter({ hasText: /^empty$/ }).click();
    await page.getByRole('option', { name: 'creditLimit' }).click();
    await page.getByText('Count', { exact: true }).click();
    await page.getByRole('option', { name: 'Sum', exact: true }).click();
    await page.locator('label').filter({ hasText: /^Series$/ }).locator('i').nth(1).click();
    await page.locator('div').filter({ hasText: /^empty$/ }).click();
    await page.getByRole('option', { name: 'extendedPrice' }).click();
    await page.getByText('Count', { exact: true }).click();
    await page.getByRole('option', { name: 'Avg' }).click();
    //await page.locator('label').filter({ hasText: 'Value Axis' }).locator('i').nth(1)
    await page.locator('label').filter({ hasText: 'Value Axis' }).locator('i').nth(1).click();
    await page.getByText('Formatting').click();
    await page.getByRole('link', { name: ' Color & Theme Property' }).click();
    await page.getByText('Default', { exact: true }).click();
    await page.getByRole('option', { name: 'Kelly' }).click();
    await page.getByRole('link', { name: ' Chart3d Configuration' }).click();
    await page.getByText('Enable 3d mode').click();

    await page.waitForTimeout(2000); //the 3D mode takes time so keep it.
    await page.getByRole('link', { name: ' Global Thousand and Decimal' }).click();
    await page.locator('div').filter({ hasText: /^Thousand Separator$/ }).locator('span').click();
    await page.getByRole('link', { name: ' Chart Title' }).click();
    await page.locator('div').filter({ hasText: /^Chart TitleEnable Title$/ }).locator('span').click();
    await page.locator('div').filter({ hasText: /^Text$/ }).getByRole('textbox').click();
    await page.locator('div').filter({ hasText: /^Text$/ }).getByRole('textbox').fill('countries creditlimit');
    await page.getByText('Bold').click();
    await page.getByText('Lighter').click();

    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: ' Chart Display' }).click();
    await page.locator('div').filter({ hasText: /^Multiple Pane$/ }).locator('span').click();
    await page.getByRole('button', { name: ' Publish' }).click();
    console.log('✅ Chart widget added.');

    //Save the dash
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: ' Publish' }).click();
    await page.locator('.dashpower_opers > a').first().click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.locator('a:nth-child(12)').click();
});
