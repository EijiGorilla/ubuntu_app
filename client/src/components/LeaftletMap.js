import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, LayersControl, GeoJSON } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const MyData = () => {
  const [data, setData] = useState();

  const getData = async () => {
    const response = await fetch('http://localhost:5000/geom');
    const jsonData = await response.json();
    setData(jsonData[0]);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  if (data) {
    return <GeoJSON data={data} />;
  } else {
    return null;
  }
};

const LeafletMap = () => {
  const [center, setCenter] = useState({ lat: 34.886279997713, lng: -2.515525597498045 });
  const zoomLevel = 14;
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <MapContainer center={center} zoom={zoomLevel}>
      {/*The LayersControl tag help us organize our layers into baselayers and tilelayers*/}
      <LayersControl position="topright">
        {/*Using an OpenStreetMap basemap as a basemap*/}
        <LayersControl.BaseLayer name="OpenStreetMap" checked>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay name="My GeoJSON layer" checked>
          <MyData />•{' '}
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
};
export default LeafletMap;
