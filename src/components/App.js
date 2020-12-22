import "antd/dist/antd.css";
import "./app.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import LocationListContainer from "containers/LocationListContainer";
import { fetchAllLocations } from "features/locations/locationSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllLocations());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app-container">
      <LocationListContainer />
    </div>
  );
};

export default App;
