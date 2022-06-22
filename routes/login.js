const {router} = require('../src/appConfig');

router
  .prefix('/login') // 重定向路径
  .get('/', function (ctx, next) {
    ctx.body = 'this is a login response!';
  })
  .get('/bar', function (ctx, next) {
    ctx.body = 'this is a login/bar response';
  });

module.exports = router;
