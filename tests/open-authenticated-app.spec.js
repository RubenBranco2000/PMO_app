const { test } = require('@playwright/test');

test('open authenticated app', async ({ page }) => {

  await page.goto('/');

  // esperar carregar
  await page.waitForLoadState('networkidle');

  // mostrar URL atual
  console.log(await page.url());

  // esperar 10 minutos sem fechar browser
  await page.waitForTimeout(600000);

});