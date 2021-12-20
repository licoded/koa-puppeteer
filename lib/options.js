module.exports = {
  port: 3000,
  debug: false,
  // 默认插件支持
  plugin: {
    logger: true,
    cors: true,
    bodyParser: true,
  },
  launch: {
    "headless": true,
    "defaultViewport": null,
    "args": [
      "--start-maximized"
    ],
    // userDataDir 设置工作目录，重启复用登录信息
  },
  routers: [],
  contexts: {},
  middlewares: [],
}