import React from "react";
import AboutUsSection from "../AboutUsSection/AboutUsSection";

const aboutUs = () => {
  return (
    <section className="about-us-area section-padding-100-0">
      <AboutUsSection />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="border-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default aboutUs;
