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

        // Add Table widget
        await page.getByRole('link', { name: ' Tables' }).click();
        await page.getByText('Table Widget').click();
        await page.locator('div').filter({ hasText: /^empty$/ }).click();
        await page.getByPlaceholder('Search by name or type').fill('customers');
        await page.getByLabel('Customers').getByText('Customers.cds').click();
        await page.getByRole('gridcell', { name: 'country' }).click();
        await page.getByRole('gridcell', { name: 'creditLimit' }).click();
        await page.getByRole('gridcell', { name: 'country' }).click();
        await page.getByRole('gridcell', { name: 'creditLimit' }).click();
        await page.getByRole('button', { name: ' Publish' }).click();
        // await page.locator('.dashpower_opers > a').first().click();
        // await page.getByRole('button', { name: 'Save' }).click();
        // await page.locator('a:nth-child(12)').click();
        console.log('✅ Table widget added!');

        // Add Map widget
        await page.getByRole('link', { name: ' Maps' }).click();
        await page.getByText('Map Type:', { exact: true }).click();
        await page.locator('app-get-data-api div').filter({ hasText: /^empty$/ }).click();
        await page.getByPlaceholder('Search by name or type').fill('customers');
        await page.getByLabel('Customers').getByText('Customers.cds').click();
        await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
        await page.getByRole('textbox').nth(1).fill('country');
        await page.getByLabel('country').click();
        await page.locator('div').filter({ hasText: /^empty$/ }).click();
        await page.getByRole('textbox').nth(1).fill('creditlimit');
        await page.getByLabel('creditLimit').click();
        await page.getByText('Count', { exact: true }).click();
        await page.getByLabel('Sum').click();
        await page.getByRole('button', { name: ' Publish' }).click();
        // await page.locator('.dashpower_opers > a').first().click();
        // await page.getByRole('button', { name: 'Save' }).click();
        // await page.locator('a:nth-child(12)').click();
        console.log('✅ Map widget added!');

        // Card widget
        await page.getByRole('link', { name: ' Card' }).click();
        await page.locator('app-get-data-api div').filter({ hasText: /^empty$/ }).click();
        await page.getByPlaceholder('Search by name or type').fill('cust');
        await page.getByLabel('Customers').click();
        await page.getByRole('link', { name: ' Card General' }).click();
        await page.locator('div').filter({ hasText: /^DynamicSelect Columns None AggregatorCountFilter Column None Filter ValueHide$/ }).getByLabel('dropdown trigger').first().click();
        await page.getByLabel('customerName').click();
        await page.locator('div').filter({ hasText: /^AggregatorCount$/ }).getByLabel('dropdown trigger').click();
        await page.getByLabel('Count', { exact: true }).getByText('Count').click();
        await page.locator('.p-scrollpanel > div:nth-child(3)').click();
        await page.getByRole('link', { name: ' Title' }).click();
        await page.locator('div:nth-child(5) > .aiv_legendval_collapsediv > div > div > .p-inputtext').first().click();
        await page.locator('div:nth-child(5) > .aiv_legendval_collapsediv > div > div > .p-inputtext').first().fill('Total Customers');
        await page.locator('(//span[text()=" Bottom "])[1]').click();
        await page.getByLabel('common_top').click();
        await page.getByRole('button', { name: ' Publish' }).click();
        console.log('✅ Card widget added!')

        // Add filter and apply on country!
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
        await page.getByRole('textbox').nth(2).fill('country');
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
        // await page.getByLabel('Table Widget').getByText('Table Widget').click();
        // await page.locator('span').filter({ hasText: 'country' }).nth(3).click();
        // await page.locator('p-dropdown').filter({ hasText: 'Table Widget' }).getByLabel('dropdown trigger').click();
        // await page.getByLabel('Map Widget').getByText('Map Widget').click();
        // await page.locator('p-scrollpanel span').filter({ hasText: 'country' }).nth(2).click();
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

        // Embed the dashboard!
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('link', { name: '' }).click();
        await page.getByRole('textbox', { name: 'Search' }).fill('playautomation');
        const fileExists = await page.getByLabel('is template cell column header File Name')
            .getByText('playautomation')
            .isVisible();
        await page.getByLabel('is template cell column header File Name').getByText('playautomation').click({
            button: 'right'
        });
        await page.getByRole('menuitem', { name: ' Embed' }).click();
        await page.getByRole('button', { name: ' Generate' }).click();
        await page.getByRole('button', { name: '' }).nth(1).click();
        console.log('✅ Embedlink generated!');

        // Read text from clipboard
        const embedLink = await page.evaluate(() => navigator.clipboard.readText());
        console.log('Embed link copied:', embedLink);

        // Open a new tab properly
        const newTab = await page.context().newPage();
        await newTab.goto(embedLink, { waitUntil: 'load' }); // Waits for the page to fully load

        await page.waitForTimeout(9000);
    }

    // Create dashboard
    await page.locator('a').filter({ hasText: 'Create Dashboard' }).click();
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('playwright');
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('playautomation');
    await page.getByRole('button', { name: 'Create' }).click();
    await page.getByText('Redirecting to dashboard').click();
    await page.getByText('Your dashboard canvas looks').click();
    await page.getByRole('link', { name: '' }).click();
    console.log('✅ Adding dashboard!');

    // Create chart
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

    // Create table
    await page.getByRole('link', { name: ' Tables' }).click();
    await page.getByText('Table Widget').click();
    await page.locator('div').filter({ hasText: /^empty$/ }).click();
    await page.getByPlaceholder('Search by name or type').fill('customers');
    await page.getByLabel('Customers').getByText('Customers.cds').click();
    await page.getByRole('gridcell', { name: 'country' }).click();
    await page.getByRole('gridcell', { name: 'creditLimit' }).click();
    await page.getByRole('gridcell', { name: 'country' }).click();
    await page.getByRole('gridcell', { name: 'creditLimit' }).click();
    await page.getByRole('button', { name: ' Publish' }).click();
    // await page.locator('.dashpower_opers > a').first().click();
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.locator('a:nth-child(12)').click();
    console.log('✅ Table widget added!');

    // Create map
    await page.getByRole('link', { name: ' Maps' }).click();
    await page.getByText('Map Type:', { exact: true }).click();
    await page.locator('app-get-data-api div').filter({ hasText: /^empty$/ }).click();
    await page.getByPlaceholder('Search by name or type').fill('customers');
    await page.getByLabel('Customers').getByText('Customers.cds').click();
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByRole('textbox').nth(1).fill('country');
    await page.getByLabel('country').click();
    await page.locator('div').filter({ hasText: /^empty$/ }).click();
    await page.getByRole('textbox').nth(1).fill('creditlimit');
    await page.getByLabel('creditLimit').click();
    await page.getByText('Count', { exact: true }).click();
    await page.getByLabel('Sum').click();
    await page.getByRole('button', { name: ' Publish' }).click();
    // await page.locator('.dashpower_opers > a').first().click();
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.locator('a:nth-child(12)').click();
    console.log('✅ Map widget added!');

    // Card widget
    await page.getByRole('link', { name: ' Card' }).click();
    await page.locator('app-get-data-api div').filter({ hasText: /^empty$/ }).click();
    await page.getByPlaceholder('Search by name or type').fill('cust');
    await page.getByLabel('Customers').click();
    await page.getByRole('link', { name: ' Card General' }).click();
    await page.locator('div').filter({ hasText: /^DynamicSelect Columns None AggregatorCountFilter Column None Filter ValueHide$/ }).getByLabel('dropdown trigger').first().click();
    await page.getByLabel('customerName').click();
    await page.locator('div').filter({ hasText: /^AggregatorCount$/ }).getByLabel('dropdown trigger').click();
    await page.getByLabel('Count', { exact: true }).getByText('Count').click();
    await page.locator('.p-scrollpanel > div:nth-child(3)').click();
    await page.getByRole('link', { name: ' Title' }).click();
    await page.locator('div:nth-child(5) > .aiv_legendval_collapsediv > div > div > .p-inputtext').first().click();
    await page.locator('div:nth-child(5) > .aiv_legendval_collapsediv > div > div > .p-inputtext').first().fill('Total Customers');
    await page.locator('(//span[text()=" Bottom "])[1]').click();
    await page.getByLabel('common_top').click();
    await page.getByRole('button', { name: ' Publish' }).click();
    console.log('✅ Card widget added!')

    // Make layer on dashboard
    await page.locator('a:nth-child(8)').click();
    await page.getByRole('link', { name: ' Hide Layers and Tabs ' }).click();
    await page.getByText('Hide Layers', { exact: true }).click();
    await page.getByRole('button', { name: ' Save And Exit' }).click();
    await page.getByRole('link', { name: 'Layer 1' }).click();
    await page.getByRole('link', { name: 'Add New Layer' }).click();
    await page.getByRole('link', { name: 'Layer 1 ' }).click();
    await page.getByRole('link', { name: 'Layer2' }).click();
    await page.getByRole('link', { name: '' }).click();
    await page.getByRole('link', { name: ' Tables' }).click();
    await page.locator('div').filter({ hasText: /^empty$/ }).click();
    await page.getByLabel('Customers').getByText('Customers.cds').click();
    await page.getByRole('row', { name: 'Toggle Row Selection country' }).getByLabel('Toggle Row Selection').check();
    await page.getByRole('row', { name: 'Toggle Row Selection creditLimit' }).getByLabel('Toggle Row Selection').check();
    await page.locator('.ag-wrapper').first().click();
    await page.getByText('Events').click();
    await page.getByRole('button', { name: ' Publish' }).click();
    await page.getByRole('link', { name: 'layer2 ' }).click();
    await page.getByRole('link', { name: 'Layer 1' }).click();

    // Add filter and apply on country!
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
    await page.getByRole('textbox').nth(2).fill('country');
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

    // Embed the dashboard!
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('link', { name: '' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('playautomation');
    const fileExists = await page.getByLabel('is template cell column header File Name')
        .getByText('playautomation')
        .isVisible();
    await page.getByLabel('is template cell column header File Name').getByText('playautomation').click({
        button: 'right'
    });
    await page.getByRole('menuitem', { name: ' Embed' }).click();
    await page.getByRole('button', { name: ' Generate' }).click();
    await page.getByRole('button', { name: '' }).nth(1).click();
    console.log('✅ Embedlink generated!');

    // Read text from clipboard
    const embedLink = await page.evaluate(() => navigator.clipboard.readText());
    console.log('Embed link copied:', embedLink);

    // Open a new tab properly
    const newTab = await page.context().newPage();
    await newTab.goto(embedLink, { waitUntil: 'load' }); // Waits for the page to fully load

    await page.waitForTimeout(9000);

    // Validate the new tab opened correctly
    // console.log('Embed link opened in new tab:', await newTab.title());
    // expect(await newTab.url()).toBe(embedLink);
});
