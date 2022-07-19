const fs = require('fs');
const { multistream } = require('pino-multi-stream');
const koaLogger = require('koa-pino-logger');

const streams = [
    {
        stream: process.stdout,
    },
    {
        stream: fs.createWriteStream('/tmp/info.stream.out'),
    },
    {
        level: 'debug', stream: fs.createWriteStream('/tmp/fatal.stream.out'),
    },
    {
        level: 'fatal', stream: fs.createWriteStream('/tmp/fatal.stream.out'),
    },
];
module.exports = koaLogger({prettylint: true }, multistream(streams));
