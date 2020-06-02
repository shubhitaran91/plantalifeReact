import React from "react";

const productList = (props) => (
  <div key={props.key} className="col-12 col-sm-2">
    <div className="single-benefits-area" onClick={props.click}>
      <img src={props.imgSrc} height={150} width={150} alt="" />
      <h5 style={{ textAlign: "center" }}>{props.label}</h5>
    </div>
  </div>
);

export default productList;
