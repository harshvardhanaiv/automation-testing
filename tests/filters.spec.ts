import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


test('test', async ({ page }) => {
    await page.goto('http://localhost:8080/aiv/');
    await page.getByPlaceholder('Your email').click();
    await page.getByPlaceholder('Your email').fill('Admin');
    await page.getByPlaceholder('Your email').press('Tab');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('password');
    await page.getByRole('button', { name: 'Login' }).click();

    //here it will upload the ds file
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
    console.log('✅ File uploaded successfully!');

    //let's make the dashboard
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('link', { name: '' }).click();
    await page.waitForTimeout(4000);
    await page.getByRole('textbox', { name: 'Search' }).fill('playautomation');

    // Check if the file exists
    const dashfile = await page.getByLabel('is template cell column header File Name')
        .getByText('playautomation')
        .isVisible();

    if (dashfile) {
        console.log('✅ File exists. Deleting it...');

        await page.getByLabel('is template cell column header File Name').getByText('playautomation').click({
            button: 'right'
        });
        await page.getByRole('menuitem', { name: ' Delete' }).click();
        await page.getByText('Are you sure you want to').click();
        await page.getByText('All versions').click();
        await page.getByRole('button', { name: 'Delete' }).click();
        await page.getByText('Deleted successfully').click();

        console.log('✅ File deleted successfully.');
    } else {
        console.log('✅ File does not exist. Creating a new one...');

        // Add code here to create the 'playautomation' file
        await page.locator('a').filter({ hasText: 'Create Dashboard' }).click();
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('playwright');
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('playautomation');
        await page.getByRole('button', { name: 'Create' }).click();
        await page.getByText('Redirecting to dashboard').click();
        await page.getByText('Your dashboard canvas looks').click();
        await page.getByRole('link', { name: '' }).click();

        // Add Barchart widget
        await page.getByRole('link', { name: ' Charts' }).click();
        await page.getByText('Chart Widget').click();
        await page.locator('app-get-data-api div').filter({ hasText: /^empty$/ }).click();
        await page.getByPlaceholder('Search by name or type').fill('customers');
        await page.getByLabel('Customers').getByText('Customers.cds').click();
        //await page.locator('p-dropdown').filter({ hasText: 'empty' }).first().click();
        await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
        await page.getByLabel('country').click();
        await page.locator('div').filter({ hasText: /^empty$/ }).click();
        await page.getByRole('textbox').fill('creditlimit');
        await page.getByRole('textbox').click();
        await page.getByLabel('creditLimit').click();
        await page.getByText('Count', { exact: true }).click();
        await page.getByLabel('Sum', { exact: true }).click();
        await page.getByRole('button', { name: ' Publish' }).click();
        console.log('✅ Chart widget added!');

        //filter adding
        await page.locator('a:nth-child(7)').click();
        await page.getByRole('button', { name: '' }).click();
        await page.locator('p-scrollpanel').getByRole('textbox').click();
        await page.locator('p-scrollpanel').getByRole('textbox').fill('country');
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('link', { name: '' }).click();
        await page.getByText('Static').click();
        await page.getByRole('option', { name: 'header_sub_datasets' }).click();
        await page.locator('app-get-data-api div').filter({ hasText: /^empty$/ }).click();
        await page.getByRole('textbox', { name: 'Search by name or type' }).click();
        await page.getByRole('textbox', { name: 'Search by name or type' }).fill('customers');
        await page.getByLabel('Customers').getByText('Customers.cds').click();
        await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
        await page.getByLabel('country').getByText('country').click();
        await page.getByText('Link Filters and Widgets').click();
        await page.getByRole('button', { name: 'dropdown trigger' }).nth(1).click();
        await page.getByRole('option', { name: 'layer1' }).click();
        await page.locator('div').filter({ hasText: /^TabsNone$/ }).getByLabel('dropdown trigger').click();
        await page.getByLabel('Tab').getByText('Tab').click();
        await page.locator('p-dropdown').filter({ hasText: 'None' }).getByLabel('dropdown trigger').click();
        await page.getByLabel('Chart Widget 1').getByText('Chart Widget 1').click();
        await page.getByRole('gridcell', { name: ' country' }).locator('span').click();
        await page.getByText('Filter View').click();
        await page.locator('form i').click();
        await page.getByRole('button', { name: ' Save And Exit' }).click();
        await page.getByRole('link', { name: '' }).nth(1).click();
        await page.getByRole('link', { name: '' }).click();
        await page.locator('[id="\\33 4f2wid638caiv0688version5c5b9"] > div:nth-child(4)').click();
        await page.getByRole('link', { name: '' }).click();
        await page.getByText('Save Dashboard').click();
        await page.getByRole('button', { name: 'Save' }).click();
        await page.locator('a:nth-child(12)').click();
        await page.locator('p-dropdown').getByText('country').click();
        await page.getByLabel('France').getByText('France').click();
        await page.getByRole('button', { name: 'Filter' }).click();
        await page.locator('#aiv_gridster_roll0').getByText('Column country: France').click();
    }

    // create the dashboard file
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('link', { name: '' }).click();
    await page.locator('a').filter({ hasText: 'Create Dashboard' }).click();
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('playwright');
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('playautomation');
    await page.getByRole('button', { name: 'Create' }).click();
    await page.getByText('Redirecting to dashboard').click();
    await page.getByText('Your dashboard canvas looks').click();
    await page.getByRole('link', { name: '' }).click();

    // Add Barchart widget
    await page.getByRole('link', { name: ' Charts' }).click();
    await page.getByText('Chart Widget').click();
    await page.locator('app-get-data-api div').filter({ hasText: /^empty$/ }).click();
    await page.getByPlaceholder('Search by name or type').fill('customers');
    await page.getByLabel('Customers').getByText('Customers.cds').click();
    //await page.locator('p-dropdown').filter({ hasText: 'empty' }).first().click();
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByLabel('country').click();
    await page.locator('div').filter({ hasText: /^empty$/ }).click();
    await page.getByRole('textbox').fill('creditlimit');
    await page.getByRole('textbox').click();
    await page.getByLabel('creditLimit').click();
    await page.getByText('Count', { exact: true }).click();
    await page.getByLabel('Sum', { exact: true }).click();
    await page.getByRole('button', { name: ' Publish' }).click();
    console.log('✅ Chart widget added!');

    //filter adding
    await page.locator('a:nth-child(7)').click();
    await page.getByRole('button', { name: '' }).click();
    await page.locator('p-scrollpanel').getByRole('textbox').click();
    await page.locator('p-scrollpanel').getByRole('textbox').fill('country');
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('link', { name: '' }).click();
    await page.getByText('Static').click();
    await page.getByLabel('header_sub_datasets').click();
    await page.locator('app-get-data-api div').filter({ hasText: /^empty$/ }).click();
    await page.getByPlaceholder('Search by name or type').fill('customers');
    await page.getByLabel('Customers').getByText('Customers.cds').click();
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByLabel('country').getByText('country').click();
    await page.getByText('List Box').click();
    await page.getByText('Link Filters and Widgets').click();
    await page.getByRole('button', { name: 'dropdown trigger' }).nth(1).click();
    await page.getByLabel('layer1').click();
    await page.locator('div').filter({ hasText: /^TabsNone$/ }).getByLabel('dropdown trigger').click();
    await page.getByLabel('Tab').getByText('Tab').click();
    await page.locator('p-dropdown').filter({ hasText: 'None' }).getByLabel('dropdown trigger').click();
    await page.getByLabel('Chart Widget').getByText('Chart Widget').click();
    await page.getByRole('gridcell', { name: ' country' }).locator('span').click();
    await page.locator('p-dropdown').filter({ hasText: 'Chart Widget' }).getByLabel('dropdown trigger').click();
    await page.getByText('Filter View').click();
    await page.locator('form i').click();
    await page.getByRole('link', { name: '' }).click();
    await page.locator('a:nth-child(12)').click();
    await page.getByRole('button', { name: 'Save And Exit' }).click();
    console.log('✅ Country filter added!');

    await page.locator('p-dropdown').getByText('country').click();
    await page.getByRole('option', { name: 'Australia' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByText('Column country: Australia').first().click();
    console.log('✅ Country filter applied!');
});