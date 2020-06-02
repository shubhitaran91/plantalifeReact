import React from "react";
import PlantCard from "../PlantCard/PlantCard";

const plantContent = (props) => {
  const plantCard = props.plantData.map((plant) => {
    return (
      <PlantCard
        key={plant["id"]}
        id={plant["id"]}
        name={plant["plant_name"]}
        price={plant["plant_price"]}
        photo={plant["plant_photos"]}
        clicked={() => props.addToCart(plant)}
      />
    );
  });

  return (
    <section className="shop-page section-padding-0-100">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className="shop-products-area">
              <div className="row">{plantCard}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default plantContent;
