const { createRouter } = require('../../../lib/router');
const router = createRouter('/test');

router.get('/test', (ctx) => {
  ctx.body = 'hello';
});

module.exports = router;