 import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const logSuccess = (message) => {
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] SUCCESS: ${message}`);
  };

  const logError = (message) => {
    const timestamp = new Date().toLocaleString();
    console.error(`[${timestamp}] ERROR: ${message}`);
  };

  await page.goto('http://localhost:8080/aiv/', { timeout: 30000 });
  logSuccess('Navigated to the AIV page.');

  await page.getByRole('textbox', { name: 'Your email' }).click({ timeout: 5000 });
  logSuccess('Clicked on the email textbox.');

  await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock', { timeout: 5000 });
  logSuccess('CapsLock key pressed.');

  await page.getByRole('textbox', { name: 'Your email' }).fill('A', { timeout: 5000 });
  logSuccess('Filled email textbox with "A".');

  await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock', { timeout: 5000 });
  logSuccess('CapsLock key pressed again.');

  await page.getByRole('textbox', { name: 'Your email' }).fill('Admin', { timeout: 5000 });
  logSuccess('Filled email textbox with "Admin".');

  await page.getByRole('textbox', { name: 'Your email' }).press('Tab', { timeout: 5000 });
  logSuccess('Pressed Tab key.');

  await page.getByRole('textbox', { name: 'Password' }).fill('password', { timeout: 5000 });
  logSuccess('Filled password textbox.');

  await page.getByRole('button', { name: 'Login' }).click({ timeout: 5000 });
  logSuccess('Clicked on Login button.');

  await page.getByRole('button', { name: '' }).click({ timeout: 5000 });
  logSuccess('Clicked on menu button.');

  await page.getByRole('button', { name: ' Administration ' }).click({ timeout: 5000 });
  logSuccess('Clicked on Administration menu.');

  await page.getByRole('link', { name: ' License' }).click({ timeout: 5000 });
  logSuccess('Clicked on License link.');

  await page.waitForSelector("span[translate='AIS_Version']", { timeout: 10000 });
  const aivVersionText = await page.locator("span[translate='AIS_Version']").textContent();

  if (aivVersionText) {
    const versionMatch = aivVersionText.match(/\d+\.\d+/);
    if (versionMatch) {
      const aivVersion = parseFloat(versionMatch[0]);
      if (aivVersion < 6.0) {
        logError('AIV Version is below 6.0. Please update the license on upgrading the version.');
        throw new Error('AIV Version check failed: Update required.');
      } else {
        logSuccess(`AIV Version ${aivVersion} is valid.`);
      }
    } else {
      logError('AIV Version number not found in the text content.');
      throw new Error('AIV Version check failed: Version number not found.');
    }
  } else {
    logError('Unable to determine AIV Version. Element text content is null or undefined.');
    throw new Error('AIV Version check failed: Version not found.');
  }

  // Use XPath to find and click the version
  await page.locator("//div[normalize-space()='6.0 (20240830)']").click({ timeout: 10000 });
  logSuccess('Clicked on version 20240830.');

  const page1Promise = page.waitForEvent('popup', { timeout: 15000 });
  logSuccess('Waiting for popup event.');

  await page.getByRole('link', { name: 'Request License' }).click({ timeout: 5000 });
  logSuccess('Clicked on Request License link.');

  const page1 = await page1Promise;
  logSuccess('Popup opened.');

  // Adding timeout to ensure the popup is loaded and ready
  await page1.waitForSelector('input[name="name"]', { timeout: 10000 });
  logSuccess('Textbox "Name" is visible in the popup.');

  const nameTextbox = page1.locator('input[name="name"]');
  await nameTextbox.scrollIntoViewIfNeeded({ timeout: 5000 });
  await nameTextbox.click({ timeout: 5000 });
  logSuccess('Clicked on Name textbox.');

  const productTextbox = page1.locator('input[name="product"]');
  await productTextbox.scrollIntoViewIfNeeded({ timeout: 5000 });
  await productTextbox.click({ timeout: 5000 });
  logSuccess('Clicked on Product textbox.');

  const roleTextbox = page1.locator('input[name="role"]');
  await roleTextbox.scrollIntoViewIfNeeded({ timeout: 5000 });
  await roleTextbox.click({ timeout: 5000 });
  logSuccess('Clicked on Role textbox.');

  const emailTextbox = page1.locator('input[name="email"]');
  await emailTextbox.scrollIntoViewIfNeeded({ timeout: 5000 });
  await emailTextbox.click({ timeout: 5000 });
  logSuccess('Clicked on Email textbox.');
});
