import React from "react";

import "./App.css";

import { Route, Switch } from "react-router-dom";
import PlantData from "./components/PlantData";

import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import ShopDetail from "./components/ShopDetail";
import Admin from "./components/admin";
import DatatablePage from "./components/DatatablePage";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <React-Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/plantData" component={PlantData} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Route path="/shopdetail" component={ShopDetail} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/admin" component={Admin} /> 
        <Route path="/listofplant" component={DatatablePage}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </React-Fragment>
  );
}

export default App;
