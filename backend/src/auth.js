const { StatusCodes } = require('http-status-codes');
const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;

const fetchUser = (() => {          //request to db, 
  // This is an example! Use password hashing in your project and avoid storing passwords in your code
  const user = { id: 1, username: 'test', password: 'test' };
  return async function () {
    return user;
  };
})();

passport.serializeUser(function (user, done) {
  done(null, user.id);          //null - arg for mistake  authorization
});

passport.deserializeUser(async function (id, done) {    //authorization
  try {
    const user = await fetchUser();
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use(
  new LocalStrategy((username, password, done) => {
    // console.log('strategy', {username, passport});
    fetchUser(username, password)
      .then((user) => {
        if (username === user.username && password === user.password) {
          done(null, user);
        } else {
          done(null, false); ///authetication
        }
      })
      .catch((err) => done(err));
  }),
);

const isAuthenticated = async (ctx, next) => {
  if (!ctx.isAuthenticated()) {
   //ctx.status = StatusCodes.UNAUTHORIZED;
    ctx.throw(StatusCodes.UNAUTHORIZED, 'access denied', {});
  } else {
    await next();
  };
};

module.exports = {
  isAuthenticated,
};
