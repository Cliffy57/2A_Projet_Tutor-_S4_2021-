import React from 'react'
import logo from './images/logo_dix-cover.png';
import './homepage.css';
import { Button, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function about() {
    return (
        <div className="homepageBody">
            <div id="imglogo">
                <img className="imglogo" src={logo} ></img>
            </div>
            <div id="hometext">
                <h1>Bienvue, sur Dix-Cover!</h1>
            </div>
            <div id="homebtn">
                <Button ><Link to="./map" className="LinkNav">Vers la Dix-Couverte de Metz!</Link></Button>
            </div>
            
        </div>
    )
}
