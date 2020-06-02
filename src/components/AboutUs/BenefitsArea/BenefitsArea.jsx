import React from "react";

const benefitsArea = () => {
  const benefits = [
    {
      heading: "Quality Products",
      path: require("../../../static/img/core-img/b4.png"),
    },
    {
      heading: "Perfect Service",
      path: require("../../../static/img/core-img/b4.png"),
    },
    {
      heading: "100% Natural",
      path: require("../../../static/img/core-img/b3.png"),
    },
    {
      heading: "Environmentally friendly",
      path: require("../../../static/img/core-img/b4.png"),
    },
  ];
  return (
    <div className="col-12 col-lg-6">
      <div className="plantalife-benefits-area">
        <div className="row">
          {benefits.map((value, index) => {
            return (
              <div className="col-12 col-sm-6" key={index}>
                <div className="single-benefits-area">
                  <img src={value.path} alt="" />
                  <h5>{value.heading}</h5>
                  <p></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default benefitsArea;
