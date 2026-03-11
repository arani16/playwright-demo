import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { RandomText } from '../pages/randomText';
import { waitForNetwork } from '../utils/helpers';

test('verify the program is created by Playwright', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('demo+superuser@confia.io', 'P01ntCh4in!');
    await waitForNetwork(page);

    await page.getByRole('link', { name: 'Programs' }).click();
    await page.getByRole('button', { name: 'Add Program' }).click();
    await waitForNetwork(page);

    // Generate random test data
    const name = RandomText.randomProgramName();
    const description = RandomText.randomProgramDescription();

    // Fill the fields with random data
    await page.getByLabel('Program Name').fill(name);
    await page.getByLabel('Description').fill(description);

    await waitForNetwork(page);
    await page.getByText('Create Program').click();
    await waitForNetwork(page);
    await page.getByRole('link', { name: 'Dashboard' }).click();
});


test('verify client is created by Playwright', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Login again because each test runs fresh
    await loginPage.goto();
    await loginPage.login('demo+superuser@confia.io', 'P01ntCh4in!');
    await waitForNetwork(page);

    // Ensure dashboard is loaded
    await page.waitForSelector('text=Clients');

    await page.getByRole('link', { name: 'Clients' }).click();
    await page.getByRole('button', { name: 'New Corporate Client' }).click();

    const businessClient = RandomText.randomBusinessClient();
    const ein = RandomText.randomEin();

    await page.getByLabel('Legal Business Name').fill(businessClient);
    await page.getByLabel('EIN (numbers only)').fill(ein);
    await page.getByLabel('Phone Number').fill('7414569874');
    await page.getByLabel('Street Address').fill('7498 Right Flank Road');
    await page.getByLabel('City').fill('Mechanicsville');
    await page.getByLabel('State').fill('Virginia');
    await page.getByLabel('Zip Code').fill('23116-3834');

    await waitForNetwork(page);
    await page.getByText('Create Client').click();
});

