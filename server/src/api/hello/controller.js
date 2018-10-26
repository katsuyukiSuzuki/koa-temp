const hello = ctx => {
  ctx.body = 'hello world';
};
const morning = ctx => {
  ctx.body = 'good morning';
};

module.exports = {
  hello,
  morning
};
