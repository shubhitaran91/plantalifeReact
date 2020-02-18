import React, { Component } from "react";
import "../components/login.css";
import { Link } from "react-router-dom";
import service from "../service/plantService";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fname: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  // componentDidMount = () => {};

  handleChange = async e => {
    await this.setState({
      [e.target.name]: e.target.value
    });
  };

   async onSubmit() {
    const data = {
      fname: this.state.name,
      password: this.state.password,
      email: this.state.email
    };

    const registerdata = await service.getregister(data);

    console.log("registerdata", registerdata);
    if(registerdata.data.message=='Please provide all Information'){
      return
    }else{
    this.props.history.push({
      pathname: `/login`,
      
    });
  }
  }
  render() {
    const { fname, password, email } = this.state;

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
                      placeholder="username"
                      name="fname"
                      value={fname}
                      onChange={this.handleChange.bind(this)}
                      
                    />
                  </div>
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
                      className="btn btn-primary float-right login_btn"
                      onClick={this.onSubmit}
                    >Register</button>
                  </div>
                
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  Don't have an account?
                  <Link to="login">
                    <strong>Sign In</strong>
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

export default Register;
