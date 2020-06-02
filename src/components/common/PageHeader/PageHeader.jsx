import React from "react";
import Background from "../../../static/img/bg-img/24.jpg";
import { Link } from "react-router-dom";
const pageHeader = (props) => {
  return (
    <div className="breadcrumb-area">
      <div
        className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <h2>{props.pageName}</h2>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">
                    <i className="fa fa-home"></i> Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {props.pageName}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pageHeader;
