# Usages

## new MyKoa(options)

> Import Path: `@licoded/koa-puppeteer/lib/index.js`

- `options` <[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>
  * `port` <?[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)> The port number the server is listening on. Defaults to `3000`.
  * `debug` <?[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)> Whether to display the browser graphical interface. Defaults to `false`, which means this browser run in the background.
  * `launch` <?[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>The options passed to [puppeteer.launch](https://pptr.dev/#?product=Puppeteer&version=v13.0.0&show=api-puppeteerlaunchoptions) function
    - `userDataDir` <?[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)> Path to a [User Data Directory](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/user_data_dir.md). **It is strongly recommended to turn on this setting to avoid the trouble of logging in every time the server is restarted**. And you need to be aware that logging in by scanning the QR code may not be saved. Default to `undefined`, which means not save userData.
    - ...
  * `routers` <?[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[Router](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/koa__router/index.d.ts)>> Routing array. Default to empty Array `[]`, which means you will get a server that returns 404 no matter how you request it.

- returns: <[MyKoa](https://github.com/licoded/koa-puppeteer/blob/master/lib/MyKoa.js)>

## Router

> Import Path: `@licoded/koa-puppeteer/lib/router/index.js`

### createRouter(prefix)

- parameters
  * prefix <[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)>

- returns <[Router](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/koa__router/index.d.ts)>

> Return a route prefixed with `prefix`.

### registerRouter(app, routers)

- parameters
  * app <[MyKoa](https://github.com/licoded/koa-puppeteer/blob/master/lib/MyKoa.js)>
  * routers <[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[Router](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/koa__router/index.d.ts)>>

- no returns

> Register `routers` on `app`.

## Some tools function

> Import Path: `@licoded/koa-puppeteer/lib/utils/index.js`

### getPage()

> Get a new page manually.

- returns: <[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[page](https://pptr.dev/#?product=Puppeteer&version=v13.0.0&show=api-class-page)>>

```js
const page = await getPage();
```

### run(func, ...params)

> Execute function `func`.

> Note that the first parameter of function `func` is [`page`](https://pptr.dev/#?product=Puppeteer&version=v13.0.0&show=api-class-page), and the following parameters are the parameters trans to `run` after `params`.

- returns: <[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<result>>, `result = await func(...params)`

```js
const result = await run(async (page, url) => {
  await page.goto(url); // url is 'https://www.baidu.com'
}, 'https://www.baidu.com')
```

### sleep(time, data)

> A await function, which will ruturn data after `time`

```js
await page.goto('https://www.baidu.com');
await sleep(1000); // wait for the page to fully load
```

## Q&A

### How to parse params from request

```js
const router = createRouter('/test');

router.get('/test', (ctx) => {
  ctx.body = 'hello';
});
```


