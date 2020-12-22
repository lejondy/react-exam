import { combineReducers } from "redux";
import locationReducer from "features/locations/locationSlice";

export default combineReducers({
  locations: locationReducer,
});
