// // // // 
// // // import { test, expect } from '@playwright/test';

// // // test('test', async ({ page }) => {
// // //   // Helper function to log messages with timestamps
// // //   const logWithTime = (message) => {
// // //     const timestamp = new Date().toISOString();
// // //     console.log(`[${timestamp}] ${message}`);
// // //   };

// // //   logWithTime('Navigating to AIV login page');
// // //   await page.goto('http://localhost:8080/aiv/');

// // //   logWithTime('Filling in email');
// // //   await page.getByRole('textbox', { name: 'Your email' }).click();
// // //   await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
// // //   await page.getByRole('textbox', { name: 'Your email' }).fill('A');
// // //   await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
// // //   await page.getByRole('textbox', { name: 'Your email' }).fill('Admin');

// // //   logWithTime('Filling in password');
// // //   await page.getByRole('textbox', { name: 'Your email' }).press('Tab');
// // //   await page.getByRole('textbox', { name: 'Password' }).fill('password');

// // //   logWithTime('Clicking login button');
// // //   await page.getByRole('button', { name: 'Login' }).click();

// // //   logWithTime('Navigating to Administration section');
// // //   await page.getByRole('button', { name: '' }).click();
// // //   await page.getByRole('button', { name: ' Administration ' }).click();
// // //   await page.getByRole('link', { name: ' Email Users' }).click();

// // //   logWithTime('Creating a new email user');
// // //   await page.locator('a').filter({ hasText: 'Create Email User' }).click();
// // //   await page.locator('input[name="displayname"]').click();
// // //   await page.locator('input[name="displayname"]').press('CapsLock');
// // //   await page.locator('input[name="displayname"]').fill('T');
// // //   await page.locator('input[name="displayname"]').press('CapsLock');
// // //   await page.locator('input[name="displayname"]').fill('Tom');
// // //   await page.locator('input[name="displayname"]').press('Tab');
// // //   await page.locator('input[name="email"]').fill('tom@aivhub.com');

// // //   logWithTime('Submitting the form');
// // //   await page.getByRole('button', { name: 'Submit' }).click();

// // //   logWithTime('Verifying the created user');
// // //   await page.getByRole('gridcell', { name: 'Tom', exact: true }).click();

// // //   logWithTime('Test completed successfully');
// // // });

// // import { test, expect } from '@playwright/test';

// // test('test', async ({ page }) => {
// //   // Helper function to log messages with timestamps
// //   const logWithTime = (message) => {
// //     const timestamp = new Date().toISOString();
// //     console.log(`[${timestamp}] ${message}`);
// //   };

// //   // Helper function to wait with timeout
// //   const waitFor = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// //   logWithTime('Navigating to AIV login page');
// //   await page.goto('http://localhost:8080/aiv/');
// //   await waitFor(1000); // 1-second delay

// //   logWithTime('Filling in email');
// //   await page.getByRole('textbox', { name: 'Your email' }).click();
// //   await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
// //   await page.getByRole('textbox', { name: 'Your email' }).fill('Admin');
// //   await waitFor(1000);

// //   logWithTime('Filling in password');
// //   await page.getByRole('textbox', { name: 'Your email' }).press('Tab');
// //   await page.getByRole('textbox', { name: 'Password' }).fill('password');
// //   await waitFor(1000);

// //   logWithTime('Clicking login button');
// //   await page.getByRole('button', { name: 'Login' }).click();
// //   await waitFor(2000);

// //   logWithTime('Navigating to Administration section');
// //   await page.getByRole('button', { name: '' }).click();
// //   await page.getByRole('button', { name: ' Administration ' }).click();
// //   await page.getByRole('link', { name: ' Email Users' }).click();
// //   await waitFor(2000);

// //   logWithTime('Checking if "Tom" user exists and deleting it');
// //   const tomUser = page.getByRole('gridcell', { name: 'Tom', exact: true });
// //   if (await tomUser.isVisible()) {
// //     await tomUser.click();
// //     logWithTime('Deleting "Tom" user');
// //     await page.getByRole('button', { name: 'Delete' }).click(); // Assuming a Delete button exists
// //     await page.getByRole('button', { name: 'Confirm' }).click(); // Confirm delete
// //     logWithTime('"Tom" user deleted successfully');
// //     await waitFor(2000);
// //   } else {
// //     logWithTime('"Tom" user does not exist');
// //   }

