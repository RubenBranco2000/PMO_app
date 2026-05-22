const { test } = require('@playwright/test');

test('mcp authenticated session', async ({ page }) => {

  await page.goto('/');

  await page.waitForLoadState('networkidle');

  console.log('AUTHENTICATED:', await page.url());

  // manter sessão viva
  await page.pause();

});