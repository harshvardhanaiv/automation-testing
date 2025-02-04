// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('http://localhost:8080/aiv/');
//   await page.getByRole('textbox', { name: 'Your email' }).click();
//   await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Your email' }).fill('A');
//   await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Your email' }).fill('Admin');
//   await page.getByRole('textbox', { name: 'Your email' }).press('Tab');
//   await page.getByRole('textbox', { name: 'Password' }).fill('password');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('button', { name: '' }).click();
//   await page.getByRole('button', { name: ' Administration ' }).click();
//   await page.getByRole('link', { name: ' AIV Configuration' }).click();
//   const downloadPromise = page.waitForEvent('download');
//   await page.getByRole('link', { name: '' }).first().click();
//   const download = await downloadPromise;
//   await page.getByText('Lazy Load Hard Limit Base').click();
//   await page.getByRole('link', { name: '' }).click();
//   await page.locator('.p-inputtext').first().click();
//   await page.locator('.p-inputtext').first().fill('200');
//   await page.waitForSelector('#email div', { state: 'attached' }); // Ensure the element exists
//   const elementsCount = await page.locator('#email div').count();
//   console.log(`Found ${elementsCount} div elements under #email`);
  
//   if (elementsCount > 3) {
//     await page.locator('#email div').nth(3).click();
//   } else {
//     throw new Error('Insufficient div elements under #email to perform nth(3) click');
//   }
  
  
// });

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  console.log(`[${new Date().toLocaleTimeString()}] Test started`);
  
  await page.goto('http://localhost:8080/aiv/');
  console.log(`[${new Date().toLocaleTimeString()}] Navigated to AIV homepage`);

  await page.getByRole('textbox', { name: 'Your email' }).click();
  console.log(`[${new Date().toLocaleTimeString()}] Clicked on 'Your email' textbox`);

  await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
  console.log(`[${new Date().toLocaleTimeString()}] CapsLock pressed`);

  await page.getByRole('textbox', { name: 'Your email' }).fill('A');
  console.log(`[${new Date().toLocaleTimeString()}] Filled 'A' in the email textbox`);

  await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
  console.log(`[${new Date().toLocaleTimeString()}] CapsLock pressed again`);

  await page.getByRole('textbox', { name: 'Your email' }).fill('Admin');
  console.log(`[${new Date().toLocaleTimeString()}] Filled 'Admin' in the email textbox`);

  await page.getByRole('textbox', { name: 'Your email' }).press('Tab');
  console.log(`[${new Date().toLocaleTimeString()}] Tab key pressed`);

  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  console.log(`[${new Date().toLocaleTimeString()}] Filled password`);

  await page.getByRole('button', { name: 'Login' }).click();
  console.log(`[${new Date().toLocaleTimeString()}] Clicked on 'Login' button`);

  await page.getByRole('button', { name: '' }).click();
  console.log(`[${new Date().toLocaleTimeString()}] Clicked on the hamburger menu`);

  await page.getByRole('button', { name: ' Administration ' }).click();
  console.log(`[${new Date().toLocaleTimeString()}] Opened Administration menu`);

  await page.getByRole('link', { name: ' AIV Configuration' }).click();
  console.log(`[${new Date().toLocaleTimeString()}] Navigated to AIV Configuration`);

  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: '' }).first().click();
  const download = await downloadPromise;
  console.log(`[${new Date().toLocaleTimeString()}] Download started`);

  await page.getByText('Lazy Load Hard Limit Base').click();
  console.log(`[${new Date().toLocaleTimeString()}] Clicked on 'Lazy Load Hard Limit Base'`);

  await page.getByRole('link', { name: '' }).click();
  console.log(`[${new Date().toLocaleTimeString()}] Clicked on '' link`);

  await page.locator('.p-inputtext').first().click();
  console.log(`[${new Date().toLocaleTimeString()}] Clicked on input field`);

  await page.locator('.p-inputtext').first().fill('200');
  console.log(`[${new Date().toLocaleTimeString()}] Filled '200' in the input field`);

  await page.waitForSelector('#email div', { state: 'attached' });
  console.log(`[${new Date().toLocaleTimeString()}] Waiting for element under #email div`);

  const elementsCount = await page.locator('#email div').count();
  console.log(`[${new Date().toLocaleTimeString()}] Found ${elementsCount} div elements under #email`);

  if (elementsCount > 3) {
    await page.locator('#email div').nth(3).click();
    console.log(`[${new Date().toLocaleTimeString()}] Successfully clicked on 4th div element under #email`);
  } else {
    throw new Error(`[${new Date().toLocaleTimeString()}] Insufficient div elements under #email to perform nth(3) click`);
  }

  console.log(`[${new Date().toLocaleTimeString()}] Test completed successfully`);
});
