import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CartIcon extends Component {
  render() {
    return (
      <div className="nav-info align-items-center cart-info d-flex justify-content-between mx-lg-5">
        <span className="cart-info__icon mr-lg-3">
          <Link to="/cart">
            <i className="fa fa-shopping-cart fa-lg" style={{ color: "white" }}>
              <span className="badge badge-pill badge-danger">
                {this.props.cartValue.length}
              </span>
            </i>
          </Link>
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartValue: state.cart.cartValue,
  };
};

export default connect(mapStateToProps)(CartIcon);
