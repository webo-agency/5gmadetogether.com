const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    devtools: true,
    slowMo: 5000
  });

  const page = await browser.newPage();
  Object.assign(global, { browser, page });

  await page.goto("http://localhost:3000");
  await browser.close();
})();
