import React, { Component } from "react";
import "./LoginModal.css";
import Notiflix from "notiflix-react";
import { Link } from "react-router-dom";
import {
  loginUserWithFB,
  loginUserWithGoogle,
  loginUserWithEmail,
} from "../../../../firebase/functions/Auth/Login/login";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";
class LoginModal extends Component {
  state = {
    email: "",
    password: "",
    authData: {},
  };
  handleChange = async (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = async (loginType) => {
    Notiflix.Loading.Standard();
    if (loginType === "fb") {
      const userLoginWithFB = await loginUserWithFB();
      if (userLoginWithFB["email"] !== undefined) {
        Notiflix.Loading.Remove();
        this.state.authData = {
          email: userLoginWithFB["email"],
          displayName: userLoginWithFB["displayName"],
        };
        this.props.history.push("/");
      } else {
        Notiflix.Notify.Failure(userLoginWithFB);
        Notiflix.Loading.Remove();
      }
    } else if (loginType === "google") {
      const userLoginWithGoogle = await loginUserWithGoogle();
      if (userLoginWithGoogle["email"] !== undefined) {
        Notiflix.Loading.Remove();
        this.state.authData = {
          email: userLoginWithGoogle["email"],
          displayName: userLoginWithGoogle["displayName"],
        };
        this.props.history.push("/");
      } else {
        Notiflix.Notify.Failure(userLoginWithGoogle);
        Notiflix.Loading.Remove();
      }
    } else {
      const userLoginWithEmail = await loginUserWithEmail(
        this.state.email,
        this.state.password
      );
      if (userLoginWithEmail["email"] !== undefined) {
        Notiflix.Loading.Remove();
        this.state.authData = {
          email: userLoginWithEmail["email"],
          displayName: userLoginWithEmail["displayName"],
        };
        this.props.history.push("/");
      } else {
        Notiflix.Notify.Failure(userLoginWithEmail);
        Notiflix.Loading.Remove();
      }
    }
    this.props.onAuthData(this.state.authData);
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="container-fluid background">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div class="brand_logo_container">
              <img
                src={require("../../../../static/img/core-img/logo.png")}
                class="brand_logo"
                alt="Logo"
              />
            </div>
            <div className="card-header">
              <h3>LOGIN</h3>
            </div>
            <div className="card-body">
              <div className="input-group form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-group form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="row align-items-center remember">
                <input type="checkbox" />
                Remember Me
                <Link to="/" className="forgot-password">
                  Forgot Password?
                </Link>
              </div>
              <button
                className="btn float-left login_btn"
                style={{ backgroundColor: "#dd4b39" }}
                onClick={() => this.props.history.push("/")}
              >
                Cancel
              </button>

              <button
                className="btn float-right login_btn"
                onClick={() => this.handleLogin("normal")}
              >
                LogIn
              </button>
            </div>
            <button
              class="loginBtn loginBtn--facebook"
              onClick={() => this.handleLogin("fb")}
            >
              Login with Facebook
            </button>

            <button
              class="loginBtn loginBtn--google"
              onClick={() => this.handleLogin("google")}
            >
              Login with Google
            </button>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?
                <Link to="/register" className="signUp">
                  <strong>Sign Up</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthData: (authData) => {
      dispatch(actions.login(authData));
    },
  };
};

export default connect(null, mapDispatchToProps)(LoginModal);