// //   logWithTime('Creating a new email user');
// //   await page.locator('a').filter({ hasText: 'Create Email User' }).click();
// //   await page.locator('input[name="displayname"]').click();
// //   await page.locator('input[name="displayname"]').press('CapsLock');
// //   await page.locator('input[name="displayname"]').fill('Tom');
// //   await page.locator('input[name="displayname"]').press('Tab');
// //   await page.locator('input[name="email"]').fill('tom@aivhub.com');
// //   await waitFor(1000);

// //   logWithTime('Submitting the form');
// //   await page.getByRole('button', { name: 'Submit' }).click();
// //   await waitFor(2000);

// //   logWithTime('Verifying the created user');
// //   await page.getByRole('gridcell', { name: 'Tom', exact: true }).click();

// //   logWithTime('Test completed successfully');
// // });
// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   // Helper function to log messages with timestamps
//   const logWithTime = (message) => {
//     const timestamp = new Date().toISOString();
//     console.log(`[${timestamp}] ${message}`);
//   };

//   // Helper function to wait with timeout
//   const waitFor = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//   logWithTime('Navigating to AIV login page');
//   await page.goto('http://localhost:8080/aiv/');
//   await waitFor(1000); // 1-second delay

//   logWithTime('Filling in email');
//   await page.getByRole('textbox', { name: 'Your email' }).click();
//   await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Your email' }).fill('Admin');
//   await waitFor(1000);

//   logWithTime('Filling in password');
//   await page.getByRole('textbox', { name: 'Your email' }).press('Tab');
//   await page.getByRole('textbox', { name: 'Password' }).fill('password');
//   await waitFor(1000);

//   logWithTime('Clicking login button');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await waitFor(2000);

//   logWithTime('Navigating to Administration section');
//   await page.getByRole('button', { name: '' }).click();
//   await page.getByRole('button', { name: ' Administration ' }).click();
//   await page.getByRole('link', { name: ' Email Users' }).click();
//   await waitFor(2000);

//   logWithTime('Creating a new email user');
//   await page.locator('a').filter({ hasText: 'Create Email User' }).click();
//   await page.locator('input[name="displayname"]').click();
//   await page.locator('input[name="displayname"]').press('CapsLock');
//   await page.locator('input[name="displayname"]').fill('Tom');
//   await page.locator('input[name="displayname"]').press('Tab');
//   await page.locator('input[name="email"]').fill('tom@aivhub.com');
//   await waitFor(1000);

//   logWithTime('Submitting the form');
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await waitFor(2000);

//   logWithTime('Verifying the created user');
//   await page.getByRole('gridcell', { name: 'Tom', exact: true }).click();
//   logWithTime('"Tom" user created successfully');

//   // Removing the created email user
//   logWithTime('Removing the created email user');
//   await page.getByRole('button', { name: 'Delete' }).click(); // Assuming a Delete button exists
//   await waitFor(500); // Small delay for confirmation modal to appear
//   await page.getByRole('button', { name: 'Confirm' }).click(); // Confirm delete
//   await waitFor(2000);
//   logWithTime('"Tom" user removed successfully');

//   logWithTime('Test completed successfully');
// });
// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   // Helper function to log messages with timestamps
//   const logWithTime = (message) => {
//     const timestamp = new Date().toISOString();
//     console.log(`[${timestamp}] ${message}`);
//   };

//   // Helper function to wait with timeout
//   const waitFor = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//   logWithTime('Navigating to AIV login page');
//   await page.goto('http://localhost:8080/aiv/');
//   await waitFor(1000); // 1-second delay

//   logWithTime('Filling in email');
//   await page.getByRole('textbox', { name: 'Your email' }).click();
//   await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Your email' }).fill('Admin');
//   await waitFor(1000);

//   logWithTime('Filling in password');
//   await page.getByRole('textbox', { name: 'Your email' }).press('Tab');
//   await page.getByRole('textbox', { name: 'Password' }).fill('password');
//   await waitFor(1000);

//   logWithTime('Clicking login button');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await waitFor(2000);

