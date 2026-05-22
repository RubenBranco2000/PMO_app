// @ts-check

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'https://devfrontendstorage.z6.web.core.windows.net/',
    storageState: 'playwright/.auth/user.json',
    headless: false
  }
});
