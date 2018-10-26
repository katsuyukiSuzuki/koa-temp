const router = require('koa-router')();
const greeting = require('../api/hello/route');

router.use('/greetings', greeting.routes());

module.exports = router;
