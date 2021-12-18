import Router from 'koa-router';

export const createRouter = (CONTROLLER_PREFIX) => {
  return new Router({ prefix: CONTROLLER_PREFIX });
};

export const registerRouter = (app, routers) => {
  routers.forEach((router) => {
    app.use(router.routes()).use(router.allowedMethods());
  });
}