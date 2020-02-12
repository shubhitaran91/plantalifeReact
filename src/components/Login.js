import React, { Component } from "react";
import "../components/login.css";
import {
  Link,
  BrowserRouter as Router,
  Route,
  withRouter
} from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="container-fluid background">
          <div className="d-flex justify-content-center h-100">
          
            <div className="card">
            
            <div class="brand_logo_container">
						<img src={require('../static/img/core-img/logo.png')} class="brand_logo" alt="Logo"/>
					</div>
              <div className="card-header" style={{marginBottom: "33px"}}>
                <h3></h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="input-group form-group">
                    
                    <input
                      type="text"
                      className="form-control"
                      placeholder="username"
                    />
                  </div>
                  <div className="input-group form-group">
                    
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                    />
                  </div>
                  <div className="row align-items-center remember">
                    <input type="checkbox" />
                    Remember Me
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Login"
                      className="btn float-right login_btn"
                    />
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  Don't have an account?<Link to="register"><strong>Sign Up</strong></Link>
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
