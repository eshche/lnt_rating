const Router = require('@koa/router');
const passport = require('koa-passport');

const router = new Router();

router.post('/login', passport.authenticate('local', {}), (ctx, next) => {
  ctx.body = 'user autheticated';
  next();
});

router.post('/logout', (ctx) => {
  ctx.logout();
});

module.exports = router;
