const { test } = require('@playwright/test');

test.setTimeout(600000);

test('authenticate', async ({ page }) => {

  await page.goto('https://devfrontendstorage.z6.web.core.windows.net/');

  // LOGIN MANUAL + MFA

  await page.waitForTimeout(60000);

  await page.context().storageState({
    path: 'playwright/.auth/user.json'
  });

});