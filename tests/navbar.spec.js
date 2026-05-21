const { test, expect } = require('@playwright/test');

test('navigation bar displays options', async ({ page }) => {
  await page.goto('/');

  // Replace these with the actual visible text of your navigation options
  const navOptions = [
    'Dashboard',
    'Accounts',
    'Reports',
    'Settings',
  ];

  for (const option of navOptions) {
    await expect(page.getByRole('navigation')).toContainText(option);
  }
});
