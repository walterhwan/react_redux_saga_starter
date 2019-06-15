import { takeEvery, put } from "redux-saga/effects";

function* increase() {
  yield put({ type: "INCREASE" });
}

function* rootSaga() {
  yield takeEvery("INCREASE_REQUEST", increase);
}

export default rootSaga;
