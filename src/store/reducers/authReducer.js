import * as actionTypes from "../actions/actionTypes";

const initialState = {
  authData: {},
  authStatus: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        authStatus: true,
        authData: action.authData,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        authData: "",
        authStatus: false,
      };
    default:
      return state;
  }
};

export default reducer;
