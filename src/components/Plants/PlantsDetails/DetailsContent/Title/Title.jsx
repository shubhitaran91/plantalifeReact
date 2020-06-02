import React from "react";

const title = (props) => {
  return (
    <div className="col-12 col-md-6">
      <div className="single_product_desc">
        <h4 className="title">{props.plantContent.plant_name}</h4>
        <h4 className="price">{`\u20B9${props.plantContent.plant_price}`}</h4>
        <div className="short_overview">
          <p>{props.plantContent.plant_desc}</p>
        </div>

        <div className="cart--area d-flex flex-wrap align-items-center">
          <button className="btn plantalife-btn ml-15" onClick={props.clicked}>
            Add to cart
          </button>
        </div>

        <div className="products--meta">
          <p>
            <span>Category:</span> <span>{props.plantContent.plant_type}</span>
          </p>
          <p>
            <span>Status:</span> <span>{props.plantContent.plant_status}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default title;
