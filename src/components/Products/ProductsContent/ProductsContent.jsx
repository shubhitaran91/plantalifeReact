import React from "react";
import ProductList from "./ListOfProducts/ProductList";

const productContent = (props) => {
  return (
    <div className="col-12 col-lg-12">
      <div className="plantalife-benefits-area">
        <div className="row">
          {props.listOfProduct.map((value, index) => {
            return (
              <ProductList key={index} imgSrc={value.path} label={value.type}
              click = {() => props.clicked(value.type)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default productContent;
