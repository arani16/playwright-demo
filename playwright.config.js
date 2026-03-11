/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: 'tests',
  timeout: 30000,

  // 💡 FIX: Explicitly specify the 'html' reporter to generate the report files.
  reporter: 'html',

  use: {
    headless: true,

    // ✅ Capture screenshots for passed + failed tests
    screenshot: 'on',

    // ✅ Capture video only for failed tests
    video: 'retain-on-failure',

    // ✅ Keep trace on first retry
    trace: 'on-first-retry',
  },
};

module.exports = config;