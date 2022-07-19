const Router = require('@koa/router');
require('module-alias/register');
const { isAuthenticated } = require('@root/auth');
const { todo, todoList } = require('@root/controllers/todos');

const router = new Router();

router.get('/', todoList);
router.get('/:id', todo);


router.get('/', (ctx, next) => {
  next();
}, isAuthenticated, (ctx, next) => {
  ctx.body = 'todos list';
  next();
});

module.exports = router;
