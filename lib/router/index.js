const Router = require('koa-router');

const createRouter = (prefix) => {
  return new Router({ prefix });
};

const registerRouter = (app, routers) => {
  routers.forEach((router) => {
    app.use(router.routes()).use(router.allowedMethods());
  });
}

module.exports = {
  createRouter,
  registerRouter,
}