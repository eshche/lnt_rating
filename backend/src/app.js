require('module-alias/register');
const Koa = require('koa');
const router = require('@root/routes');
const logger = require('@root/logger');
const koaBody = require('koa-body');
const session = require('koa-session');
const passport = require('koa-passport');

const app = new Koa();

// app.use(async (ctx, next) => {
//   console.log('Middleware');
//   next();
// });

// app.use(async (ctx) => {
//   ctx.body = {
//     status: 'success',
//     message: 'hello, world!',
//   };
// });
// //sessios
// app.keys = ['secretApplicationTodo']; //строка для шифрования
// app.use(session({}, app));

app.use(router.routes());
app.use(router.allowedMethods());

// require('@root/auth');
// app.use(passport.initialize());
// app.use(passport.session());

// app.use(router.routes());

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
