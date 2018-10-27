import { LOAD_GREETING, SAY_GOODMORNING, SAY_HELLO } from '../actions/greeting';

export default (state = 'こんにちわ　あかちゃん', action) => {
  switch (action.type) {
    case SAY_HELLO:
      return state;
    case SAY_GOODMORNING:
      return state;

    case LOAD_GREETING:
      return action.payload;
    default:
      return state;
  }
};
