// // // import { test, expect } from '@playwright/test';

// // // test('test', async ({ page }) => {
// // //   console.log('Navigating to the login page...');
// // //   await page.goto('http://localhost:8080/aiv/');

// // //   console.log('Filling in the email and password...');
// // //   await page.getByRole('textbox', { name: 'Your email' }).click();
// // //   await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
// // //   await page.getByRole('textbox', { name: 'Your email' }).fill('A');
// // //   await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
// // //   await page.getByRole('textbox', { name: 'Your email' }).fill('Admin');
// // //   await page.getByRole('textbox', { name: 'Password' }).click();
// // //   await page.getByRole('textbox', { name: 'Password' }).fill('password');

// // //   console.log('Clicking the Login button...');
// // //   await page.getByRole('button', { name: 'Login' }).click();

// // //   console.log('Waiting for the homepage to load...');
// // //   await new Promise((resolve) => setTimeout(resolve, 2000));

// // //   console.log('Navigating to the Administration section...');
// // //   await page.getByRole('button', { name: '' }).click();
// // //   await page.getByRole('button', { name: ' Administration ' }).click();
// // //   await page.getByRole('link', { name: ' Users' }).click();

// // //   console.log('Waiting for the Users page to load...');
// // //   await new Promise((resolve) => setTimeout(resolve, 2000));

// // //   console.log('Opening the Create User modal...');
// // //   await page.locator('a').filter({ hasText: 'Create User' }).click();

// // //   console.log('Waiting for the Create User modal to load...');
// // //   await new Promise((resolve) => setTimeout(resolve, 2000));

// // //   console.log('Filling in user details...');
// // //   await page.locator('.flex > .p-inputtext').first().click();
// // //   await page.locator('.flex > .p-inputtext').first().press('CapsLock');
// // //   await page.locator('.flex > .p-inputtext').first().fill('D');
// // //   await page.locator('.flex > .p-inputtext').first().press('CapsLock');
// // //   await page.locator('.flex > .p-inputtext').first().fill('Demo1');
// // //   await page.locator('.flex > .p-inputtext').first().press('Tab');
// // //   await page.locator('div:nth-child(2) > .flex > .p-inputtext').fill('demo1@aivhub.com');
// // //   await page.locator('div:nth-child(2) > .flex > .p-inputtext').press('Tab');
// // //   await page.locator('div:nth-child(3) > .flex > .p-inputtext').press('CapsLock');
// // //   await page.locator('div:nth-child(3) > .flex > .p-inputtext').fill('D');
// // //   await page.locator('div:nth-child(3) > .flex > .p-inputtext').press('CapsLock');
// // //   await page.locator('div:nth-child(3) > .flex > .p-inputtext').fill('Demo1');
// // //   await page.locator('div:nth-child(3) > .flex > .p-inputtext').press('Tab');
// // //   await page.locator('div:nth-child(4) > .flex > .p-inputtext').fill('aiv');
// // //   await page.locator('div:nth-child(4) > .flex > .p-inputtext').press('Tab');
// // //   await page.locator('input[type="password"]').first().fill('password');
// // //   await page.locator('input[type="password"]').first().press('Tab');
// // //   await page.locator('input[type="password"]').nth(1).fill('password');
// // //   await page.locator('input[type="password"]').nth(1).press('Tab');

// // //   console.log('Selecting user role as Internal User...');
// // //   await page.locator('p-dropdown').filter({ hasText: 'Internal User' }).getByLabel('dropdown trigger').click();
// // //   await page.getByRole('option', { name: 'Internal User' }).click();

// // //   console.log('Adding optional details...');
// // //   await new Promise((resolve) => setTimeout(resolve, 1000));
// // //   await page.locator('#mat-mdc-dialog-0 div').filter({ hasText: /^empty$/ }).first().click();
// // //   await page.getByLabel('Admin', { exact: true }).getByText('Admin').click();
// // //   await page.locator('#mat-mdc-dialog-0 span').filter({ hasText: 'Inactive' }).locator('span').click();
// // //   await page.locator('p-dropdown').filter({ hasText: 'Request/Alerts' }).getByLabel('dropdown trigger').click();
// // //   await page.getByRole('option', { name: 'mainHeader_Dashboard' }).click();

// // //   console.log('Submitting the Create User form...');
// // //   await page.getByRole('button', { name: 'Submit' }).click();

