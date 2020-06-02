import React from "react";
import { Link } from "react-router-dom";

const logo = () => {
  return (
    <Link to="/">
      <img
        src={require("../../../static/img/core-img/logo.png")}
        height="100"
        width="100"
        alt=""
      />
    </Link>
  );
};

export default logo;
