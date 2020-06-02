import React from "react";
import FooterContent from "../FooterContent/FooterContent";
import Logo from "../../common/Logo/Logo";

const footerArea = () => {
  return (
    <div className="main-footer-area">
      <div className="container">
        <div className="row" style={{ display: "-webkit-box" }}>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="single-footer-widget">
              <div className="footer-logo mb-30">
                <Logo />
              </div>
              <p></p>
            </div>
          </div>
          <FooterContent />
        </div>
      </div>
    </div>
  );
};

export default footerArea;
