import { all, fork } from "redux-saga/effects";
import locationSaga from "features/locations/locationSaga";

export default function* rootSaga() {
  yield all([fork(locationSaga)]);
}
