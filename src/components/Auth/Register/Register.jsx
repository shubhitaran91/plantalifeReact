import React, { Component } from "react";
import "../Login/LoginModal/LoginModal.css";
import { Link } from "react-router-dom";
import Loader from "../../common/Loader/Loader";
import {
  createUser,
  updateUserDisplayName,
} from "../../../firebase/functions/Auth/Register/register";
import Notiflix from "notiflix-react";

class Register extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    fname: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = async () => {
    Notiflix.Loading.Standard();
    const { email, password, fname } = this.state;
    const userRegistered = await createUser(email, password);
    if (userRegistered["email"] !== undefined) {
      const updateUserName = await updateUserDisplayName(fname);
      Notiflix.Loading.Remove();
      Notiflix.Notify.Success("Successfully Registered! Please login");
      this.props.history.push("/login");
    } else {
      Notiflix.Notify.Failure(userRegistered);
      Notiflix.Loading.Remove();
      this.setState({
        email: "",
        password: "",
        fname: "",
      });
    }
  };
  render() {
    const { fname, password, email, confirmPassword } = this.state;

    return (
      <>
        <div className="container-fluid background">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div class="brand_logo_container">
                <img
                  src={require("../../../static/img/core-img/logo.png")}
                  class="brand_logo"
                  alt="Logo"
                />
              </div>
              <div className="card-header">
                <h3>SIGN</h3>
              </div>
              <div className="card-body">
                <div className="input-group form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    name="fname"
                    value={fname}
                    onChange={this.handleChange}
                  />
                </div>
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
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-group form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox" />
                  Remember Me
                </div>
                <div className="form-group">
                  <button
                    className="btn float-left login_btn"
                    style={{ backgroundColor: "#dd4b39" }}
                    onClick={() => this.props.history.push("/")}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary float-right login_btn"
                    onClick={this.onSubmit}
                  >
                    Register
                  </button>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  Already have an account?
                  <Link to="/login" className="signUp">
                    <strong>Sign In</strong>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
