const Router = require('@koa/router');
require('module-alias/register');
const { isAuthenticated } = require('@root/auth');
const { getUsers,
  getUserProfile,
  login,
  register,
  getUserById,
  udpateUserById,
  deleteUserById } = require('@root/controllers/users');

const router = new Router();

router.get('/', getUsers);
router.get('/profile', getUserProfile);
router.post('/login', login);
router.get('/register', register);
router.get('/:user_id', getUserById);
//router.put('/:user_id', udpateUserById);
router.delete('/:user_id', deleteUserById);


// router.get('/', (ctx, next) => {
//   next();
// }, isAuthenticated, (ctx, next) => {
//   ctx.body = 'todos list';
//   next();
// });

module.exports = router;