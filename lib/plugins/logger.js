import Moment from 'moment';
import KoaLogger from 'koa-logger';

const logger = KoaLogger((str) => {
  console.log(Moment().format('YYYY-MM-DD HH:mm:ss') + str);
});

export default logger;