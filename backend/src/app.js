require('module-alias/register');
const Koa = require('koa');
const router = require('@root/routes');
const koaBody = require('koa-body');
const session = require('koa-session');
const passport = require('koa-passport');

const app = new Koa();

app.use(koaBody());

// Sessions
app.keys = ['secretApplication']; //string for encrypt, change
app.use(session({}, app));

require('@root/auth');
app.use(passport.initialize());
app.use(passport.session());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {});