export default (state, action) => {
  switch (action.type) {
    case 'hello':
      return 'hello from reducer';
    case 'morning':
      return 'goodmorning from reducer';
    default:
      return 'こんにちわ';
  }
};
