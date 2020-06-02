import React from "react";
import "./PlaceOrder.css";
import { connect } from "react-redux";

const placeOrder = (props) => {
  const handleOrderSubmit = () => {
    if (props.authStatus === false) {
      props.history.push("/login");
    } else {
    }
  };

  return (
    <div className="col-12 col-lg-4 OrderDetails">
      <div className="checkout-content">
        <h5 className="title--">Your Order</h5>
        <div className="products">
          <div className="products-data single-products d-flex justify-content-between align-items-center">
            <h5>Products:</h5>
            <table>
              {props.cartData.map((plant) => {
                return (
                  <tr>
                    <td>{`${plant.plant_name}`}</td>
                    <td>{`:\u20B9${plant.plant_price}`}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
        <div>
          <div className="subtotal d-flex justify-content-between align-items-center">
            <h5>Subtotal</h5>
            <h5>{`\u20B9${props.totalPrice}.00`}</h5>
          </div>
          <div className="shipping d-flex justify-content-between align-items-center">
            <h5>Shipping</h5>
            <h5>{`\u20B9${40}.00`}</h5>
          </div>
          <div className="order-total d-flex justify-content-between align-items-center">
            <h5>Order Total</h5>
            <h5>{`\u20B9${props.totalPrice + 40}.00`}</h5>
          </div>
        </div>

        <div className="checkout-btn mt-30">
          <button
            onClick={handleOrderSubmit}
            className="btn plantalife-btn w-100"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartData: state.cart.cartValue,
    totalPrice: state.cart.totalPrice,
    authStatus: state.auth.authStatus,
  };
};

export default connect(mapStateToProps)(placeOrder);
