import { MyKoa } from '../lib/index.js';
import routers from './controller/index.js';

new MyKoa({
  port: 3000,
  debug: false,
  launch: {
    userDataDir: '/Users/lic/dev/products/my-koa-cli/workspace',
  },
  routers,
}).run();
