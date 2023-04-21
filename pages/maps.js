import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Navbar from "@/components/Navbar";
const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 33.5731,
  lng: -7.5898,
};
function Maps() {
  return (
    <div>
      <Navbar />
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14} />
    </LoadScript>
    </div>
    
  );
}

export default Maps;
