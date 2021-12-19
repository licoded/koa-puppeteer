const { MyKoa } = require('../lib');
const routers = require('./controller');

new MyKoa({
  port: 3000,
  debug: false,
  launch: {
    userDataDir: '/Users/lic/dev/products/my-koa-cli/workspace',
  },
  routers,
}).run();
