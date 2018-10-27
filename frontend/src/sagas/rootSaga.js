import { call, put, takeLatest } from 'redux-saga/effects';
import { SAY_GOODMORNING, SAY_HELLO, LOAD_GREETING } from '../actions/greeting';
import { morning, hello } from '../api';
function* getHello() {
  try {
    const res = yield call(hello);
    yield put({ type: LOAD_GREETING, payload: res.data });
  } catch (e) {
    console.log(e);
  }
}

function* getMorining() {
  try {
    const res = yield call(morning);
    yield put({ type: LOAD_GREETING, payload: res.data });
  } catch (e) {
    console.log(e);
  }
}
function* rootSaga() {
  yield takeLatest(SAY_HELLO, getHello);
  yield takeLatest(SAY_GOODMORNING, getMorining);
}

export default rootSaga;
