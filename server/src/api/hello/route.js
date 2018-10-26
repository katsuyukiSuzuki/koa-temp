const router = require('koa-router')();
const controller = require('./controller');

router.get('/', controller.hello);
router.get('/morning', controller.morning);

module.exports = router;
