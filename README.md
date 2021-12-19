# koa-puppeteer
A tool library based on koa and puppeteer, which can speed up your development.

## Document

Click [here](./docs/usages.md) for detailed documentation

## Quick Start

### Installation

```bash
PUPPETEER_DOWNLOAD_HOST=https://storage.googleapis.com.cnpmjs.org npm install --save @licoded/koa-puppeteer
```

> `PUPPETEER_DOWNLOAD_HOST=https://storage.googleapis.com.cnpmjs.org` prefix is to speed up Chromium download in **China**.  
> If you are not in China, you may need to remove the prefix

### Code Example

For some reasons, I use ES Module to write this tool. So you now can only use ES Module Synatx now.

> I plan to rewrite using CommonJs syntax to support both commonjs and es syntax.

Write following example script in `src/index.js`, and then use `node src/index.js` command to start the server.

```js
import { MyKoa } from '@licoded/koa-puppeteer';
import { createRouter } from '@licoded/koa-puppeteer/lib/router/index.js';

const testRouter = createRouter('/test');

testRouter.get('/test', (ctx) => {
  ctx.body = 'hello';
});

new MyKoa({
  port: 3000,
  debug: false,
  launch: {
    userDataDir: '/Users/lic/dev/products/my-koa-cli/workspace',
  },
  routers: [testRouter],
}).run();
```