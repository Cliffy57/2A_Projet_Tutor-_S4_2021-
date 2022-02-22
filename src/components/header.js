import React from 'react'
import {Link} from 'react-router-dom'

export default function header() {
    return (
        <>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/map">Map</Link></li>
            </ul>
        </>
    )
}
