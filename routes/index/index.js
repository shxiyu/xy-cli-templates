const {router} = require('../../src/appConfig');

router
  // 预览页
  .get('/', async (ctx, next) => {
    ctx.type = 'text/html';
    ctx.body = fs.readFileSync('./public/index.html', 'utf-8'); // 文件相对路径
  });

module.exports = router;
