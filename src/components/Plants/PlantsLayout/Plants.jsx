import React, { useState, useEffect } from "react";
import Footer from "../../Footer/FooterLayout/Footer";
import axios from "axios";
import Notiflix from "notiflix-react";
import PageHeader from "../../common/PageHeader/PageHeader";
import PlantsContent from "../PlantsContent/PlantsContent";
import Header from "../../Header/HeaderLayout/Header";
import Loader from "../../common/Loader/Loader";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";

const Plants = (props) => {
  const query = new URLSearchParams(props.location.search);
  let plantType = {};
  for (let param of query.entries()) {
    plantType[param[0]] = param[1];
  }

  const redirectToCartPage = (addPlant) => {
    props.onAddToCart(addPlant);
    props.history.push("/cart");
  };

  let showPlantPage = null;

  if (
    props.plantData.length &&
    props.plantData[0].plant_type === plantType.plant_type
  ) {
    showPlantPage = (
      <div>
        <Header {...props} />
        <PageHeader pageName={plantType.plant_type} />
        <PlantsContent
          plantData={props.plantData}
          addToCart={redirectToCartPage}
          {...props}
        />
        <Footer />
      </div>
    );
  } else {
    props.onFetchPlantData(plantType);
    showPlantPage = <Loader />;
  }

  return showPlantPage;
};

const mapStateToProps = (state) => {
  return {
    plantData: state.plant.plantData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPlantData: (plantType) =>
      dispatch(actions.fetchPlantData(plantType)),
    onAddToCart: (addPlant) => dispatch(actions.addToCart(addPlant)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Plants);
