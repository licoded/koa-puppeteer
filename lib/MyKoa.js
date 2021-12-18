import Koa from 'koa';
import _ from 'lodash';
import defaultOptions from './options.js'
import { getPlugins } from './plugins/index.js';


class MyKoa extends Koa {
  constructor(options = {}) {
    super();
    const mergedOptions = _.merge(defaultOptions, options);
    this.initPlugins(mergedOptions.plugin);
  }

  initPlugins(options) {
    getPlugins(options).forEach((plugin) => {
      this.use(plugin);
    })
  }
}

export default MyKoa;