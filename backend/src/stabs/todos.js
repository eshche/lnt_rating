const { first } = require('lodash');
const { ret, filterList } = require('./utils');
const db = require('./db');

const getById = async (id) => {
  const users = db.todos.filter((user) => user.id === id);
  console.log('from stab')
  return await ret(first(users));
};

const getByTitle = async (title) => {
  const users = db.todos.filter((user) => user.title === title);
  return await ret(first(users));
};

const getList = async (filter) => {
  const users = filterList(db.todos, filter);
  return await ret(users);
};

module.exports = {
  getById,
  getByTitle,
  getList,
};
