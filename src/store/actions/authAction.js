import * as actionTypes from "./actionTypes";

export const login = (authData) => {
  return {
    type: actionTypes.LOGIN,
    authData,
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
