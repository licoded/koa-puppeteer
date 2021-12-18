import logger from './logger.js';
import cors from './cors.js';

const pluginMap = {
  logger,
  cors,
};

export const getPlugins = (options) => {
  const plugins = [];
  if (!options) return plugins;
  Object.keys(options).forEach((key) => {
    if (pluginMap[key]) plugins.push(pluginMap[key]);
  });
  return plugins;
}