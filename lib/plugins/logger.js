const KoaLogger = require('koa-logger');

const getDateStr = () => {
  const d = new Date();
  const dayStr = [(d.getMonth() + 1), d.getDate(), d.getFullYear()].join('/');
  const timeStr = [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
  return `${dayStr} ${timeStr}`;
}

const logger = KoaLogger((str) => {
  console.log(getDateStr(), str);
});

module.exports = logger;