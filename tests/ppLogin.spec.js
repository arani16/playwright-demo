import { test, expect } from '@playwright/test';

test('homepage testing', async ({ page }) => {
  await page.goto('https://qa-ecs.pointchain.io');
});