// // //   console.log('Waiting for success message...');
// // //   let successMessageVisible = false;
// // //   for (let i = 0; i < 6; i++) {
// // //     if (await page.isVisible('text=User Created Successfully')) {
// // //       successMessageVisible = true;
// // //       console.log('User Created Successfully message appeared.');
// // //       break;
// // //     }
// // //     console.log(`Retrying... (${i + 1}/6)`);
// // //     await new Promise((resolve) => setTimeout(resolve, 5000)); // Retry every 5 seconds
// // //   }
// // //   if (!successMessageVisible) {
// // //     throw new Error('Success message did not appear after 30 seconds.');
// // //   }
// // //   await page.locator('tr:nth-child(2) > td > .e-checkbox-wrapper > .e-frame').click();
// // //   await page.locator('tr:nth-child(2) > td:nth-child(2) > .flex > .fa-light').click();
// // //   await page.getByRole('menuitem', { name: ' Assign Roles to Users' }).click();
// // //   await page.getByText('Administrator').click();
// // //   await page.getByRole('button', { name: 'Submit' }).click();
// // //   await page.locator('tr:nth-child(2) > td:nth-child(2) > .flex > .fa-light').click();
// // //   await page.getByRole('menuitem', { name: ' Delete' }).click();
// // //   await page.locator('#mat-mdc-checkbox-1').getByText('Demo').click();
// // //   await page.getByRole('checkbox', { name: 'Demo' }).check();

// // //   try {
// // //     // Wait for the Delete button to be visible and enabled
// // //     await page.getByRole('button', { name: 'Delete' }).waitFor({ state: 'visible', timeout: 5000 });

// // //     // Attempt the click
// // //     await page.getByRole('button', { name: 'Delete' }).click();
// // //     console.log('Successfully clicked the Delete button.');
// // //   } catch (error) {
// // //     if (error.name === 'TimeoutError') {
// // //       console.error('Timeout: The Delete button did not become clickable within 5 seconds.');
// // //     } else {
// // //       console.error('An unexpected error occurred:', error);
// // //     }
// // //   }
// // // });
// // import { test, expect } from '@playwright/test';

// // test('test', async ({ page }) => {
// //   // Increase the timeout for the entire test to 60 seconds (60000ms)
// //   test.setTimeout(60000);

// //   console.log('Navigating to the login page...');
// //   await page.goto('http://localhost:8080/aiv/');

// //   console.log('Filling in the email and password...');
// //   await page.getByRole('textbox', { name: 'Your email' }).click();
// //   await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
// //   await page.getByRole('textbox', { name: 'Your email' }).fill('A');
// //   await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
// //   await page.getByRole('textbox', { name: 'Your email' }).fill('Admin');
// //   await page.getByRole('textbox', { name: 'Password' }).click();
// //   await page.getByRole('textbox', { name: 'Password' }).fill('password');

// //   console.log('Clicking the Login button...');
// //   await page.getByRole('button', { name: 'Login' }).click();

// //   console.log('Waiting for the homepage to load...');
// //   await new Promise((resolve) => setTimeout(resolve, 2000));

// //   console.log('Navigating to the Administration section...');
// //   await page.getByRole('button', { name: '' }).click();
// //   await page.getByRole('button', { name: ' Administration ' }).click();
// //   await page.getByRole('link', { name: ' Users' }).click();

// //   console.log('Waiting for the Users page to load...');
// //   await new Promise((resolve) => setTimeout(resolve, 2000));

// //   console.log('Opening the Create User modal...');
// //   await page.locator('a').filter({ hasText: 'Create User' }).click();

// //   console.log('Waiting for the Create User modal to load...');
// //   await new Promise((resolve) => setTimeout(resolve, 2000));

// //   console.log('Filling in user details...');
// //   await page.locator('.flex > .p-inputtext').first().click();
// //   await page.locator('.flex > .p-inputtext').first().press('CapsLock');
// //   await page.locator('.flex > .p-inputtext').first().fill('D');
// //   await page.locator('.flex > .p-inputtext').first().press('CapsLock');
// //   await page.locator('.flex > .p-inputtext').first().fill('Demo1');
// //   await page.locator('.flex > .p-inputtext').first().press('Tab');
// //   await page.locator('div:nth-child(2) > .flex > .p-inputtext').fill('demo1@aivhub.com');
// //   await page.locator('div:nth-child(2) > .flex > .p-inputtext').press('Tab');
// //   await page.locator('div:nth-child(3) > .flex > .p-inputtext').press('CapsLock');
// //   await page.locator('div:nth-child(3) > .flex > .p-inputtext').fill('D');
// //   await page.locator('div:nth-child(3) > .flex > .p-inputtext').press('CapsLock');
// //   await page.locator('div:nth-child(3) > .flex > .p-inputtext').fill('Demo1');
// //   await page.locator('div:nth-child(3) > .flex > .p-inputtext').press('Tab');
// //   await page.locator('div:nth-child(4) > .flex > .p-inputtext').fill('aiv');
// //   await page.locator('div:nth-child(4) > .flex > .p-inputtext').press('Tab');
// //   await page.locator('input[type="password"]').first().fill('password');
// //   await page.locator('input[type="password"]').first().press('Tab');
// //   await page.locator('input[type="password"]').nth(1).fill('password');
// //   await page.locator('input[type="password"]').nth(1).press('Tab');

