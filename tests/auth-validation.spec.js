const { test, expect } = require('@playwright/test');

test('validate authenticated session', async ({ page }) => {

  await page.goto('/');

  await expect(page.locator('text=Dashboard')).toBeVisible({
    timeout: 15000
  });

});