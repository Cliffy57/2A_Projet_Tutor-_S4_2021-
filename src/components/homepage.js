import React from 'react'
import logo from './images/logo_dix-cover.png';
import './homepage.css';
import { Button } from 'react-bootstrap'; 
import {Link} from 'react-router-dom'

export default function about() {
    return (
        <div className="homepageBody">
            <div id="imglogo">
                <img className="imglogo" src={logo} ></img>
            </div>
            <div id="hometext">
                <h1>Bienvenue, sur Dix-Cover!</h1>
            </div>
            <div id="homebtn">
                <Button style={{backgroundColor:"#880C17", border:"2px white solid"}}><Link to="./map" className="LinkNav">Vers la Dix-Couverte de Metz!</Link></Button>
            </div>
            
        </div>
    )
}
