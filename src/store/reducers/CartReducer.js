import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cartValue: [],
  error: false,
  totalPrice: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartValue: state.cartValue.concat(action.addPlant),
        totalPrice: state.totalPrice + parseInt(action.addPlant["plant_price"]),
      };
    case actionTypes.DELETE_FROM_CART:
      const updatedCartValue = state.cartValue.filter((plantValue, index) => {
        if (index !== action.index) {
          return true;
        }
        state.totalPrice =
          state.totalPrice - parseInt(plantValue["plant_price"]);
        return false;
      });
      return {
        ...state,
        cartValue: updatedCartValue,
      };
    default:
      return state;
  }
};

export default reducer;
