import React from "react";
import FooterArea from "../FooterArea/FooterArea";
import FooterBottomArea from "../FooterBottomArea/FooterBottomArea";
import BackgroundImage from "../../../static/img/bg-img/3.jpg";

const footer = () => {
  return (
    <footer
      className="footer-area bg-img"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <FooterArea />
      <FooterBottomArea />
    </footer>
  );
};

export default footer;
