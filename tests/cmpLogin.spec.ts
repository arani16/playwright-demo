import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
    await page.goto('https://ecs1-compliance.pointchain.io/login');
    await page.getByText("Login").click();

    await page.fill('input[type="email"]', 'demo+superuser@confia.io');
    await page.locator('//mat-label[contains(text(),"Password")]'). fill('P01ntCh4in!');

    await page.getByRole("button",  {name: 'Login'}).click();

    await expect(page).toHaveURL(/dashboard/);

    await page.locator('//a[contains(text(),"Alerts")]').click();
    await page.waitForTimeout(2000);

    await page.getByRole('link', {name:"Programs"}).click();
    await page.getByRole('button', {name:"Add Program"}).click();
    await page.waitForTimeout(2000);

    await page.getByLabel('Program Name').fill('Pranky program');
    await page.getByLabel('Target of Program').click();
    await page.getByRole('option', {name:"Individual"}).click();
    await page.waitForTimeout(1000);

    await page.getByLabel("Line of Business").click();
    await page.getByRole('option', {name: "Fintech"}).click();
    await page.waitForTimeout(1000);

    await page.getByLabel("Country").click();
    await page.getByRole('option', {name: "Albania"}).click();
    await page.waitForTimeout(1000);

    await page.getByLabel("Description").fill("Frequent just testing");
    await page.waitForTimeout(1000);

    await page.getByRole('button', {name: "Create Program"}).click();
    await page.waitForTimeout(1000);

    await page.getByText("Programs").click();
    await page.waitForTimeout(1000);

    await page.locator('//a[contains(text(),"Pranky program")]/ancestor::tr//i[@title="Delete Program"]').click();
    await page.waitForTimeout(1000);



});