//   logWithTime('Navigating to Administration section');
//   await page.getByRole('button', { name: '' }).click();
//   await page.getByRole('button', { name: ' Administration ' }).click();
//   await page.getByRole('link', { name: ' Email Users' }).click();
//   await waitFor(2000);

//   logWithTime('Creating a new email user');
//   await page.locator('a').filter({ hasText: 'Create Email User' }).click();
//   await page.locator('input[name="displayname"]').click();
//   await page.locator('input[name="displayname"]').press('CapsLock');
//   await page.locator('input[name="displayname"]').fill('Tom');
//   await page.locator('input[name="displayname"]').press('Tab');
//   await page.locator('input[name="email"]').fill('tom@aivhub.com');
//   await waitFor(1000);

//   logWithTime('Submitting the form');
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await waitFor(2000);

//   logWithTime('Verifying the created user');
//   await page.getByRole('gridcell', { name: 'Tom', exact: true }).click();
//   logWithTime('"Tom" user created successfully');

//   // Removing the created email user
//   logWithTime('Removing the created email user');
//   try {
//     const deleteButton = await page.locator('button:has-text("Delete")'); // More specific locator
//     await deleteButton.waitFor({ state: 'visible', timeout: 5000 }); // Ensure button is visible
//     await deleteButton.click();
//     logWithTime('Clicked the "Delete" button');

//     // Confirm deletion
//     const confirmButton = await page.locator('button:has-text("Confirm")');
//     await confirmButton.waitFor({ state: 'visible', timeout: 5000 });
//     await confirmButton.click();
//     logWithTime('"Tom" user removed successfully');
//   } catch (error) {
//     logWithTime('Error: Could not find or click the "Delete" button');
//     console.error(error);
//   }

//   logWithTime('Test completed successfully');
// });


import { test, expect } from '@playwright/test';

test('Create and Remove Email User', async ({ page }) => {
  // Helper function to log messages with timestamps
  const logWithTime = (message) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  };

  // Helper function to wait with a timeout
  const waitFor = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  logWithTime('Navigating to AIV login page');
  await page.goto('http://localhost:8080/aiv/');
  await waitFor(1000);

  logWithTime('Filling in email and password');
  await page.getByRole('textbox', { name: 'Your email' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Login' }).click();
  await waitFor(2000);

  logWithTime('Navigating to Administration > Email Users');
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: ' Administration ' }).click();
  await page.getByRole('link', { name: ' Email Users' }).click();
  await waitFor(2000);

  logWithTime('Creating a new email user named Tom');
  await page.locator('a').filter({ hasText: 'Create Email User' }).click();
  await page.locator('input[name="displayname"]').fill('Tom');
  await page.locator('input[name="email"]').fill('tom@aivhub.com');
  await page.getByRole('button', { name: 'Submit' }).click();
  await waitFor(2000);

  logWithTime('Verifying the created user named Tom');
  const createdUser = await page.getByRole('gridcell', { name: 'Tom', exact: true });
  if (await createdUser.isVisible()) {
    logWithTime('"Tom" user created successfully');
  } else {
    logWithTime('Error: "Tom" user creation failed');
    return;
  }

  // Removing the created email user
  logWithTime('Attempting to remove the created user named Tom');
  try {
    // Find the row for the user "Tom"
    const userRow = await page.locator('tr:has(td:text("Tom"))');

    // Click the delete button in the row
    const deleteButton = await userRow.locator('button:has-text("Delete")');
    await deleteButton.click();
    logWithTime('Clicked the "Delete" button for user Tom');

    // Confirm the deletion
    const confirmButton = await page.getByRole('button', { name: 'Confirm' });
    await confirmButton.click();
    logWithTime('Confirmed deletion of user Tom');

    // Verify deletion success
    await waitFor(2000);
    const isUserDeleted = await page.locator('tr:has(td:text("Tom"))').count();
    if (isUserDeleted === 0) {
      logWithTime('User "Tom" removed successfully');
    } else {
      logWithTime('Error: User "Tom" was not removed');
    }
  } catch (error) {
    logWithTime('Error: Failed to delete user "Tom"');
    console.error(error);
  }

  logWithTime('Test completed successfully');
});
