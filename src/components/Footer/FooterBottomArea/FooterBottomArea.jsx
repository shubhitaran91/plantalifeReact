import React from "react";

const footerBottomArea = () => {
  return (
    <div className="footer-bottom-area" style={{ "margin-top": "-5%" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="border-line"></div>
          </div>
          {/* <!-- Copywrite Text --> */}
          <div className="col-12 col-md-6">
            <div className="copywrite-text">
              <p>
                &copy;
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved{" "}
                <i className="fa fa-heart-o" aria-hidden="true"></i>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footerBottomArea;
