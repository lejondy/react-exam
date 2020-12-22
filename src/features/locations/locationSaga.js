import axios from "utils/axios";
import { call, put, takeLatest } from "redux-saga/effects";

import {
  fetchAllLocations,
  fetchLocationsSuccess,
  fetchLocation,
  addLocation,
  updateLocation,
  removeLocation,
} from "features/locations/locationSlice";

const endpoint = "/locations";

function* fetchAllLocationsSaga() {
  const data = yield call(axios.request, {
    url: `${endpoint}`,
  });
  yield put(fetchLocationsSuccess({ locations: data }));
}

function* fetchLocationSaga(action) {
  const { payload } = action;
  const { id } = payload;

  const data = yield call(axios.request, {
    url: `${endpoint}?id=${id}`,
  });

  return data;
}

function* addLocationSaga(action) {
  const { payload } = action;
  const { location, description } = payload;

  yield call(axios.request, {
    url: `${endpoint}`,
    method: "post",
    data: {
      location,
      description,
    },
  });

  yield fetchAllLocationsSaga();
}

function* updateLocationSaga(action) {
  const { payload } = action;
  const { id, location, description } = payload;

  yield call(axios.request, {
    url: `${endpoint}/${id}`,
    method: "put",
    data: {
      location,
      description,
    },
  });

  yield fetchAllLocationsSaga();
}

function* removeLocationSaga(action) {
  const { payload } = action;
  const { id } = payload;

  yield call(axios.request, {
    url: `${endpoint}/${id}`,
    method: "delete",
  });

  yield fetchAllLocationsSaga();
}

function* rootSaga() {
  yield takeLatest(fetchAllLocations.type, fetchAllLocationsSaga);
  yield takeLatest(fetchLocation.type, fetchLocationSaga);
  yield takeLatest(addLocation.type, addLocationSaga);
  yield takeLatest(updateLocation.type, updateLocationSaga);
  yield takeLatest(removeLocation.type, removeLocationSaga);
}

export default rootSaga;
