import React, { Component } from "react";
import "../components/login.css";
import service from "../service/plantService";
import Notiflix from "notiflix-react";
import {
  Link,
  BrowserRouter as Router,
  Route,
  withRouter
} from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange = async e => {
    await this.setState({
      [e.target.name]: e.target.value
    });
  };
  async onSubmit() {
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    const logindata = await service.getLogin(data);
    sessionStorage.setItem("token", JSON.stringify(logindata.data.userInfo));
    console.log("logindata", logindata);
    if (logindata.data.message == "Please provide all Information") {
      return;
    }else if (logindata.data.message == "Incorrect Password") {
      return;
    }else if(logindata.data.message=='Email is not registered with us, please register your email') {
     
        return;
    }
     else {
      var data1=JSON.parse(sessionStorage.getItem("token"))
      var id=data1[0]._id
      // window.location.assign(`checkout?${token}`)
      this.props.history.push({
        pathname: `/checkout/${id}`
      });
    }
  }
  render() {
    const { email, password } = this.state;
    return (
      <>
        <div className="container-fluid background">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div class="brand_logo_container">
                <img
                  src={require("../static/img/core-img/logo.png")}
                  class="brand_logo"
                  alt="Logo"
                />
              </div>
              <div className="card-header" style={{ marginBottom: "33px" }}>
                <h3></h3>
              </div>
              <div className="card-body">
                <div className="input-group form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className="input-group form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox" />
                  Remember Me
                </div>
                <div className="form-group">
                  <button
                    className="btn float-right login_btn"
                    onClick={this.onSubmit}
                  >
                    Login
                  </button>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  Don't have an account?
                  <Link to="register">
                    <strong>Sign Up</strong>
                  </Link>
                </div>
                <div className="d-flex justify-content-center">
                  <a href="#">Forgot your password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
