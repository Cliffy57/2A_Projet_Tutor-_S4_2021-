/*<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
crossorigin=""/>*/

import logo from "./logo.svg";
import "./Plan.css";
import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { iconrouge } from "./icon.js";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
//import * as L from 'leafleat';

import { Circle, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const circle0 = [49.1193089, 6.1757156];
const fillBlueOptions = { fillColor: "blue" };
const redOptions = { color: "red" };

//const position = [this.state.lat, this.state.lng]

export default function MyMap() {
  const [nom, setNom] = useState([]);

  useEffect(()=>{
  Axios.get('http://localhost:3001/getData').then((response)=>{
    // console.log(response.data)
    
      console.log(response.data);
      setNom(response.data);
      
    });}, []);

  var lat = 49.1193089;
  var lng = 6.1757156;
  var zoom = 14;
  const position = [lat, lng];

  return (
    <div>
      <MapContainer
        center={[49.1193089, 6.1757156]}
        zoom={13}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={iconrouge}>
          <Popup>
            <Card style={{width:'18rem'}}>
            <Card.Img variant="top" src="https://www.tekoway.com/wp-content/uploads/2017/05/react-logo.png" style={{width:'18rem'}} />
              <Card.Body >
                <Card.Title>Card Title</Card.Title>
                <Card.Text >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed nulla pretium, tempor erat sit amet, ultrices felis. Ut a tempus enim, sit amet pretium nunc. Nullam metus leo, dictum ac porttitor quis, venenatis nec mi. Sed ex ligula, tempus at lobortis sit amet, cursus at nibh. Etiam at velit leo. Mauris congue sapien scelerisque elementum sollicitudin.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
          </Card>
          </Popup>
        </Marker>

        {/* <Marker position={[49.1203081, 6.1757974]}></Marker>

        <Marker position={[49.120034, 6.163757]}> </Marker>
        <Marker position={[49.120702, 6.172125]}> </Marker> */}

        {nom.map((val)=>{
          return <Marker position={[val.Latitude , val.Longitude]}> </Marker>

        })}

        <Circle center={circle0} pathOptions={fillBlueOptions} radius={200} />
      </MapContainer>
    </div>
  );
}

if (navigator.geolocation) {
  //Si le navigator récup la géo
  console.log("Navigateur geolocal ok");
  
  if (navigator.geolocation.getCurrentPosition) {
    window.navigator.vibrate(100);
    
  }
} //
else {
  
}
