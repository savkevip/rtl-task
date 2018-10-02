import { put, takeEvery, fork } from "redux-saga/effects";
import { GET_DATA_START } from "../constants/actionTypes";
import { getDataFailed, getDataSuccess } from "./homeActions";
import { getDataApi } from "../../../api/api";

function* getDataSaga() {
  try {
    const response = yield fetch(`${getDataApi()}/shows`).then(response =>
      response.json()
    );
    yield put(getDataSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(getDataFailed(err));
  }
}

export function* watcherSaga() {
  yield [fork(takeEvery, GET_DATA_START, getDataSaga)];
}

export function* dataSaga() {
  yield fork(watcherSaga);
}
