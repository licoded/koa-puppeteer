import Koa from 'koa';
import merge from 'lodash/merge.js';
import defaultOptions from './options.js'
import { getPlugins } from './plugins/index.js';
import { createBrowser } from './utils/index.js';
import { registerRouter } from './router/index.js';

class MyKoa extends Koa {
  constructor(options = {}) {
    super();
    this.options = merge(defaultOptions, options);
    if (this.options.debug) {
      this.options.launch.headless = false;
    }
    this.initPlugins(this.options.plugin);
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

export default MyKoa;