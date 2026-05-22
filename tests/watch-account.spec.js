const { test, expect } = require('@playwright/test');

test('watch IPDJ account and validate watched section', async ({ page }) => {

  // abrir app já autenticada
  await page.goto('/');

  // esperar dashboard
  await page.waitForLoadState('networkidle');

  // navegar para Accounts
  await page.getByRole('link', { name: 'Accounts' }).click();
    await page.waitForURL('**/accounts');

  // esperar tabela/accounts
  await page.waitForLoadState('networkidle');

  // procurar card da IPDJ
    const ipdjCard = page.locator('div').filter({
    has: page.getByText('IPDJ')
    }).first();

    await expect(ipdjCard).toBeVisible({
    timeout: 15000
    });

// clicar WATCH dentro do card
    await page.getByRole('button', { name: 'WATCH' }).nth(0).click();

  // voltar ao dashboard
  await page.getByText('Dashboard').click();

  await page.waitForLoadState('networkidle');

  // validar watched accounts
  await expect(page.getByText('IPDJ')).toBeVisible({
    timeout: 15000
  });

});