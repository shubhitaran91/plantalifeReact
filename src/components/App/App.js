import React from "react";

import "./App.css";

import { Route, Switch } from "react-router-dom";
import Plants from "../Plants/PlantsLayout/Plants";

import Home from "../HomePage/Home";
import Cart from "../Cart/CartLayout/Cart";
import Checkout from "../Checkout/CheckoutLayout/Checkout";
import Contact from "../Contact/ContactLayout/Contact";
import ShowPlantDetails from "../Plants/PlantsDetails/PlantsDetails";
import Reviews from "../Reviews/ReviewLayout/Reviews";
import LoginModal from "../Auth/Login/LoginModal/LoginModal";
import Register from "../Auth/Register/Register";
import Logout from "../Auth/Logout/Logout";

function App() {
  return (
    <React-Fragment>
      <Switch>
        <Route path="/login" component={LoginModal} />
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Logout} />
        <Route path="/plants" component={Plants} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Route path="/plant-details/:id" component={ShowPlantDetails} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/review" component={Reviews} />
        <Route exact path="/" component={Home} />
      </Switch>
    </React-Fragment>
  );
}

export default App;
