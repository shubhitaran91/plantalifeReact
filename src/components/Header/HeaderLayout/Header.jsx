import React from "react";
import HeaderArea from "../HeaderArea/HeaderArea";
import Logo from "../../common/Logo/Logo";

const header = (props) => {
  return (
    <header className="header-area">
      <HeaderArea {...props} />
      <div className="container nav-brand">
        <Logo />
      </div>
    </header>
  );
};

export default header;
