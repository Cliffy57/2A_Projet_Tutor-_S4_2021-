import React from 'react'
import {useEffect, useState} from 'react'
import Axios from 'axios'
import { useParams } from 'react-router';
import './about.css'
import { Card, Button } from 'react-bootstrap';
import parse from 'html-react-parser';



export default function About() {

    const [batiment, setBatiment] = useState([]);
    
    const { id } = useParams()

    console.log(id)

    useEffect(()=>{
        Axios.get('http://127.0.0.1:3001/getData/'+id).then((response)=>{
         
            console.log(response.data);
            setBatiment(response.data);
            
          });}, []);


    return (
        <>
            <body id="bodyAbout">
                {batiment.map((val)=>{
                    
                    return(
                        <div>
                            <h1>{val.Nom} </h1>
                            <div className="CardAbout">
                                <Card className="m-auto " style={{width:'60vw',  border:'3px solid white', backgroundColor:'#880C17'}}>
                                    <Card.Body >
                                    <Card.Img variant="top" src={val.Image} className="CardAboutImg"  />
                                        <Card.Text className="CardAboutHoraire ">
                                            Horaires : <br/> { parse(val.Horaire)}
                                        </Card.Text>
                                        <Card.Text className="CardAboutTxt" >
                                            {parse(val.DescriptionLongue)}
                                        </Card.Text>
                                        <Card.Text className="CardAboutSite">
                                            <Button style={{backgroundColor:"#880C17", border:"2px white solid"}}>
                                                <a href={val.Site} className="AboutSiteHREF">
                                                    Visiter le site!
                                                </a>
                                            </Button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            
                        </div>
                    )
                }
                    

                )}
            </body>
        </>
    )
}
