const { test, expect } = require('@playwright/test');

test.setTimeout(300000);

test('authenticate', async ({ page }) => {

  await page.goto('https://devfrontendstorage.z6.web.core.windows.net/');

  // Login manual + MFA

  await expect(
    page.getByRole('heading', { name: 'PMO Metrics Management' })
  ).toBeVisible({ timeout: 300000 });

  await page.context().storageState({
    path: 'playwright/.auth/user.json'
  });

});