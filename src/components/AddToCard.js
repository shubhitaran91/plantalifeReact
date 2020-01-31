import React, { Component } from "react";

class AddToCard extends Component {
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
  render() {
    if (this.state.myPlant == null) {
      this.state.myPlant = [];
    }

    return (
      <div>
        <div
          id="cart-info"
          class="nav-info align-items-center cart-info d-flex justify-content-between mx-lg-5"
        >
          <span class="cart-info__icon mr-lg-3">
            <i
              class="fa fa-shopping-cart fa-lg"
              style={{ color: "white" }}
              onClick="window.location.href='./cart.html'"
            >
              <span
                class="badge badge-pill badge-danger"
                id="item-count"
                onClick="window.location.href='./cart.html'"
              >
                {this.state.myPlant.length}
              </span>
            </i>
          </span>
        </div>
      </div>
    );
  }
}

export default AddToCard;
