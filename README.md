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

### Choose syntax to import

You can choose to use CommonJS syntax or ES Module syntax. Note that the default syntax of npm/nodejs project is CommonJS, if you want to use ES Module syntax, you need to add configuration `"type": "module"` in package.json. And when using ES Module syntax, the import path must be written in full.

#### CommonJS 

```js
const { MyKoa } = require('@licoded/koa-puppeteer');
const { createRouter } = require('@licoded/koa-puppeteer/lib/router');
```

#### ES Module

```js
import { MyKoa } from '@licoded/koa-puppeteer';
import { createRouter } from '@licoded/koa-puppeteer/lib/router/index.js';
```

### Code Example

```js
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