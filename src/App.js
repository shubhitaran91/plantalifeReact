import React, { Fragment } from 'react';

import './App.css';

import { Router, Route, Switch, Link } from 'react-router-dom'
import Indoor from './components/Indoor';
import Header from './components/Header';
import About from './components/About';
import Services from './components/services';
import Carausal from './components/carausal';
import Teams from './components/Teams';
import Footer from './components/footer';
import Home from './components/Home';
function App() {
  return (
 
      
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/indoor" component={Indoor} />
        
      </Switch>
     
     
 

  );
}

export default App;
