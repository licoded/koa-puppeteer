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

export const forAsync = async (page, arr, func, ...params) => {
  for (let i = 0; i < arr.length; i++) {
    await func(page, arr[i], params);
  }
};