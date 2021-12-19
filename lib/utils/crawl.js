import puppeteer from 'puppeteer'

let browser;

export const createBrowser = async (options) => {
  browser = await puppeteer.launch(options);
  return browser;
};

export const getPage = () => {
  return new Promise(async resolve => {
    await browser.newPage().then(page => {
      resolve(page);
    });
  });
};

export const run = async (func, ...params) => {
  const page = await getPage();
  const res = await func(page, ...params);
  await page.close();
  return res;
};