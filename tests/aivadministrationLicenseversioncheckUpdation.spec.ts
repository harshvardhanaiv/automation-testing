import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Set a higher timeout for the test (e.g., 60 seconds)
  test.setTimeout(60000);

  try {
    // Navigate to the page with an increased timeout
    await page.goto('http://localhost:8080/aiv/', { timeout: 20000 });
    console.log("Navigation to the AIV page was successful.");

    // Fill in the email field
    await page.getByRole('textbox', { name: 'Your email' }).click({ timeout: 5000 });
    await page.getByRole('textbox', { name: 'Your email' }).fill('Admin', { timeout: 5000 });
    console.log("Filled 'Your email' with 'Admin'.");

    // Fill in the password and login
    await page.getByRole('textbox', { name: 'Password' }).fill('password', { timeout: 5000 });
    await page.getByRole('button', { name: 'Login' }).click({ timeout: 5000 });
    console.log("Login was successful.");

    // Open Administration menu
    await page.getByRole('button', { name: '' }).click({ timeout: 5000 });
    await page.getByRole('button', { name: ' Administration ' }).click({ timeout: 5000 });
    await page.getByRole('link', { name: ' License' }).click({ timeout: 5000 });
    console.log("Navigated to the License page.");

    // Interact with License page elements
    await page.getByText('license', { exact: true, timeout: 5000 }).click();
    await page.getByText('AIV Version', { timeout: 5000 }).click();
    await page.getByText('(20240830)', { timeout: 5000 }).click();
    console.log("Selected the specific version (20240830).");

    // Wait for "Days Left" section
    const daysLeftLocator = page.locator('text=30').nth(1);
    await daysLeftLocator.waitFor({ state: 'visible', timeout: 15000 });

    // Retrieve and parse the "Days Left" value
    const daysLeftText = await daysLeftLocator.evaluate((node) => node.textContent.trim());
    const daysLeft = parseInt(daysLeftText, 10);
    console.log(`Retrieved 'Days Left': ${daysLeft}`);

    // Handle "Days Left" logic
    if (daysLeft === 0) {
      console.log("Days Left is 0. License needs to be updated.");

      // Highlight "Request License" button
      await page.evaluate(() => {
        const requestButton = document.querySelector('a[role="link"][name="Request License"]');
        if (requestButton) {
          requestButton.style.border = "2px solid red";
          requestButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });

      console.log("Highlighted the 'Request License' button.");
      await page.waitForTimeout(1000);

      // Click the "Request License" button
      const page1Promise = page.waitForEvent('popup', { timeout: 10000 });
      const requestButton = page.locator('role=link[name="Request License"]');
      if (await requestButton.count() > 0) {
        await requestButton.click();
        const popupPage = await page1Promise;
        await popupPage.waitForLoadState('domcontentloaded', { timeout: 10000 });
        console.log("Request License popup successfully opened.");
      } else {
        console.error("Request License button not found.");
      }
    } else {
      console.log(`Days Left: ${daysLeft}. No license update required.`);
    }
  } catch (error) {
    console.error("An error occurred during the test execution:", error);
  }
});
