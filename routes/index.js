const {router} = require('../src/appConfig');

router
  .get('/', async (ctx, next) => {
    ctx.body = 'Hello xy!';
  })
  .get('/string', async (ctx, next) => {
    ctx.body = 'xy string';
  })
  .get('/json', async (ctx, next) => {
    ctx.body = 'xy json';
  });

module.exports = router;
