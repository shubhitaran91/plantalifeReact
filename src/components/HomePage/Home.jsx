import React, { Fragment } from "react";
import Header from "../Header/HeaderLayout/Header";
import Carausal from "../Header/Carausal/Carausal";
import Products from "../Products/ProductsLayout/Products";
import AboutUs from "../AboutUs/AboutUsLayout/AboutUs";
import Teams from "../Team/TeamLayout/Team";
import Footer from "../Footer/FooterLayout/Footer";
const home = (props) => {
  return (
    <Fragment>
      <Header {...props} />
      <Carausal />
      <Products {...props} />
      <AboutUs />
      <Teams />
      <Footer />
    </Fragment>
  );
};

export default home;
