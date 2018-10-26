const router = require('koa-router')();
const greeting = require('../api/hello/route');

router.prefix('/api');
router.use('/greetings', greeting.routes());

module.exports = router;
