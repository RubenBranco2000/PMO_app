const { test, expect } = require('@playwright/test');

test.use({ storageState: 'playwright/.auth/user.json' });

test.describe('Dashboard Smoke Test', () => {
  test('should load dashboard and show main sections', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Dashboard/ })).toBeVisible();
    await expect(page.getByRole('navigation')).toBeVisible();
    await expect(page.getByText(/\d+\s*Accounts/)).toBeVisible();
    await expect(page.getByText(/\d+\s*Initiatives/)).toBeVisible();
    await expect(page.getByText(/\d+\s*Open risks/)).toBeVisible();
    await expect(page.getByText(/\d+\s*Open issues/)).toBeVisible();
  });

  test('should show navigation links', async ({ page }) => {
    await page.goto('/');
    for (const name of ['Dashboard', 'Accounts', 'Reports', 'Settings']) {
      await expect(page.getByRole('link', { name })).toBeVisible();
    }
  });

  test('should show dashboard buttons', async ({ page }) => {
    await page.goto('/');
    for (const name of ['All', 'Avg', 'Detail']) {
      await expect(page.getByRole('button', { name })).toBeVisible();
    }
    await expect(page.getByRole('button', { name: /Watched/ })).toBeVisible();
  });

  test('should show at least one table and chart', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('table')).toBeVisible();
    // If test ids for charts exist, prefer getByTestId('chart-container')
    // Otherwise, use heading or region selectors
    await expect(
      page.getByRole('heading', { name: /Risk trends|Portfolio Overview|Satisfaction & Quality|CSS|ESS/ })
    ).toBeVisible();
  });
});
