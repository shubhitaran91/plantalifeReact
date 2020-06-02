import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import { Redirect } from "react-router-dom";
import { logoutUser } from "../../../firebase/functions/Auth/Login/login";

const Logout = (props) => {
  useEffect(() => {
    logoutUser();
    props.onLogout();
  }, []);

  return <Redirect to="/"></Redirect>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(actions.logout());
    },
  };
};

export default connect(null, mapDispatchToProps)(Logout);
