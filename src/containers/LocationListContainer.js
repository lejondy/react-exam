import React from "react";
import { useSelector } from "react-redux";
import LocationList from "components/LocationList";

const LocationListContainer = () => {
  const locations = useSelector((state) => state.locations);

  return <LocationList locations={locations} />;
};

export default LocationListContainer;
