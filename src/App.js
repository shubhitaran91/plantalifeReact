import React from 'react';

import './App.css';

import { Route, Switch } from 'react-router-dom'
import PlantData from './components/PlantData';

import Home from './components/Home';




function App() {
  return (
 
      
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route name="/plantData" component={PlantData} />
        {/* <Route name="/outdoor" component={Indoor} />
        <Route name="/indoor" component={Indoor} />
        <Route name="/indoor" component={Indoor} />
        <Route name="/indoor" component={Indoor} />
        <Route name="/indoor" component={Indoor} /> */}
        
      </Switch>
     
     
 

  );
}

export default App;
