const { test, expect } = require('@playwright/test');

test.use({ storageState: 'playwright/.auth/user.json' });

test.describe('Dashboard Validation', () => {
  test('should display dashboard page', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Dashboard');
  });

  test('should display all navigation menu options', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation');
    const navOptions = ['Dashboard', 'Accounts', 'Reports', 'Settings'];
    for (const option of navOptions) {
      await expect(nav.getByRole('link', { name: option })).toBeVisible();
    }
  });

  test('should display all KPI cards', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('dashboard-loader')).not.toBeVisible();
    const kpiCards = [
      'kpi-card-revenue',
      'kpi-card-accounts',
      'kpi-card-growth',
      'kpi-card-activity'
    ];
    for (const card of kpiCards) {
      await expect(page.getByTestId(card)).toBeVisible();
    }
  });

  test('should complete loading before showing data', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('dashboard-loader')).not.toBeVisible();
    await expect(page.getByTestId('kpi-card-revenue')).toBeVisible();
  });

  test('should filter accounts correctly', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('dashboard-loader')).not.toBeVisible();
    const filter = page.getByRole('combobox', { name: /account filter/i });
    await expect(filter).toBeVisible();
    await filter.selectOption({ index: 1 });
    await expect(page.getByTestId('dashboard-loader')).not.toBeVisible();
    // Optionally, validate filtered results
  });
});
