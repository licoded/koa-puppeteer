import Router from 'koa-router';

export const createRouter = (prefix) => {
  return new Router({ prefix });
};

export const registerRouter = (app, routers) => {
  routers.forEach((router) => {
    app.use(router.routes()).use(router.allowedMethods());
  });
}