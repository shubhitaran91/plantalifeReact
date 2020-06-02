import React from "react";
import { Link } from "react-router-dom";

const cartTotal = (props) => {
  return (
    <div
      class="col-sm-3"
      style={{ "margin-left": "74%", "margin-bottom": "-139px" }}
    >
      <div class="cart-totals-area mt-70">
        <h5 class="title">Cart Total</h5>
        <div class="subtotal d-flex justify-content-between">
          <h5>Total</h5>
          <h5>{`\u20B9${props.totalPrice}`}</h5>
        </div>
        <div class="checkout-btn">
          <Link to="checkout" class="btn plantalife-btn w-100">
            PROCEED TO CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default cartTotal;
