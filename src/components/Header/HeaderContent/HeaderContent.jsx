import React from "react";
import { Link } from "react-router-dom";

const headerContent = () => {
  return (
    <div className="top-header-meta">
      <Link
        to="contact"
        data-toggle="tooltip"
        data-placement="bottom"
        title="plantalifee@gmail.com"
      >
        <i className="fa fa-envelope-o" aria-hidden="true"></i>
        <span>Email: plantalifee@gmail.com</span>
      </Link>
      <Link
        to="contact"
        data-toggle="tooltip"
        data-placement="bottom"
        title="7790901214"
      >
        <i className="fa fa-phone" aria-hidden="true"></i>
        <span>Call Us: 7790901214</span>
      </Link>
    </div>
  );
};

export default headerContent;
