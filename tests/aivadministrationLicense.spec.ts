import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const logSuccess = (message) => {
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] SUCCESS: ${message}`);
  };

  await page.goto('http://localhost:8080/aiv/');
  logSuccess('Navigated to the AIV page.');

  await page.getByRole('textbox', { name: 'Your email' }).click();
  logSuccess('Clicked on the email textbox.');

  await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
  logSuccess('CapsLock key pressed.');

  await page.getByRole('textbox', { name: 'Your email' }).fill('A');
  logSuccess('Filled email textbox with "A".');

  await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
  logSuccess('CapsLock key pressed again.');

  await page.getByRole('textbox', { name: 'Your email' }).fill('Admin');
  logSuccess('Filled email textbox with "Admin".');

  await page.getByRole('textbox', { name: 'Your email' }).press('Tab');
  logSuccess('Pressed Tab key.');

  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  logSuccess('Filled password textbox.');

  await page.getByRole('button', { name: 'Login' }).click();
  logSuccess('Clicked on Login button.');

  await page.getByRole('button', { name: '' }).click();
  logSuccess('Clicked on menu button.');

  await page.getByRole('button', { name: ' Administration ' }).click();
  logSuccess('Clicked on Administration menu.');

  await page.getByRole('link', { name: ' License' }).click();
  logSuccess('Clicked on License link.');

  await page.getByText('AIV Version').click();
  logSuccess('Clicked on AIV Version.');

  await page.getByText('(20240830)').click();
  logSuccess('Clicked on version 20240830.');

  const page1Promise = page.waitForEvent('popup');
  logSuccess('Waiting for popup event.');

  await page.getByRole('link', { name: 'Request License' }).click();
  logSuccess('Clicked on Request License link.');

  const page1 = await page1Promise;
  logSuccess('Popup opened.');

  // Ensure that the popup is loaded and ready before interacting with it
  await page1.waitForSelector('role=textbox[name="Name"]');
  logSuccess('Textbox "Name" is visible in the popup.');


});
// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   const logSuccess = (message) => {
//     const timestamp = new Date().toLocaleString();
//     console.log(`[${timestamp}] SUCCESS: ${message}`);
//   };

//   const logError = (message) => {
//     const timestamp = new Date().toLocaleString();
//     console.error(`[${timestamp}] ERROR: ${message}`);
//   };

//   await page.goto('http://localhost:8080/aiv/');
//   logSuccess('Navigated to the AIV page.');

//   await page.getByRole('textbox', { name: 'Your email' }).click();
//   logSuccess('Clicked on the email textbox.');

//   await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
//   logSuccess('CapsLock key pressed.');

//   await page.getByRole('textbox', { name: 'Your email' }).fill('A');
//   logSuccess('Filled email textbox with "A".');

//   await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
//   logSuccess('CapsLock key pressed again.');

//   await page.getByRole('textbox', { name: 'Your email' }).fill('Admin');
//   logSuccess('Filled email textbox with "Admin".');

//   await page.getByRole('textbox', { name: 'Your email' }).press('Tab');
//   logSuccess('Pressed Tab key.');

//   await page.getByRole('textbox', { name: 'Password' }).fill('password');
//   logSuccess('Filled password textbox.');

//   await page.getByRole('button', { name: 'Login' }).click();
//   logSuccess('Clicked on Login button.');

//   await page.getByRole('button', { name: '' }).click();
//   logSuccess('Clicked on menu button.');

//   await page.getByRole('button', { name: ' Administration ' }).click();
//   logSuccess('Clicked on Administration menu.');

//   await page.getByRole('link', { name: ' License' }).click();
//   logSuccess('Clicked on License link.');

//   const aivVersionText = await page.locator('text=AIV Version').textContent();
//   const versionMatch = aivVersionText.match(/\d+\.\d+/); // Extract version number

//   if (versionMatch) {
//     const aivVersion = parseFloat(versionMatch[0]);

//     if (aivVersion < 6.0) {
//       logError('AIV Version is below 6.0. Please update the license on upgrading the version.');
//       throw new Error('AIV Version check failed: Update required.');
//     } else {
//       logSuccess(`AIV Version ${aivVersion} is valid.`);
//     }
//   } else {
//     logError('Unable to determine AIV Version.');
//     throw new Error('AIV Version check failed: Version not found.');
//   }

//   await page.getByText('(20240830)').click();
//   logSuccess('Clicked on version 20240830.');

//   const page1Promise = page.waitForEvent('popup');
//   logSuccess('Waiting for popup event.');

//   await page.getByRole('link', { name: 'Request License' }).click();
//   logSuccess('Clicked on Request License link.');

//   const page1 = await page1Promise;
//   logSuccess('Popup opened.');

//   // Ensure that the popup is loaded and ready before interacting with it
//   await page1.waitForSelector('role=textbox[name="Name"]');
//   logSuccess('Textbox "Name" is visible in the popup.');

// });
