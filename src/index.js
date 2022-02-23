import React from 'react';
import ReactDOM from 'react-dom';
import Plan from './Plan';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


import About from './components/about'
import Homepage from './components/homepage'
import Footer from './components/Navigation'
import Liste_Lieux from './components/liste_lieux'

import 'bootstrap/dist/css/bootstrap.min.css';


const Routing = () => {
  return(
    <Router>
      
      <Switch>
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/about/:id" component={About} />
        <Route exact path="/map" component={Plan} />
        <Route exact path="/liste_lieux" component={Liste_Lieux} />
        <Route exact path="/liste_lieux/:param" component={Liste_Lieux} />
      </Switch>
      <Footer />
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);