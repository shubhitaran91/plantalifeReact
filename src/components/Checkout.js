import React, { Component } from "react";

import Background from "../static/img/bg-img/24.jpg";
import service from "../service/plantService";
import {
  Link,
  BrowserRouter as Router,
  Route,
  withRouter
} from "react-router-dom";
class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myPlant: [],
      total: [],
      userdata: "",
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      address: "",
      city: "",
      states: "",
      zip: "",
      notes: "",
      totalPrice: "",
      shippingCharges: "",
      totalCharges: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount = async () => {
    await this.setState({
      userdata: JSON.parse(sessionStorage.getItem("token")),
      myPlant: JSON.parse(sessionStorage.getItem("myPlant"))
    });

    await this.state.userdata.map(plant =>
      this.setState({
        userdata: plant
      })
    );
    console.log("userdata", this.state.userdata);
    await this.getValues();
  };

  async onSubmit() {
    const jsonObj = {
      fname: this.state.userdata.fname,
      lname: this.state.lname,
      email: this.state.email,
      mobile: this.state.mobile,
      address: this.state.address,
      city: this.state.city,
      state: this.state.states,
      zip: this.state.zip,
      notes: this.state.notes,
      products: this.state.myPlant,
      subtotal: this.state.totalPrice,
      shipping: this.state.shippingCharges,
      totalAmt: this.state.totalCharges
    };

    //const getCheckoutData = await service.getCheckoutData(jsonObj);

    console.log("getCheckoutData", jsonObj);
  }

  logout() {
    const { history } = this.props;
    sessionStorage.clear();
    history.push({
      pathname: "/"
    });
  }

  updateInputValue = async e => {
    await this.setState({
      [e.target.name]: e.target.value
    });
  };

  getValues = async () => {
    var totalPrice = 0;
    var purchasePrice;
    let pi = [];

    for (let i = 0; i < this.state.myPlant.length; i++) {
      purchasePrice = this.state.myPlant[i].prices;
      totalPrice = totalPrice + parseInt(purchasePrice);
      var shippingCharges = 10;
      var totalCharges = totalPrice + shippingCharges;
      this.setState({
        totalPrice: totalPrice,
        totalCharges: totalCharges,
        shippingCharges: shippingCharges
      });
      pi.push(totalPrice, shippingCharges, totalCharges);
      this.setState({ total: pi });
    }
  };

  render() {
    

    const {
      
      lname,
      email,
      mobile,
      address,
      city,
      states,
      zip,
      notes
    } = this.state;

    // const pi = this.getValues(this.totalPrice,this.shippingCharges ,this.totalCharges)

    // console.log(this.state.total[0]);

    if (this.state.myPlant == null) {
      this.state.myPlant = [];
    }

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
                        href="#"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="7790901214"
                      >
                        <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                        <span>Call Us: 7790901214</span>
                      </a>
                    </div>

                    <div className="top-header-meta d-flex">
                      {/* <div class="login"> */}

                      <button onClick={this.logout}>
                        Logout <i class="fa fa-user" aria-hidden="true"></i>{" "}
                      </button>

                      {/* </div> */}
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
              <Link to="home" className="nav-brand">
                <img
                  src="img/core-img/logo.png"
                  height="100"
                  width="100"
                  alt=""
                />
              </Link>

              <ul>
                <li>
                  <a href="index.html"></a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {/* <!-- ##### Header Area End ##### --> */}

        {/* <!-- ##### Breadcrumb Area Start ##### --> */}
        <div className="breadcrumb-area">
          {/* <!-- Top Breadcrumb Area --> */}
          <div
            className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center"
            style={{ backgroundImage: `url(${Background})` }}
          >
            <h2>Checkout</h2>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">
                        <i className="fa fa-home"></i> Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Checkout
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ##### Breadcrumb Area End ##### --> */}

        <div className="checkout_area mb-100">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-12 col-lg-7">
                <div className="checkout_details_area clearfix">
                  <h5>Billing Details</h5>
                  <form action="#" method="post">
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label for="first_name">
                          First Name<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="fname"
                          className="form-control"
                          value={this.state.userdata.fname}
                          // onChange={this.updateInputValue.bind(this)}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="last_name">
                          Last Name <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="lname"
                          value={lname}
                          onChange={this.updateInputValue.bind(this)}
                          required
                        />
                      </div>
                      <div className="col-12 mb-4">
                        <label for="email_address">
                          Email Address <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={email}
                          onChange={this.updateInputValue.bind(this)}
                          required
                        />
                      </div>
                      <div className="col-12 mb-4">
                        <label for="phone_number">
                          Phone Number<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="mobile"
                          value={mobile}
                          onChange={this.updateInputValue.bind(this)}
                          required
                        />
                      </div>
                      <div className="col-12 mb-4">
                        <label for="address">
                          Address<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          value={address}
                          onChange={this.updateInputValue.bind(this)}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label for="city">
                          Town/City<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          value={city}
                          onChange={this.updateInputValue.bind(this)}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label for="state">
                          State/Province<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="states"
                          value={states}
                          onChange={this.updateInputValue.bind(this)}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label for="postcode">Postcode/Zip</label>
                        <input
                          type="text"
                          className="form-control"
                          name="zip"
                          value={zip}
                          onChange={this.updateInputValue.bind(this)}
                          required
                        />
                      </div>
                      <div className="col-md-12 mb-4">
                        <label for="order-notes">Order Notes</label>
                        <textarea
                          className="form-control"
                          id="notes"
                          name="notes"
                          value={notes}
                          onChange={this.updateInputValue.bind(this)}
                          cols="30"
                          rows="10"
                          placeholder="Notes about your order, e.g. special notes for delivery."
                        ></textarea>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="checkout-content">
                  <h5 className="title--">Your Order</h5>
                  <div className="products">
                    <div className="products-data single-products d-flex justify-content-between align-items-center">
                      <h5>Products:</h5>
                      <table>
                        {this.state.myPlant.map(plant => {
                          return (
                            <tr>
                              <td>
                                {" "}
                                {`${plant.names} : \u20B9${plant.prices}`}
                              </td>
                            </tr>
                          );
                        })}
                      </table>
                    </div>
                  </div>
                  {/* {total.map(total => {
                    return(
                      */}
                  <div>
                    <div className="subtotal d-flex justify-content-between align-items-center">
                      <h5>Subtotal</h5>
                      <h5 id="subtotal">{`\u20B9${this.state.total[0]}.00`}</h5>
                    </div>
                    <div className="shipping d-flex justify-content-between align-items-center">
                      <h5>Shipping</h5>
                      <h5 id="shipping">{`\u20B9${this.state.total[1]}.00`}</h5>
                    </div>
                    <div className="order-total d-flex justify-content-between align-items-center">
                      <h5>Order Total</h5>
                      <h5 id="total">{`\u20B9${this.state.total[2]}.00`}</h5>
                    </div>
                  </div>
                  {/* ); 
  })}  */}

                  <div className="checkout-btn mt-30">
                    <button
                      onClick={this.onSubmit}
                      className="btn plantalife-btn w-100"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Checkout);
