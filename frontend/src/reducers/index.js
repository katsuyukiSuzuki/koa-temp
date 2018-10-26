import { combineReducers } from 'redux';
import greetingReducer from './greeting';

export default combineReducers({
  greeting: greetingReducer
});
