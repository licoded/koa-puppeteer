const requireDirectory = require('require-directory');

const autoRequire = (m) => Object.values(requireDirectory(m) || {}).map((item) => (item.index || item));

module.exports = autoRequire;