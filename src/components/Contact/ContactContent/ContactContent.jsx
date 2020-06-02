import React from "react";

const contactContent = () => {
  return (
    <div class="contact-area-info section-padding-0-100">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-12 col-md-6">
            <div class="contact--thumbnail">
              <img
                src={require("../../../static/img/bg-img/25.jpg")}
                height={500}
                width={650}
                alt=""
              />
            </div>
          </div>

          <div class="col-12 col-md-5">
            <div class="section-heading">
              <h2>CONTACT US</h2>
              <p>We are improving our services to serve you better.</p>
            </div>

            <div class="contact-information">
              <p>
                <span>Address:</span> 290, Gurunanakpura Adarsh nagar jaipur
              </p>
              <p>
                <span>Phone:</span> +7790901214
              </p>
              <p>
                <span>Email:</span> plantalifee@gmail.com
              </p>
              <p>
                <span>Open hours:</span> Mon - Sun: 8 AM to 9 PM
              </p>
              <p>
                <span>Happy hours:</span> Sat: 2 PM to 4 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactContent;
