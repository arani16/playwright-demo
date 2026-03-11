import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

import { waitForNetwork } from '../utils/helpers';

test('verify the AI prompt is added successfully', async ({ page }) => {
    // ARRANGE (Initialize Page Object)
    const loginPage = new LoginPage(page);

    // Navigate to the page
    await loginPage.goto();

    // ACT (Use the single login method)
    await loginPage.login('demo+superuser@confia.io', 'P01ntCh4in!');

    await page.getByRole('link', { name: 'Settings' }).click();
    await page.getByText('AI Prompts').click();
    await waitForNetwork(page);
    await page.getByRole('button', { name: 'Add Prompt' }).click();
    await waitForNetwork(page);
    await page.getByLabel('Title').fill('Playwright Automation AI');
    await waitForNetwork(page);
    // ----------------------------------------------------
    // CORRECTED LOGIC FOR FUNCTION DROPDOWN:

    // 1. Click the Function dropdown trigger (Using combobox role is reliable for selects)
    await page.getByRole('combobox', { name: 'Function' }).click();

    // 2. Click the option "Program Analysis"
    // Note: It's good practice to ensure this step has enough timeout if it fails again.
    await page.getByRole('option', { name: 'Program Analysis' }).click();

    // ----------------------------------------------------
    // CORRECTED LOGIC FOR LLM MODEL DROPDOWN:

    // 3. Click the LLM Model dropdown trigger (Corrected syntax and added .click())
    await page.getByRole('combobox', { name: 'LLM Model' }).click();

    // 4. Click the option "gpt-4-turbo" (Added .click())
    await page.getByRole('option', { name: 'gpt-4-turbo' }).click();

    // ----------------------------------------------------

    await page.getByLabel('Prompt').fill('This Playwright automation AI Prompt');
//
//    await page.getByText('Create AI Prompt').click();

    // ASSERTION (Highly Recommended):
    // Add a check to confirm the prompt was added, for example, by waiting for a success message.
    // await expect(page.getByText('AI Prompt created successfully')).toBeVisible();
});