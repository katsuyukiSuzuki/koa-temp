const Koa = require('koa');
const router = require('../routing');

const app = new Koa();

app.use(router.routes());

exports.start = async () => {
  try {
    await app.listen(5000);
    console.log(`listening on port 3000`);
  } catch (err) {
    console.log(err);
  }
};
