const Router = require('@koa/router');
require('module-alias/register');
const { isAuthenticated } = require('@root/auth');
const { todo, todoList } = require('@root/controllers/todos');

const router = new Router();

router.get('/', isAuthenticated, todoList);
router.get('/:id', todo);

module.exports = router;
