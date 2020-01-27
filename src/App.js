import React from 'react';

import './App.css';

import { Route, Switch } from 'react-router-dom'
import PlantData from './components/PlantData';

import Home from './components/Home';
import Cart from './components/Cart';




function App() {
  return (
 
      
    <React-Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/plantData" component={PlantData} />
        {/* <Route name="/outdoor" component={Indoor} />
        <Route name="/indoor" component={Indoor} />
        <Route name="/indoor" component={Indoor} />
        <Route name="/indoor" component={Indoor} />
        <Route name="/indoor" component={Indoor} /> */}
        <Route path="/cart" component={Cart} />
        
      </Switch>
     
      </React-Fragment>
 

  );
}

export default App;
