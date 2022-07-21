const { getById } = require('@root/stabs/todos');
const mime = require('mime-types');
const jestConfig = require('../../../jest.config');
const { MyException } = require('../../exeptions');

module.exports = async (ctx, next) => {
  const {
    params: { id },
  } = ctx;

  if (id) {
    const normalizedId = Number.parseInt(id);
    const data = await getById(normalizedId);
    //  console.log({data});
    //ctx.log.info('user received todo');
    ctx.set('ContentType', mime.contentType('json'));
    ctx.body = JSON.stringify(data);
  } else {
    throw MyException();
  }
};
