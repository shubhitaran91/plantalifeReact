import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import BenefitsArea from "../BenefitsArea/BenefitsArea";

const aboutUsSection = () => {
  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-12 col-lg-5">
          <div className="section-heading">
            <h2>ABOUT US</h2>
            <p>We are leading in the plants service fields.</p>
          </div>
          <p></p>
          <ProgressBar />
        </div>
        <BenefitsArea />
      </div>
    </div>
  );
};

export default aboutUsSection;
