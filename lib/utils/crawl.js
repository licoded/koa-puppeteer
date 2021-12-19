const puppeteer = require('puppeteer');

let browser;

const createBrowser = async (options) => {
  browser = await puppeteer.launch(options);
  return browser;
};

const getPage = () => {
  return new Promise(async resolve => {
    await browser.newPage().then(page => {
      resolve(page);
    });
  });
};

const run = async (func, ...params) => {
  const page = await getPage();
  const res = await func(page, ...params);
  await page.close();
  return res;
};

module.exports = {
  createBrowser,
  getPage,
  run,
}