import React, { Component } from "react";
import {
  Link,
  BrowserRouter as Router,
  Route,
  withRouter
} from "react-router-dom";
import plantService from "../service/plantService";
class services extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleInput(e, name) {
    console.log("value of state", name);
    const { history } = this.props;
    
  
    history.push({
      pathname: `plantData`,
      search: `?plant_type=${name}`,
    });
  }
  render() {
  
    return (
      <div>
        <section className="our-services-area bg-gray section-padding-150-0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* <!-- Section Heading --> */}
                <div className="section-heading text-center">
                  <h2>OUR PRODUCTS</h2>
                  <p>We provide the perfect service for you.</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-12">
              <div className="plantalife-benefits-area">
                <div className="row">
                  {/* <!-- Single Benefits Area --> */}
                  <div className="col-12 col-sm-2">
                    <div className="single-benefits-area">
                      {/* <Link to="/indoor"><h2>fygsyg</h2></Link> */}
                      <a onClick={e => this.handleInput(e, "Indoor")}>
                        <img
                          src={require("../static/img/core-img/4.png")}
                          height={150}
                          width={150}
                          alt=""
                        />
                      </a>

                      <h5 style={{ textAlign: "center" }}>Indoor Plants</h5>
                      <p></p>
                    </div>
                  </div>

                  {/* <!-- Single Benefits Area --> */}
                  <div className="col-12 col-sm-2">
                    <div className="single-benefits-area">
                      <a onClick={e => this.handleInput(e, "Outdoor")}>
                        {" "}
                        <img
                          src={require("../static/img/core-img/b2.png")}
                          height={150}
                          width={150}
                          alt=""
                        />
                      </a>
                      <h5 style={{ textAlign: "center" }}>Outdoor Plants</h5>
                      <p></p>
                    </div>
                  </div>

                  {/* <!-- Single Benefits Area --> */}
                  <div className="col-12 col-sm-2">
                    <div className="single-benefits-area">
                      <a onClick={e => this.handleInput(e, "pots")}>
                        <img
                          src={require("../static/img/core-img/3.42")}
                          height={150}
                          width={150}
                          alt=""
                        />
                      </a>

                      <h5 style={{ textAlign: "center" }}>Pots</h5>
                      <p></p>
                    </div>
                  </div>

                  {/* <!-- Single Benefits Area --> */}
                  <div className="col-12 col-sm-2">
                    <div className="single-benefits-area">
                      <a onClick={e => this.handleInput(e, "seeds-grass")}>
                        <img
                          src={require("../static/img/core-img/2.png")}
                          height={150}
                          width={150}
                          alt=""
                        />
                      </a>
                      <h5 style={{ textAlign: "center" }}>Seeds/Grass</h5>
                      <p></p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-2">
                    <div className="single-benefits-area">
                      <a onClick={e => this.handleInput(e, "gardening")}>
                        <img
                          src={require("../static/img/core-img/6.18")}
                          height={150}
                          width={150}
                          alt=""
                        />
                      </a>
                      <h5 style={{ textAlign: "center" }}>Gardening Tools</h5>
                      <p></p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-2">
                    <div className="single-benefits-area">
                      <a onClick={e => this.handleInput(e, "homedecor")}>
                        <img
                          src={require("../static/img/core-img/1.22")}
                          height={150}
                          width={150}
                          alt=""
                        />
                      </a>
                      <h5 style={{ textAlign: "center" }}>Home Decor</h5>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(services);
