
const { test, expect } = require('@playwright/test');

test('watch IPDJ account and validate watched section', async ({ page }) => {

  await page.goto('/');

  await page.waitForLoadState('networkidle');

  await page.getByRole('link', { name: 'Accounts' }).click();
  await page.waitForURL('**/accounts');

  await page.waitForLoadState('networkidle');

  // ✅ localizar card IPDJ corretamente (sem ambiguidade)
  const ipdjCard = page.locator('.account-card').filter({
    has: page.getByText('IPDJ')
  });

  await expect(ipdjCard).toBeVisible({ timeout: 15000 });

  // ✅ garantir que tem botão WATCH dentro
  const watchButton = ipdjCard.getByRole('button', { name: 'WATCH' });

  await expect(watchButton).toBeVisible();

  // ✅ localizar contador correto
  const watchedCard = page.locator('button.stat-card.watched');
  const watchedValue = watchedCard.locator('h3');

  const before = parseInt(await watchedValue.innerText());

  // ✅ click REAL no botão certo
  await watchButton.click();

  // ✅ esperar atualização do contador
  await expect(async () => {
    const value = parseInt(await watchedValue.innerText());
    expect(value).toBe(before + 1);
  }).toPass({ timeout: 7000 });

});