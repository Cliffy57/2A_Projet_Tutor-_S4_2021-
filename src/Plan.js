import "./Plan.css";
import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import  L from 'leaflet';
import {Link} from 'react-router-dom'

import { Circle, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const fillBlueOptions = { fillColor: "blue" };

export default function MyMap() {
  const [nom, setNom] = useState([]);
  const [userlat, setUserlat] = useState("49");
  const [userlong, setUserlong] = useState("6");
  const [zoom , setZoom] = useState("14")

  useEffect(() => {
    Axios.get("http://localhost:3001/getData").then((response) => {
      console.log(response.data);
      setNom(response.data);
    });
  }, []);


  useEffect(() => {

      //Calcul de la différence entre la position de l'utilisateur et les marqueurs
    const interval = setInterval(() => {
      
      let difflat = 0;
      let difflong = 0;
      {
        nom.map((val) => {
          difflat = userlat - val.Latitude;
          difflong = userlong - val.Longitude;

          
          if (
            difflat > -0.000277 &&
            difflong > -0.000277 &&
            difflat < 0.000277 &&
            difflong > -0.0002777
          ) {
            console.log("Proche d'un lieu");
            window.navigator.vibrate(100);
            setZoom("16")
          } else {
            console.log("Aucun lieu à proximité !");
          }
        });
      }
    }, 10000);
    return () => clearInterval(interval);
    
  });


    //
  useEffect(() => {
    const interval = setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(userlat);
          console.log(userlong);
          setUserlat(position.coords.latitude);
          setUserlong(position.coords.longitude);
        },
        function error(msg) {
          console.log(msg);
        },
        { enableHighAccuracy: true }
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <MapContainer
        center={[49.1193089, 6.1757156]}
        zoom={zoom}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       
        <Marker position={[userlat, userlong]}> 
        <Circle center={[userlat,userlong]} pathOptions={fillBlueOptions} radius={200} />
        </Marker>

        {nom.map((val)=>{ 
          return (
            <Marker position={[val.Latitude,val.Longitude]} icon={L.icon({iconUrl: val.Icones,iconSize:[50,82],iconAnchor:[12,41],popupAnchor:[1,-34]})}>
              <Popup>
                <Card className="CardSetup" style={{width:'18rem'}}>
                  <Card.Body>
                    <Card.Title className="CardTitle"> 
                      {val.Nom}
                    </Card.Title>
                    <Card.Text className="CardText">
                      {val.Description}
                    </Card.Text>
                    <Card.Text>
                      <div className="CardTitle">
                        <Link to={"./about/"+val.Id} >
                          <Button variant="primary" style={{textAlign:"center"}}>
                            En savoir plus
                          </Button>
                        </Link>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Popup>
          </Marker>
          )

        })}

        
      </MapContainer>
    </div>
  );
}

