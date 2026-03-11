import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage.js';

setDefaultTimeout(60 * 1000);

let browser;
let context;
let page;
let loginPage;

Given('the user launches the application', async function () {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();

  loginPage = new LoginPage(page);
  await loginPage.goto();
});

When('the user logs in with valid credentials', async function () {
  await loginPage.login('demo+cmp_manager@confia.io', 'P01ntCh4in!');
});

Then('the user should see the dashboard', async function () {
  await expect(page).toHaveURL(/.*dashboard/);
  await expect(page.getByRole('link', { name: 'Alerts' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Task List' })).toBeVisible();

  await browser.close();
});
