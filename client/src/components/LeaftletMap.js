import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, LayersControl, GeoJSON } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import TestFinder from '../apis/TestFinder';

const MyData = () => {
  const [data, setData] = useState();

  const getData = async () => {
    // 1. Use fetch
    // const response = await fetch('http://localhost:5000/geom');
    // const jsonData = await response.json();

    // 2. Use axios directly
    // const jsonData = await axios.get('http://localhost:5000/geom');
    // console.log(jsonData.data[0]);
    // setData(jsonData.data[0]);

    // 3. Use axios from conditional states. we need this in aws ec2
    const response = await TestFinder.get('/');
    console.log(response.data[0]);
    setData(response.data[0]);
  };

  useEffect(() => {
    getData();
  }, []);
  // console.log(data);

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
