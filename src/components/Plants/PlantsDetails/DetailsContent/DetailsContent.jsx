import React from "react";

import ListImages from "./ListImages/ListImages";
import TitleData from "./Title/Title";

const detailContent = (props) => {
  return (
    <section className="single_product_details_area mb-50">
      <div className="produts-details--content mb-50">
        <div className="container">
          <div className="row justify-content-between">
            <ListImages listPlants={props.plantDetails[0]} />
            <TitleData
              plantContent={props.plantDetails[0]}
              clicked={props.addToCart}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default detailContent;
