import Koa from 'koa';
import _ from 'lodash';
import defaultOptions from './options.js'
import { getPlugins } from './plugins/index.js';
import { createBrowser } from './utils/index.js';

class MyKoa extends Koa {
  constructor(options = {}) {
    super();
    this.options = _.merge(defaultOptions, options);
    if (this.options.debug) {
      this.options.launch.headless = false;
    }
    this.initPlugins(this.options.plugin);
    this.initBrowser(this.options.launch);
  }

  initPlugins(options) {
    getPlugins(options).forEach((plugin) => {
      this.use(plugin);
    })
  }

  async initBrowser(options) {
    this.browser = await createBrowser(options);
  }

  async closeBrowser() {
    await this.browser.close();
  }
}

export default MyKoa;