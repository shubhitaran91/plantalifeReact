import React, { Component } from "react";
import Header from "../../Header/HeaderLayout/Header";
import PageHeader from "../../common/PageHeader/PageHeader";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";
import DetailsContent from "./DetailsContent/DetailsContent";

class PlantsDetail extends Component {
  addToCartHandler = (addPlant) => {
    this.props.onAddToCart(addPlant);
    this.props.history.replace("/cart");
  };

  render() {
    const showDetails = this.props.plantData.filter(
      (singlePlant) => singlePlant.id === this.props.match.params.id
    );

    return (
      <div>
        <Header {...this.props} />
        <PageHeader pageName={"Plant Details"} />
        <DetailsContent
          plantDetails={showDetails}
          addToCart={() => this.addToCartHandler(showDetails[0])}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    plantData: state.plant.plantData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (addPlant) => dispatch(actions.addToCart(addPlant)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlantsDetail);
