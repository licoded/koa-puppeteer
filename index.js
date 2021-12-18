import { MyKoa } from './lib/index.js';
import { sleep, run } from './lib/utils/index.js';

const app = new MyKoa({
  debug: true,
  launch: {
    userDataDir: '/Users/lic/dev/products/my-koa-cli/workspace',
  }
});

app.use(async ctx => {
  await run(async (page) => {
    await page.goto('https://www.baidu.com')
    await sleep(10000);
  })
  ctx.body = 'Hello World';
});

app.listen(3000, () => {
  console.log('server listening on port 3000');
});