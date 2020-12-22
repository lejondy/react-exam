import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: [],
  reducers: {
    fetchAllLocations(state, action) {},
    fetchLocationsSuccess(state, action) {
      return action.payload.locations;
    },
    fetchLocation(state, action) {},
    addLocation(state, action) {},
    updateLocation(state, action) {},
    removeLocation(state, action) {},
  },
});

export const {
  fetchAllLocations,
  fetchLocationsSuccess,
  fetchLocation,
  addLocation,
  updateLocation,
  removeLocation,
} = locationSlice.actions;

export default locationSlice.reducer;