// //   console.log('Selecting user role as Internal User...');
// //   await page.locator('p-dropdown').filter({ hasText: 'Internal User' }).getByLabel('dropdown trigger').click();
// //   await page.getByRole('option', { name: 'Internal User' }).click();

// //   console.log('Adding optional details...');
// //   await new Promise((resolve) => setTimeout(resolve, 1000));
// //   await page.locator('#mat-mdc-dialog-0 div').filter({ hasText: /^empty$/ }).first().click();
// //   await page.getByLabel('Admin', { exact: true }).getByText('Admin').click();
// //   await page.locator('#mat-mdc-dialog-0 span').filter({ hasText: 'Inactive' }).locator('span').click();
// //   await page.locator('p-dropdown').filter({ hasText: 'Request/Alerts' }).getByLabel('dropdown trigger').click();
// //   await page.getByRole('option', { name: 'mainHeader_Dashboard' }).click();

// //   console.log('Submitting the Create User form...');
// //   await page.getByRole('button', { name: 'Submit' }).click();

// //   console.log('Waiting for success message...');
// //   let successMessageVisible = false;
// //   for (let i = 0; i < 10; i++) { // Increased retries to 10
// //     if (await page.isVisible('text=User Created Successfully')) {
// //       successMessageVisible = true;
// //       console.log('User Created Successfully message appeared.');
// //       break;
// //     }
// //     console.log(`Retrying... (${i + 1}/10)`);
// //     await new Promise((resolve) => setTimeout(resolve, 10000)); // Increased retry interval to 10 seconds
// //   }

// //   if (!successMessageVisible) {
// //     throw new Error('Success message did not appear after 100 seconds.');
// //   }

// //   await page.locator('tr:nth-child(2) > td > .e-checkbox-wrapper > .e-frame').click();
// //   await page.locator('tr:nth-child(2) > td:nth-child(2) > .flex > .fa-light').click();
// //   await page.getByRole('menuitem', { name: ' Assign Roles to Users' }).click();
// //   await page.getByText('Administrator').click();
// //   await page.getByRole('button', { name: 'Submit' }).click();
// //   await page.locator('tr:nth-child(2) > td:nth-child(2) > .flex > .fa-light').click();
// //   await page.getByRole('menuitem', { name: ' Delete' }).click();
// //   await page.locator('#mat-mdc-checkbox-1').getByText('Demo').click();
// //   await page.getByRole('checkbox', { name: 'Demo' }).check();

// //   try {
// //     // Wait for the Delete button to be visible and enabled
// //     await page.getByRole('button', { name: 'Delete' }).waitFor({ state: 'visible', timeout: 5000 });

// //     // Attempt the click
// //     await page.getByRole('button', { name: 'Delete' }).click();
// //     console.log('Successfully clicked the Delete button.');
// //   } catch (error) {
// //     if (error.name === 'TimeoutError') {
// //       console.error('Timeout: The Delete button did not become clickable within 5 seconds.');
// //     } else {
// //       console.error('An unexpected error occurred:', error);
// //     }
// //   }
// // });
// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   // Increase the timeout for the entire test to 60 seconds (60000ms)
//   test.setTimeout(60000);

//   console.log('Navigating to the login page...');
//   await page.goto('http://localhost:8080/aiv/');

//   console.log('Filling in the email and password...');
//   await page.getByRole('textbox', { name: 'Your email' }).click();
//   await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Your email' }).fill('A');
//   await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Your email' }).fill('Admin');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('password');

//   console.log('Clicking the Login button...');
//   await page.getByRole('button', { name: 'Login' }).click();

//   console.log('Waiting for the homepage to load...');
//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   console.log('Navigating to the Administration section...');
//   await page.getByRole('button', { name: '' }).click();
//   await page.getByRole('button', { name: ' Administration ' }).click();
//   await page.getByRole('link', { name: ' Users' }).click();

//   console.log('Waiting for the Users page to load...');
//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   console.log('Opening the Create User modal...');
//   await page.locator('a').filter({ hasText: 'Create User' }).click();

