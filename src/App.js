/*<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
crossorigin=""/>*/

import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
//import * as L from 'leafleat';

import { Circle, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const circle0 = [49.1193089, 6.1757156];
const fillBlueOptions = { fillColor: "blue" };
const redOptions = { color: "red" };


//const position = [this.state.lat, this.state.lng]

class MyMap extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 49.1193089,
      lng: 6.1757156,
      zoom: 14,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <div>
        <MapContainer
          center={[49.1193089, 6.1757156]}
          zoom={13}
          style={{ height: "80vh", width: "120vh" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={position}
            iconUrl={
              "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png"
            }
          >
            <Popup>Vous êtes ici.</Popup>
          </Marker>

          <Marker position={[49.1203081, 6.1757974]}></Marker>

          <Marker position={[49.120034, 6.163757]}> </Marker>
          <Marker position={[49.120702, 6.172125]}> </Marker>
          <Circle center={circle0} pathOptions={fillBlueOptions} radius={200} />
        </MapContainer>
      </div>
    );
  }
}

if (navigator.geolocation) {
  //Si le navigator récup la géo
  console.log("Navigateur geolocal ok");
  alert("Navigateur geolocalisation ok");
  if (navigator.geolocation.getCurrentPosition) {
    window.navigator.vibrate(100);
    alert("Bonjour");
  }
} //
else {
  alert("Navigateur geolocal incompatible");
}

export default MyMap;
