import * as actionTypes from "./actionTypes";
import axios from "../../axios/axios";

export const fetchPlantDataSuccess = (plantData) => {
  return {
    type: actionTypes.FETCH_PLANT_DATA_SUCCESS,
    plantData: plantData,
  };
};

export const fetchPlantDataFail = (error) => {
  return {
    type: actionTypes.FETCH_PLANT_DATA_FAIL,
    error: error,
  };
};

export const fetchPlantData = (plantType) => {
  return (dispatch) => {
    axios
      .post("/getPlantData", plantType)
      .then((response) => {
        let plantList = response.data;
        dispatch(fetchPlantDataSuccess(plantList));
      })
      .catch((error) => {
        dispatch(fetchPlantDataFail(error));
      });
  };
};
