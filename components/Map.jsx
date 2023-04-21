import React from 'react';
import { GoogleMap, LoadScript, SearchBox } from '@react-google-maps/api';
const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 33.5731,
  lng: -7.5898,
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      />
    </LoadScript>
  );
}

export default Map;