//   console.log('Waiting for the Create User modal to load...');
//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   console.log('Filling in user details...');
//   await page.locator('.flex > .p-inputtext').first().click();
//   await page.locator('.flex > .p-inputtext').first().press('CapsLock');
//   await page.locator('.flex > .p-inputtext').first().fill('D');
//   await page.locator('.flex > .p-inputtext').first().press('CapsLock');
//   await page.locator('.flex > .p-inputtext').first().fill('Demo1');
//   await page.locator('.flex > .p-inputtext').first().press('Tab');
//   await page.locator('div:nth-child(2) > .flex > .p-inputtext').fill('demo1@aivhub.com');
//   await page.locator('div:nth-child(2) > .flex > .p-inputtext').press('Tab');
//   await page.locator('div:nth-child(3) > .flex > .p-inputtext').press('CapsLock');
//   await page.locator('div:nth-child(3) > .flex > .p-inputtext').fill('D');
//   await page.locator('div:nth-child(3) > .flex > .p-inputtext').press('CapsLock');
//   await page.locator('div:nth-child(3) > .flex > .p-inputtext').fill('Demo1');
//   await page.locator('div:nth-child(3) > .flex > .p-inputtext').press('Tab');
//   await page.locator('div:nth-child(4) > .flex > .p-inputtext').fill('aiv');
//   await page.locator('div:nth-child(4) > .flex > .p-inputtext').press('Tab');
//   await page.locator('input[type="password"]').first().fill('password');
//   await page.locator('input[type="password"]').first().press('Tab');
//   await page.locator('input[type="password"]').nth(1).fill('password');
//   await page.locator('input[type="password"]').nth(1).press('Tab');

//   console.log('Selecting user role as Internal User...');
//   await page.locator('p-dropdown').filter({ hasText: 'Internal User' }).getByLabel('dropdown trigger').click();
//   await page.getByRole('option', { name: 'Internal User' }).click();

//   console.log('Adding optional details...');
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   await page.locator('#mat-mdc-dialog-0 div').filter({ hasText: /^empty$/ }).first().click();
//   await page.getByLabel('Admin', { exact: true }).getByText('Admin').click();
//   await page.locator('#mat-mdc-dialog-0 span').filter({ hasText: 'Inactive' }).locator('span').click();
//   await page.locator('p-dropdown').filter({ hasText: 'Request/Alerts' }).getByLabel('dropdown trigger').click();
//   await page.getByRole('option', { name: 'mainHeader_Dashboard' }).click();

//   console.log('Submitting the Create User form...');
//   await page.getByRole('button', { name: 'Submit' }).click();

//   console.log('Waiting for success message...');
//   let successMessageVisible = false;
//   try {
//     // Using waitForSelector with timeout instead of isVisible to handle potential page closure issues
//     await page.waitForSelector('text=User Created Successfully', { timeout: 10000 });
//     successMessageVisible = true;
//     console.log('User Created Successfully message appeared.');
//   } catch (error) {
//     console.log('Retrying...');
//   }

//   if (!successMessageVisible) {
//     throw new Error('Success message did not appear after retry.');
//   }

//   await page.locator('tr:nth-child(2) > td > .e-checkbox-wrapper > .e-frame').click();
//   await page.locator('tr:nth-child(2) > td:nth-child(2) > .flex > .fa-light').click();
//   await page.getByRole('menuitem', { name: ' Assign Roles to Users' }).click();
//   await page.getByText('Administrator').click();
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.locator('tr:nth-child(2) > td:nth-child(2) > .flex > .fa-light').click();
//   await page.getByRole('menuitem', { name: ' Delete' }).click();
//   await page.locator('#mat-mdc-checkbox-1').getByText('Demo').click();
//   await page.getByRole('checkbox', { name: 'Demo' }).check();

//   try {
//     // Wait for the Delete button to be visible and enabled
//     await page.getByRole('button', { name: 'Delete' }).waitFor({ state: 'visible', timeout: 5000 });

