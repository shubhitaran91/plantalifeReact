import React, { Component } from "react";
import Background from "../static/img/bg-img/24.jpg";
import Footer from "./footer";
class Contact extends Component {
  render() {
    return (
      <div>
        <header class="header-area">
          <div class="top-header-area">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="top-header-content d-flex align-items-center justify-content-between">
                    <div class="top-header-meta">
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="plantalifee@gmail.com"
                      >
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                        <span>Email: plantalifee@gmail.com</span>
                      </a>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="+7790901214"
                      >
                        <i class="fa fa-phone" aria-hidden="true"></i>{" "}
                        <span>Call Us: +7790901214</span>
                      </a>
                    </div>

                    <div class="top-header-meta d-flex">
                      <div class="login">
                        <a href="#">
                          <i class="fa fa-user" aria-hidden="true"></i>{" "}
                          <span>Login</span>
                        </a>
                      </div>

                      <div class="cart">
                        <a href="#">
                          <i class="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                          <span>
                            Cart <span class="cart-quantity">(1)</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="plantalife-main-menu">
            <div class="classy-nav-container breakpoint-off">
              <div class="container">
                <nav
                  class="classy-navbar justify-content-between"
                  id="plantalifeNav"
                >
                  <a href="index.html" class="nav-brand">
                    <img
                      src={require("../static/img/core-img/logo.png")}
                      height="100"
                      width="100"
                      alt=""
                    />
                  </a>

                  <div class="classy-navbar-toggler">
                    <span class="navbarToggler">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>

                  <div class="classy-menu">
                    <div class="classycloseIcon">
                      <div class="cross-wrap">
                        <span class="top"></span>
                        <span class="bottom"></span>
                      </div>
                    </div>

                    {/* <div className="classynav">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                       
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>

                             
                                <div id="searchIcon">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </div>

                            </div> */}
                  </div>
                </nav>

                <div class="search-form">
                  <form action="#" method="get">
                    <input
                      type="search"
                      name="search"
                      id="search"
                      placeholder="Type keywords &amp; press enter..."
                    />
                    <button type="submit" class="d-none"></button>
                  </form>

                  <div class="closeIcon">
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="breadcrumb-area">
          <div
            class="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center"
            style={{ backgroundImage: `url(${Background})` }}
          >
            <h2>Contact US</h2>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-12">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="#">
                        <i class="fa fa-home"></i> Home
                      </a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Contact
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-area-info section-padding-0-100">
          <div class="container">
            <div class="row align-items-center justify-content-between">
              <div class="col-12 col-md-6">
                <div class="contact--thumbnail">
                  <img
                    src={require("../static/img/bg-img/25.jpg")}
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

        <section class="contact-area">
          <div class="container">
            <div class="row align-items-center justify-content-between">
              <div class="col-12 col-lg-5">
                <div class="section-heading">
                  <h2>GET IN TOUCH</h2>
                  <p>Send us a message, we will call back later</p>
                </div>

                <div class="contact-form-area mb-100">
                  <form action="#" method="post">
                    <div class="row">
                      <div class="col-12 col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="contact-name"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control"
                            id="contact-email"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="contact-subject"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-12">
                        <button type="submit" class="btn plantalife-btn mt-15">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Contact;
