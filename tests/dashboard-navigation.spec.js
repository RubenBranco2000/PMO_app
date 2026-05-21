const { test, expect } = require('@playwright/test');

test.describe('Dashboard Navigation', () => {
  const navOptions = [
    { name: 'Dashboard', url: '/' },
    { name: 'Accounts', url: '/accounts' },
    { name: 'Reports', url: '/reports' },
    { name: 'Settings', url: '/settings' },
  ];

  test('should display all main navbar options', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation');
    for (const option of navOptions) {
      await expect(nav.getByRole('link', { name: option.name })).toBeVisible();
    }
  });

  for (const option of navOptions) {
    test(`should navigate to ${option.name} page`, async ({ page }) => {
      await page.goto('/');
      await page.getByRole('navigation').getByRole('link', { name: option.name }).click();
      // Optionally, check the URL or a heading on the page
      await expect(page).toHaveURL(new RegExp(option.url.replace('/', '\/?') + '$'));
      await expect(page.locator('h1')).toContainText(option.name);
    });
  }
});