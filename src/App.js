import React from 'react';

import './App.css';

import { Route, Switch } from 'react-router-dom'
import Indoor from './components/Indoor';

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
