import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/header'
import Footer from './components/footer'
import About from './components/about'
import Mapping from './components/mapping'

const Routing = () => {
  return(
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/mapping" component={Mapping} />
      </Switch>
      <Footer/>
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

