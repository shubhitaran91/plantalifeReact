import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Background from "../static/img/bg-img/24.jpg";
import Header from "./Header";
import { Link } from "react-router-dom";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myPlant: []
    };
  }

  componentDidMount() {
    this.setState({
      myPlant: JSON.parse(sessionStorage.getItem("myPlant"))
    });
  }

  getprice(totalPrice) {
    var totalPrice = 0;
    var purchasePrice;
    console.log(this.state.myPlant.length);
    for (let i = 0; i < this.state.myPlant.length; i++) {
      purchasePrice = this.state.myPlant[i].prices;
      console.log("purchasePrice", purchasePrice);
      totalPrice = totalPrice + parseInt(purchasePrice);
    }
    console.log("================", totalPrice);
    return totalPrice;
  }
  render() {
    var pi = this.getprice(this.totalPrice);

    if (this.state.myPlant == null) {
      this.state.myPlant = [];
    }

    return (
      <div>
        <Header />
        <div class="breadcrumb-area">
          <div
            class="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center"
            style={{ backgroundImage: `url(${Background})` }}
          >
            <h2>Cart</h2>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-12">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">
                        <i class="fa fa-home"></i> Home
                      </a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Cart
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              {this.state.myPlant.map(plant => {
                return (
                  <TableRow>
                    <TableCell>
                      <img
                        src={"data:image/png;base64," + plant.photos}
                        height={50}
                        width={70}
                      />
                    </TableCell>

                    <TableCell>{plant.names}</TableCell>
                    <TableCell>{plant.prices}</TableCell>
                  </TableRow>
                );
              })}
            </TableHead>
          </Table>
        </TableContainer>
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="coupon-discount mt-70">
              <h5>COUPON DISCOUNT</h5>
              <p>
                Coupons can be applied in the cart prior to checkout. Add an
                eligible item from the booth of the seller that created the
                coupon code to your cart. Click the green "Apply code" button to
                add the coupon to your order. The order total will update to
                indicate the savings specific to the coupon code entered.
              </p>
              <form action="#" method="post">
                <input
                  type="text"
                  name="coupon-code"
                  placeholder="Enter your coupon code"
                />
                <button type="submit">APPLY COUPON</button>
              </form>
            </div>
          </div>

          <div class="col-12 col-lg-6">
            <div class="cart-totals-area mt-70">
              <h5 class="title--">Cart Total</h5>
              <div class="subtotal d-flex justify-content-between">
                <h5>Total</h5>
                <h5>{`\u20B9${pi}`}</h5>
              </div>

              <div class="checkout-btn">
                <Link to="checkout" class="btn plantalife-btn w-100">
                  PROCEED TO CHECKOUT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
