const {app, json, cors, onerror, bodyparser, logger, proxy} = require('./src/appConfig');
const consts = require('./src/const');
const {accessLogger} = require('./logger/logger');
const InitDircetory = require('./classList/directory');

// error 错误处理
onerror(app);

app
  // 访问日志--记录用户所有访问请求
  .use(accessLogger())
  // 跨域
  .use(
    cors({
      origin: function (ctx) {
        return ctx.header.origin;
      }
    })
  )
  // 使用koa-bodyparser中间件
  .use(bodyparser({enableTypes: ['json', 'form', 'text']}))
  // 代理, 根据实际添加
  .use(proxy(consts.options))
  .use(json())
  .use(logger())
  // 静态资源目录
  .use(require('koa-static')(__dirname + '/public'))
  // logger
  .use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  });
InitDircetory.InitCore(app); // 执行动态加载路由的类的初始化函数

module.exports = app;
