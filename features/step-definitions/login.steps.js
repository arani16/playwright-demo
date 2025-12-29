import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage.js';

setDefaultTimeout(60 * 1000);

let browser;
let context;
let page;
let loginPage;

Given('I open the login page', async function () {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();

  loginPage = new LoginPage(page);
  await loginPage.goto();
});

When('I enter username and password', async function () {
  await loginPage.login('demo+cmp_manager@confia.io', 'P01ntCh4in!');
});

And('I click login button', async function () {
  await page.getByRole('button', { name: 'Login' }).click();
});

Then('I should see the dashboard', async function () {
  await expect(page).toHaveURL(/.*dashboard/);
  await expect(page.getByRole('link', { name: 'Alerts' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Task List' })).toBeVisible();

  await browser.close();
});
