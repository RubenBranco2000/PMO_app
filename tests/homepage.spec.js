const { test, expect } = require('@playwright/test');

test('homepage loads', async ({ page }) => {

  await page.goto('https://devfrontendstorage.z6.web.core.windows.net/');

  await expect(page).toHaveURL(/.*login.*/);

  await expect(page.locator('text=Sign in')).toBeVisible();

});