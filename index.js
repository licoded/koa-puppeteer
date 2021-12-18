import { MyKoa } from './lib/index.js';

const app = new MyKoa({});

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000, () => {
  console.log('server listening on port 3000');
})