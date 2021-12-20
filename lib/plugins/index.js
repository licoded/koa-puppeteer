const logger = require('./logger');
const cors = require('./cors');
const bodyParser = require('./bodyParser');

const pluginMap = {
  logger,
  cors,
  bodyParser,
};

const getPlugins = (options) => {
  const plugins = [];
  if (!options) return plugins;
  Object.keys(options).forEach((key) => {
    if (pluginMap[key]) plugins.push(pluginMap[key]);
  });
  return plugins;
}

module.exports = {
  getPlugins,
}