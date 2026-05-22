const { test } = require('@playwright/test');
const fs = require('fs');

test('discover application ui', async ({ page }) => {

  await page.goto('/');

  await page.waitForLoadState('networkidle');

  // extrair elementos principais
  const data = await page.evaluate(() => {

    const getText = (elements) =>
      [...elements]
        .map(el => el.innerText?.trim())
        .filter(Boolean);

    return {
      title: document.title,

      headings: getText(document.querySelectorAll('h1,h2,h3')),

      buttons: getText(document.querySelectorAll('button')),

      links: getText(document.querySelectorAll('a')),

      cards: getText(document.querySelectorAll('[class*=card]')),

      tables: [...document.querySelectorAll('table')].length,

      forms: [...document.querySelectorAll('form')].length,

      charts: [...document.querySelectorAll('canvas, svg')].length
    };
  });

  fs.mkdirSync('docs', { recursive: true });

  fs.writeFileSync(
    'docs/application-map.json',
    JSON.stringify(data, null, 2)
  );

  console.log(data);

  await page.pause();

});