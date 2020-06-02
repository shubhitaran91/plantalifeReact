import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ViewListIcon from "@material-ui/icons/ViewList";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { connect } from "react-redux";

import "./Login.css";

function Login(props) {
  //  console.log("authData", props.authData);

  let textOnButton = "";
  let optionsShow = "";
  if (
    props.authData.displayName !== null &&
    props.authData.displayName !== undefined
  ) {
    var name = props.authData.displayName.split(" ");
    textOnButton = (
      <Button className="Login" variant="">
        {name[0]}
      </Button>
    );

    optionsShow = (
      <div class="dropdown-content">
        <Link to="/">
          {" "}
          <AccountCircleIcon /> My Profile
        </Link>
        <Link to="/">
          {" "}
          <ViewListIcon />
          Orders
        </Link>
        <Link to="/logout">
          {" "}
          <PowerSettingsNewIcon />
          Logout
        </Link>
      </div>
    );
  } else {
    textOnButton = (
      <Button
        className="Login"
        variant=""
        onClick={() => props.history.replace("/login")}
      >
        Login
      </Button>
    );

    optionsShow = (
      <div class="dropdown-content">
        <Link to="/register">
          <AddToQueueIcon />
          Sign Up
        </Link>
        <Link to="/">
          {" "}
          <AccountCircleIcon /> My Profile
        </Link>
        <Link to="/">
          {" "}
          <ViewListIcon />
          Orders
        </Link>
      </div>
    );
  }

  return (
    <div className="dropdown">
      {textOnButton}
      {optionsShow}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authData: state.auth.authData,
  };
};

export default connect(mapStateToProps)(Login);
