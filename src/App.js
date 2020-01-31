import React from "react";

import "./App.css";

import { Route, Switch } from "react-router-dom";
import PlantData from "./components/PlantData";

import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <React-Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/plantData" component={PlantData} />

        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </React-Fragment>
  );
}

export default App;
