import { createRouter } from "../../lib/router/index.js";

const router = createRouter('/test');

router.get('/test', (ctx) => {
  ctx.body = 'hello';
});

export default router;