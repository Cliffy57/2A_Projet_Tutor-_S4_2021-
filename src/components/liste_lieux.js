import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios'
import Button from "react-bootstrap/Button";
import './liste_lieux.css'
import { Link, useParams } from 'react-router-dom';
import parse from 'html-react-parser';


export default function Liste_Lieux() {
    const [batiment, setBatiment] = useState([]);
    

    const { param } = useParams();

    console.log(param);

    useEffect(()=>{
        if (param){
            Axios.get('http://127.0.0.1:3001/getData/Recherche/'+param).then((response)=>{

            console.log(response.data);
            setBatiment(response.data);
            
            })
        }
        else{
            Axios.get('http://127.0.0.1:3001/getData').then((response)=>{ 
                
            console.log(response.data);
            setBatiment(response.data);
            
          })};}, []);
        

    return (
        <>
        <div className="listeBody">
            {
                batiment.map((val)=>{  
                    return(
                        <div className="liste_div">
                            
                            <img src={val.Icones}  className="liste_img_icone"/>

                            {val.Nom}
                            
                            
                           <p>{parse(val.Description)}</p>
                          <div className="btnListe">
                           <Link to={"./about/"+val.Id} >
                                <Button className="btnListe" style={{backgroundImage:"radial-gradient(100% 100% at 0% 50%, #d53a42 19%, rgba(204, 58, 78, 0.75) 39.25%, rgba(194, 57, 86, 0.5) 59.5%, rgba(177, 56, 94, 0) 100%), linear-gradient(69deg, #000000 0%, #020101 0.92%, #040202 1.83%, #060304 2.75%, #090306 3.67%, #0c0408 4.58%, #10040b 5.5%, #12040e 6.42%, #150412 7.33%, #180316 8.25%, #1a031b 9.17%, #1f0026 11%, #230026 12.25%, #260025 13.5%, #290025 14.75%, #2d0024 16%, #2f0023 17.25%, #320022 18.5%, #350020 19.75%, #38001d 21%, #3a001a 22.25%, #3d0015 23.5%, #430000 26%, #4d0103 27.5%, #580207 29%, #62040d 30.5%, #6d0713 32%, #770b19 33.5%, #820f20 35%, #8d1326 36.5%, #97182d 38%, #a21d35 39.5%, #ad223c 41%, #c22d4b 44%, #c42e4b 45.08%, #c52f4a 46.17%, #c73049 47.25%, #c83149 48.33%, #ca3248 49.42%, #cb3347 50.5%, #cd3547 51.58%, #cf3646 52.67%, #d03745 53.75%, #d23844 54.83%, #d53a42 57%, #d23a47 58.58%, #cf3a4b 60.17%, #cc3a4e 61.75%, #c93a51 63.33%, #c63953 64.92%, #c23956 66.5%, #c03958 68.08%, #bd3959 69.67%, #ba395b 71.25%, #b7395c 72.83%, #b1385e 76%, #aa385e 77.5%, #a4385e 79%, #9e385e 80.5%, #97385d 82%, #91375c 83.5%, #8b375a 85%, #863659 86.5%, #803657 88%, #7a3555 89.5%, #753453 91%, #6a324f 94%)", border:"2px #F5F6F7 solid"}}>En savoir plus</Button>
                            </Link>
                          </div>

                         
                        
                        </div>


                    )
                    
                })}
                
                <div class="input-group">
<input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
    <Button variant="primary"
    onClick={(e) =>{
        
    }}>search</Button> 
</div>
            
            </div>
        </>
    )
}


{/* <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                <button type="button" class="btn btn-outline-primary"
                                onClick={(e) =>{
                                    
                                }}>search</button> */}