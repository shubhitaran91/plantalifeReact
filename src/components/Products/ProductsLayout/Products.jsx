import React from "react";
import ProductTitle from "../ProductTitle/ProductTitle";
import ProductContent from "../ProductsContent/ProductsContent";

const products = (props) => {
  const services = [
    {
      type: "Indoor",
      path: require("../../../static/img/core-img/4.png"),
    },
    {
      type: "Outdoor",
      path: require("../../../static/img/core-img/b2.png"),
    },
    {
      type: "Pots",
      path: require("../../../static/img/core-img/3.42"),
    },
    {
      type: "Seeds/Grass",
      path: require("../../../static/img/core-img/2.png"),
    },
    {
      type: "Gardening",
      path: require("../../../static/img/core-img/6.18"),
    },
    {
      type: "Home Decor",
      path: require("../../../static/img/core-img/1.22"),
    },
  ];
  const plantListHandler = (type) => {
    console.log(type);
    props.history.push({
      pathname: "/plants",
      search: "?plant_type=" + type,
    });
  };

  return (
    <section className="our-services-area bg-gray section-padding-150-0">
      <div className="container">
        <ProductTitle />
        <ProductContent listOfProduct={services} clicked={plantListHandler} />
      </div>
    </section>
  );
};

export default products;
