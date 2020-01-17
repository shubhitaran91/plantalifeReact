import React, { Component } from 'react';
import Background from '../static/img/bg-img/3.jpg'

class footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer-area bg-img" style={{backgroundImage:`url(${Background})`}}>
        {/* <!-- Main Footer Area --> */}
        <div className="main-footer-area">
            <div className="container">
                <div className="row">

                    {/* <!-- Single Footer Widget --> */}
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="single-footer-widget">
                            <div className="footer-logo mb-30">
                                <a href="#"><img src={require("../static/img/core-img/logo.png")} height="200" width="200" alt=""/></a>
                            </div>
                            <p></p>
                           
                        </div>
                    </div>

                  



                    {/* <!-- Single Footer Widget --> */}
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h5>CONTACT</h5>
                            </div>

                            <div className="contact-information">
                                <p><span>Address:</span> 290 Gurunanakpura Adarsh Nagar Jaipur</p>
                                <p><span>Phone:</span> 7790901214</p>
                                <p><span>Email:</span> plantalifee@gmail.com</p>
                                <p><span>Open hours:</span> Mon - Sun: 8 AM to 9 PM</p>
                                <p><span>Happy hours:</span> Sat: 2 PM to 4 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Footer Bottom Area --> */}
        <div className="footer-bottom-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="border-line"></div>
                    </div>
                    {/* <!-- Copywrite Text --> */}
                    <div className="col-12 col-md-6">
                        <div className="copywrite-text">
                            <p>&copy;
                                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                Copyright &copy;
                                <script>document.write(new Date().getFullYear());</script> All rights reserved <i className="fa fa-heart-o"
                                    aria-hidden="true"></i>
                                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                            </p>
                        </div>
                    </div>
                   
               
                </div>
            </div>
        </div>
    </footer>
            </div>
        );
    }
}

export default footer;