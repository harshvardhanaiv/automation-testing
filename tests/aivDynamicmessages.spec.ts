import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/aiv/');
  await page.getByRole('textbox', { name: 'Your email' }).click();
  await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Your email' }).fill('A');
  await page.getByRole('textbox', { name: 'Your email' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Your email' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Your email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('link', { name: ' Dynamic Message' }).click();
  await page.getByRole('row', { name: 'Select row is template cell column header RATING Welcome to Annotations' }).locator('span').first().click();
  await page.getByRole('row', { name: 'Select row  is template cell' }).getByLabel('is template cell column header').click({
    button: 'right'
  });
  await page.getByRole('menuitem', { name: ' Create Message' }).click();
  await page.getByText('Section').click();
  await page.getByRole('option', { name: 'label_cmn_section' }).click();
  await page.getByRole('listitem').filter({ hasText: 'DASHBOARD' }).locator('div').nth(2).click();
  await page.locator('p-checkbox').filter({ hasText: 'Active' }).locator('div').nth(2).click();
  await page.locator('div').filter({ hasText: /^Start Date$/ }).getByRole('button').click();
  await page.getByRole('cell', { name: '3', exact: true }).locator('span').click();
  await page.locator('div').filter({ hasText: /^End Date$/ }).getByRole('button').click();
  await page.getByText('14').click();
  await page.getByText('2Description').click();
  await page.locator('input[name="subject"]').click();
  await page.locator('input[name="subject"]').fill('pls give rating');
  await page.getByRole('paragraph').filter({ hasText: /^$/ }).click();
  await page.locator('quill-editor div').nth(2).fill('check your rating');
  await page.getByRole('button', { name: '' }).click();
  await page.locator('input[name="option1"]').click();
  await page.locator('input[name="option1"]').fill('good');
  await page.getByText('3Privilege').click();
  await page.locator('div').filter({ hasText: /^Users$/ }).locator('a').click();
  await page.getByRole('gridcell', { name: 'Select row' }).locator('span').first().click();
  await page.locator('div').filter({ hasText: /^Roles$/ }).locator('a').click();
  await page.getByRole('row', { name: 'Select row Administrator' }).locator('span').first().click();
  await page.getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByRole('option', { name: 'label_public' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('gridcell', { name: 'MESSAGE' }).click();
  await page.getByRole('row', { name: 'Select row  is template cell' }).getByLabel('is template cell column header').click({
    button: 'right'
  });
  await page.getByRole('menuitem', { name: ' Preview' }).click();
  await page.locator('p-radiobutton div').nth(2).click();
});