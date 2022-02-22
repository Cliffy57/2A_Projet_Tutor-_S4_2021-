import React from 'react';
import ReactDOM from 'react-dom';
import Plan from './Plan';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import About from './components/about'
import Homepage from './components/homepage'
import Footer from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';

const Routing = () => {
  return(
    <Router>
      
      <Switch>
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/map" component={Plan} />
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

