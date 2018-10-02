import { all } from "redux-saga/effects";
import { dataSaga } from "../containers/Home/state/homeSaga";
import { detailsSaga } from "../containers/TvShowDetails/state/homeDetailsSaga";

export default function* rootSaga() {
  yield all([dataSaga(), detailsSaga()]);
}
