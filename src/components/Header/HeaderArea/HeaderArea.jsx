import React from "react";
import HeaderContent from "../HeaderContent/HeaderContent";
import CartIcon from "../../Cart/CartIcon/CartIcon";
import Login from "../../Auth/Login/Login";

const headerArea = (props) => {
  return (
    <>
      <div className="top-header-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="top-header-content d-flex align-items-center justify-content-between"
                style={{ marginRight: "6%" }}
              >
                <HeaderContent />
                <CartIcon {...props} />
              </div>
              <Login {...props} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default headerArea;
