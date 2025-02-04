import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the page
  await page.goto('http://localhost:8080/aiv/', { timeout: 10000 });
  console.log("Navigation to the AIV page was successful.");

  // Fill in the email field
  await page.getByRole('textbox', { name: 'Your email' }).click();
  await page.waitForTimeout(500); // Small wait after clicking
  console.log("Clicked on the 'Your email' textbox.");
  await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
  await page.waitForTimeout(500); // Wait after CapsLock to ensure key action is processed
  console.log("CapsLock key was pressed.");
  await page.getByRole('textbox', { name: 'Your email' }).fill('A');
  await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
  await page.waitForTimeout(500); // Wait to avoid overlapping actions
  console.log("Filled 'Your email' with 'Admin'.");
  await page.getByRole('textbox', { name: 'Your email' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Your email' }).press('Tab');
  await page.waitForTimeout(500);
  console.log("Moved to the password field.");

  // Fill in the password and click login
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.waitForTimeout(500);
  console.log("Filled in the password field.");
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(2000); // Wait for the page to load after login
  console.log("Login was successful.");

  // Interact with the administration menu
  await page.getByRole('button', { name: '' }).click();
  await page.waitForTimeout(1000);
  console.log("Opened the main menu.");
  await page.getByRole('button', { name: ' Administration ' }).click();
  await page.waitForTimeout(1000);
  console.log("Opened the Administration menu.");
  await page.getByRole('link', { name: ' License' }).click();
  await page.waitForTimeout(2000); // Wait for the License page to load
  console.log("Navigated to the License page.");

  // Interact with elements on the License page
  await page.getByText('license', { exact: true }).click();
  await page.waitForTimeout(500);
  console.log("Clicked on 'license'.");
  await page.getByText('AIV Version').click();
  await page.waitForTimeout(500);
  console.log("Selected 'AIV Version'.");
  await page.getByText('(20240830)').click();
  await page.waitForTimeout(500);
  console.log("Selected the specific version (20240830).");

  // Check "Days Left" and handle the condition
  await page.getByText('Days Left').click();
  await page.waitForTimeout(500);
  console.log("Accessed the 'Days Left' section.");

  // Retrieve the text for "Days Left"
  const daysLeftLocator = page.locator('text=Days Left').locator('..').locator('text');
  const daysLeftCount = await daysLeftLocator.count();

  if (daysLeftCount === 0) {
    console.error("Days Left value not found.");
    return;
  }

  const daysLeftText = await daysLeftLocator.first().textContent();
  if (!daysLeftText) {
    console.error("Failed to retrieve 'Days Left' text.");
    return;
  }

  const daysLeft = parseInt(daysLeftText.trim(), 10);
  console.log(`Retrieved 'Days Left': ${daysLeft}`);

  // Check if "Days Left" is 0
  if (daysLeft === 0) {
    console.log("Days Left is 0. License needs to be updated.");

    // Highlight the "Request License" button for visual feedback
    await page.evaluate(() => {
      const requestButton = document.querySelector('a[role="link"][name="Request License"]');
      if (requestButton) {
        requestButton.style.border = "2px solid red"; // Add a red border to highlight
        requestButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });

    // Wait briefly to show the highlight effect
    await page.waitForTimeout(1000);
    console.log("Highlighted the 'Request License' button.");

    // Click the "Request License" button
    const page1Promise = page.waitForEvent('popup');
    const requestButton = await page.locator('role=link[name="Request License"]');
    if (await requestButton.count() > 0) {
      await requestButton.click();
      const page1 = await page1Promise;
      await page1.waitForLoadState('domcontentloaded', { timeout: 10000 }); // Ensure the popup loads
      console.log("Request License popup successfully opened.");
    } else {
      console.error("Request License button not found.");
    }
  } else {
    console.log(`Days Left: ${daysLeft}. No license update required.`);
  }
});
