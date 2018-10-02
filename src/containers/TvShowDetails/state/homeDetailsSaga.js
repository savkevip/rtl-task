import { put, takeEvery, fork } from "redux-saga/effects";
import {
  GET_DETAILS_START,
  GET_EPISODES_START
} from "../constants/actionTypes";
import {
  getDetailsFailed,
  getDetailsSuccess,
  getEpisodesFailed,
  getEpisodesSuccess
} from "./homeDetailsActions";
import { getDataApi } from "../../../api/api";

function* getDetailsSaga({ id }) {
  try {
    const response = yield fetch(`${getDataApi()}/shows/${id}`).then(response =>
      response.json()
    );
    yield put(getDetailsSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(getDetailsFailed(err));
  }
}

function* getEpisodesSaga({ id }) {
  try {
    const response = yield fetch(`${getDataApi()}/shows/${id}/episodes`).then(
      response => response.json()
    );
    yield put(getEpisodesSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(getEpisodesFailed(err));
  }
}

export function* watcherSaga() {
  yield [
    fork(takeEvery, GET_DETAILS_START, getDetailsSaga),
    fork(takeEvery, GET_EPISODES_START, getEpisodesSaga)
  ];
}

export function* detailsSaga() {
  yield fork(watcherSaga);
}
