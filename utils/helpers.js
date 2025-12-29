export async function waitForNetwork(page) {
  await page.waitForLoadState('networkidle');
}
