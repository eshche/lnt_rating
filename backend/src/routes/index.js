const Router = require('@koa/router');
const todos = require('../routes/todos');
const auth = require('@root/routes/auth');
const books = require('@root/routes/books');
const users = require('@root/routes/users');
const characteristics = require('@root/routes/characteristics');
const objects = require('@root/routes/objects')

const router = new Router(); //корневой роутер

router.get('/', (ctx, next) => {
  ctx.body = 'router works';
});

router.use('/todos', todos.routes());
// router.use('/auth', auth.routes());
router.use('/users', users.routes());
router.use('/characteristics', characteristics.routes());
router.use('/objects', objects.routes());

module.exports = router;
