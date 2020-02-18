import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
class AddToCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myPlant: []
    };

    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({
      myPlant: JSON.parse(sessionStorage.getItem("myPlant"))
    });
  }

  onSubmit(){
    this.props.history.push({
      pathname: `/cart`
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
              onClick={this.onSubmit}
            >
              <span
                class="badge badge-pill badge-danger"
                id="item-count"
                onClick={this.onSubmit}
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

export default withRouter(AddToCard);
