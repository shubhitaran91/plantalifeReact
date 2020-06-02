import * as actionTypes from "../actions/actionTypes";

const initialState = {
  plantData: [],
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PLANT_DATA_SUCCESS:
      return {
        ...state,
        plantData: action.plantData,
      };
    case actionTypes.FETCH_PLANT_DATA_FAIL:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
