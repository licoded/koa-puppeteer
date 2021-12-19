const {
  createBrowser,
  getPage,
  run,
} = require('./crawl');
const sleep = require('./sleep');
const autoRequire = require('./auto-require');

module.exports = {
  createBrowser,
  getPage,
  run,
  sleep,
  autoRequire,
}