//     // Attempt the click
//     await page.getByRole('button', { name: 'Delete' }).click();
//     console.log('Successfully clicked the Delete button.');
//   } catch (error) {
//     if (error.name === 'TimeoutError') {
//       console.error('Timeout: The Delete button did not become clickable within 5 seconds.');
//     } else {
//       console.error('An unexpected error occurred:', error);
//     }
//   }
// });
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Increase the timeout for the entire test to 60 seconds (60000ms)
  test.setTimeout(60000);

  console.log('Navigating to the login page...');
  await page.goto('http://localhost:8080/aiv/');

  console.log('Filling in the email and password...');
  await page.getByRole('textbox', { name: 'Your email' }).click();
  await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Your email' }).fill('A');
  await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Your email' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');

  console.log('Clicking the Login button...');
  await page.getByRole('button', { name: 'Login' }).click();

  console.log('Waiting for the homepage to load...');
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log('Navigating to the Administration section...');
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: ' Administration ' }).click();
  await page.getByRole('link', { name: ' Users' }).click();

  console.log('Waiting for the Users page to load...');
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log('Opening the Create User modal...');
  await page.locator('a').filter({ hasText: 'Create User' }).click();

  console.log('Waiting for the Create User modal to load...');
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log('Filling in user details...');
  await page.locator('.flex > .p-inputtext').first().click();
  await page.locator('.flex > .p-inputtext').first().press('CapsLock');
  await page.locator('.flex > .p-inputtext').first().fill('D');
  await page.locator('.flex > .p-inputtext').first().press('CapsLock');
  await page.locator('.flex > .p-inputtext').first().fill('Demo1');
  await page.locator('.flex > .p-inputtext').first().press('Tab');
  await page.locator('div:nth-child(2) > .flex > .p-inputtext').fill('demo1@aivhub.com');
  await page.locator('div:nth-child(2) > .flex > .p-inputtext').press('Tab');
  await page.locator('div:nth-child(3) > .flex > .p-inputtext').press('CapsLock');
  await page.locator('div:nth-child(3) > .flex > .p-inputtext').fill('D');
  await page.locator('div:nth-child(3) > .flex > .p-inputtext').press('CapsLock');
  await page.locator('div:nth-child(3) > .flex > .p-inputtext').fill('Demo1');
  await page.locator('div:nth-child(3) > .flex > .p-inputtext').press('Tab');
  await page.locator('div:nth-child(4) > .flex > .p-inputtext').fill('aiv');
  await page.locator('div:nth-child(4) > .flex > .p-inputtext').press('Tab');
  await page.locator('input[type="password"]').first().fill('password');
  await page.locator('input[type="password"]').first().press('Tab');
  await page.locator('input[type="password"]').nth(1).fill('password');
  await page.locator('input[type="password"]').nth(1).press('Tab');

  console.log('Selecting user role as Internal User...');
  await page.locator('p-dropdown').filter({ hasText: 'Internal User' }).getByLabel('dropdown trigger').click();
  await page.getByRole('option', { name: 'Internal User' }).click();

  console.log('Adding optional details...');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await page.locator('#mat-mdc-dialog-0 div').filter({ hasText: /^empty$/ }).first().click();
  await page.getByLabel('Admin', { exact: true }).getByText('Admin').click();
  await page.locator('#mat-mdc-dialog-0 span').filter({ hasText: 'Inactive' }).locator('span').click();
  await page.locator('p-dropdown').filter({ hasText: 'Request/Alerts' }).getByLabel('dropdown trigger').click();
  await page.getByRole('option', { name: 'mainHeader_Dashboard' }).click();

  console.log('Submitting the Create User form...');
  await page.getByRole('button', { name: 'Submit' }).click();

  console.log('Waiting for success message...');
  let successMessageVisible = false;

  try {
    // Use waitForSelector for waiting until success message appears or times out after 10 seconds
    await page.waitForSelector('text=User Created Successfully', { timeout: 10000 });
    successMessageVisible = true;
    console.log('User Created Successfully message appeared.');
  } catch (error) {
    console.error('Error or Timeout: Success message not found within the given time.', error);
  }

  if (!successMessageVisible) {
    console.error('User creation failed, success message did not appear.');
    return; // Early exit to prevent further actions when user creation is not successful
  }

  await page.locator('tr:nth-child(2) > td > .e-checkbox-wrapper > .e-frame').click();
  await page.locator('tr:nth-child(2) > td:nth-child(2) > .flex > .fa-light').click();
  await page.getByRole('menuitem', { name: ' Assign Roles to Users' }).click();
  await page.getByText('Administrator').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('tr:nth-child(2) > td:nth-child(2) > .flex > .fa-light').click();
  await page.getByRole('menuitem', { name: ' Delete' }).click();
  await page.locator('#mat-mdc-checkbox-1').getByText('Demo').click();
  await page.getByRole('checkbox', { name: 'Demo' }).check();

  try {
    // Wait for the Delete button to be visible and enabled
    await page.getByRole('button', { name: 'Delete' }).waitFor({ state: 'visible', timeout: 5000 });

    // Attempt the click
    await page.getByRole('button', { name: 'Delete' }).click();
    console.log('Successfully clicked the Delete button.');
  } catch (error) {
    if (error.name === 'TimeoutError') {
      console.error('Timeout: The Delete button did not become clickable within 5 seconds.');
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }
});
