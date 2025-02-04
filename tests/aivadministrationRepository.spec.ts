// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://marketplace.aivhub.com:8081/aiv/');
//    await page.getByPlaceholder('Your email').fill('Admin');
//    await page.getByPlaceholder('Password').fill('password');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.goto('https://marketplace.aivhub.com:8081/aiv/home');
//    await page.getByRole('button', { name: 'Administration' }).click();
//   await page.getByRole('link', { name: ' Users' }).click();
//   await page.getByRole('grid').locator('div').filter({ hasText: 'harshvardhanActive DemoActive' }).nth(1).click();
//   await page.locator('tr:nth-child(23) > td:nth-child(2) > .flex > .fa-light').click();
//   await page.getByRole('menuitem', { name: 'Edit User' }).click();
//   await page.getByText('Email Address').click();
//   await page.getByText('First Name').click();
//   await page.getByText('Last Name').click();
//   await page.locator('input[type="password"]').first().click();
//   await page.locator('input[type="password"]').first().fill('password');
//   await page.getByText('Confirm Password').click();
//   await page.locator('p-dropdown').filter({ hasText: 'Internal User' }).getByLabel('dropdown trigger').click();
//   await page.getByLabel('External User').click();
//   await page.locator('p-dropdown').filter({ hasText: 'External User' }).getByLabel('dropdown trigger').click();
//   await page.getByText('Internal User').click();
//   await page.getByText('Backup User').click();
//   await page.locator('#pr_id_4_label').click();
//   await page.locator('p-scrollpanel div').filter({ hasText: 'UsernameEmail AddressFirst' }).nth(2).click();
//   await page.locator('.p-inputswitch-slider').first().click();
//   await page.locator('#mat-mdc-dialog-0 span').filter({ hasText: 'Inactive' }).locator('span').click();
//   await page.locator('#mat-mdc-dialog-0').getByText('Active').first().click();
//   await page.locator('#mat-mdc-dialog-0').getByText('Active').nth(1).click();
//   await page.locator('label').filter({ hasText: 'Admin' }).click();
//   await page.locator('p-dropdown').filter({ hasText: 'Visualization/GridDashboard' }).getByLabel('dropdown trigger').click();
//   await page.getByLabel('mainHeader_Shared_Resources').click();
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.locator('input[type="password"]').nth(1).click();
//   await page.locator('input[type="password"]').nth(1).fill('password');
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.getByText('User Updated Successfully').click();
//   await page.getByRole('textbox', { name: 'Search' }).click();
//   await page.getByRole('textbox', { name: 'Search' }).fill('brij');
//   await page.getByRole('gridcell', { name: 'brijesh' }).click();
//   await page.getByRole('gridcell', { name: 'brijesh' }).click();
// });
import { test, expect } from '@playwright/test';

test.setTimeout(300000); // Extend the timeout to 10 seconds if needed

test('Login Test for AIVHUB', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://marketplace.aivhub.com:8081/aiv/');

    // Fill in the login credentials
    await page.locator('input[placeholder="Your email"]').fill('Admin');
    await page.locator('input[placeholder="Password"]').fill('password');

    // Click the login button and wait for navigation
    await Promise.all([
        page.locator('button[color="primary"]').click(),
        page.waitForNavigation({ waitUntil: 'networkidle' }) // Wait for network to stabilize
    ]);

    // Wait for the menu button to be visible and click it
    const menuButton = page.locator('.fa-regular.fa-bars.text-base');
    await menuButton.waitFor({ state: 'visible', timeout: 30000 }); // Adjust timeout if needed
    await menuButton.click();

    // Expand the panels and navigate to Repository
    const administrationButton = page.getByRole('button', { name: 'Administration' });
    await administrationButton.waitFor({ state: 'visible', timeout: 30000 });
    await administrationButton.click();

    const repositoryLink = page.getByRole('link', { name: 'Repository' });
    await repositoryLink.waitFor({ state: 'visible', timeout: 30000 });
    await repositoryLink.click();

    // Interact with dropdowns and elements
    await page.locator('#pr_id_1_label').click();
    await page.locator('p-dropdown').filter({ hasText: 'Admin' }).getByLabel('dropdown trigger').click();
    await page.getByText('REPORTS', { exact: true }).click();
    await page.locator('p-dropdown').filter({ hasText: 'REPORTS' }).getByLabel('dropdown trigger').click();
    await page.getByText('REPOSITORYAdminREPORTS Press').click();

    // Pause to inspect the results
    await page.pause();

    // Close the page
    await page.close();
});
