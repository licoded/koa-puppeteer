const Koa = require('koa');
const merge = require('lodash/merge');
const defaultOptions = require('./options');
const { getPlugins } = require('./plugins');
const { createBrowser } = require('./utils');
const { registerRouter } = require('./router');

class MyKoa extends Koa {
  constructor(options = {}) {
    super();
    this.options = merge(defaultOptions, options);
    if (this.options.debug) {
      this.options.launch.headless = false;
    }
    this.initPlugins(this.options.plugin);
    this.initPlugins(this.options.middlewares);
    this.initBrowser(this.options.launch);
    this.initRouters(this.options.routers);
  }

  initPlugins(options) {
    getPlugins(options).forEach((plugin) => {
      this.use(plugin);
    })
  }

  async initBrowser(options) {
    this.browser = await createBrowser(options);
  }

  async initRouters(routers) {
    registerRouter(this, routers);
  }

  async closeBrowser() {
    await this.browser.close();
  }

  run(port = this.options.port, cb) {
    const defaultCallbackFunc = () => {
      console.log(`server listening on port ${port}`);
    };
    const server = this.listen(port, cb || defaultCallbackFunc);
    return server;
  }
}

module.exports = MyKoa;