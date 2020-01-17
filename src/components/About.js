import React, { Component } from 'react';
import Progress from 'react-progressbar';

class About extends Component {
    render() {
        return (
            <div>
               <section className="about-us-area section-padding-100-0">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-12 col-lg-5">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading">
                        <h2>ABOUT US</h2>
                        <p>We are leading in the plants service fields.</p>
                    </div>
                    <p></p>

                    {/* <!-- Progress Bar Content Area --> */}
                    <div className="plantalife-progress-bar mb-50">
                        {/* <!-- Single Progress Bar --> */}
                        <div className="single_progress_bar">
                            <p>Office plants</p>
                            <div id="bar1" className="barfiller">
                                
                                <Progress completed={75} />
                               
                            </div>
                        </div>

                        {/* <!-- Single Progress Bar --> */}
                        <div className="single_progress_bar">
                            <p>Field manager</p>
                            <div id="bar2" className="barfiller">
                                
                                <Progress  completed={67} />
                               
                               
                            </div>
                        </div>

                        {/* <!-- Single Progress Bar --> */}
                        <div className="single_progress_bar">
                            <p>Landscape design</p>
                            <div id="bar3" className="barfiller">
                                
                                <Progress  completed={90} />
                                
                                
                            </div>
                        </div>

                        {/* <!-- Single Progress Bar --> */}
                        <div className="single_progress_bar">
                            <p>Garden Care</p>
                            <div id="bar4" className="barfiller">
                            <Progress  completed={80} />
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="plantalife-benefits-area">
                        <div className="row">
                            {/* <!-- Single Benefits Area --> */}
                            <div className="col-12 col-sm-6">
                                <div className="single-benefits-area">
                                    <img src={require("../static/img/core-img/b4.png")} alt=""/>
                                    <h5>Quality Products</h5>
                                    <p></p>
                                </div>
                            </div>

                            {/* <!-- Single Benefits Area --> */}
                            <div className="col-12 col-sm-6">
                                <div className="single-benefits-area">
                                    <img src={require("../static/img/core-img/b4.png")} alt=""/>
                                    <h5>Perfect Service</h5>
                                    <p></p>
                                </div>
                            </div>

                            {/* <!-- Single Benefits Area --> */}
                            <div className="col-12 col-sm-6">
                                <div className="single-benefits-area">
                                    <img src={require("../static/img/core-img/b3.png")} alt=""/>
                                    <h5>100% Natural</h5>
                                    <p></p>
                                </div>
                            </div>

                            {/* <!-- Single Benefits Area --> */}
                            <div className="col-12 col-sm-6">
                                <div className="single-benefits-area">
                                    <img src={require("../static/img/core-img/b4.png")} alt=""/>
                                    <h5>Environmentally friendly</h5>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="border-line"></div>
                </div>
            </div>
        </div>
    </section> 
            </div>
        );
    }
}

export default About;