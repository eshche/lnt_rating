const { ret } = require('./utils');

const db = require('./utils');

const { first } = require('lodash');

const getById = async (id) => {
  const users = db.users.filter((user) => user.id === id);
  return await ret(first(users));
};

const getByName = async (name) => {
  const users = db.users.filter((user) => user.name === name);
  return await ret(first(users));
};

const getList = async (filter) => {
  const users = db.filterList(db.users, filter());
  return await ret(users);
};

module.exports = {
  getById,
  getByName,
  getList,
};