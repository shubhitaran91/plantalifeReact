import * as actionTypes from "./actionTypes";

export const addToCart = (addPlant) => {
  return {
    type: actionTypes.ADD_TO_CART,
    addPlant: addPlant,
  };
};

export const deleteFromCart = (index) => {
  return {
    type: actionTypes.DELETE_FROM_CART,
    index,
  };
};
