import React, { Component } from "react";
import AddToCard from "./AddToCard";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header-area">
          {/* <!-- ***** Top Header Area ***** --> */}
          <div className="top-header-area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="top-header-content d-flex align-items-center justify-content-between">
                    {/* <!-- Top Header Content --> */}
                    <div className="top-header-meta">
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="plantalifee@gmail.com"
                      >
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                        <span>Email: plantalifee@gmail.com</span>
                      </a>
                      <a
                        href="contact.html"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="7790901214"
                      >
                        <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                        <span>Call Us: 7790901214</span>
                      </a>
                    </div>

                    <div className="top-header-meta d-flex">
                      <AddToCard />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- ***** Navbar Area ***** --> */}

          <div className="container">
            {/* <!-- Menu --> */}
            <nav className="" id="plantalifeNav">
              {/* <!-- Nav Brand --> */}
              <a href="index.html" className="nav-brand">
                <img
                  src={require("../static/img/core-img/logo.png")}
                  height="100"
                  width="100"
                  alt=""
                />
              </a>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
