import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Form from "./common/form";
import Joi from "joi-browser";
class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("نام کاربری"),
    password: Joi.string().required().label("کلمه عبور"),
  };
  render() {
    return (
      <div className="justify-content-center row">
        <div className="col-md-5">
          <div className="p-4 card-group">
            <div className="p-4 card Background-color-login">
                <span className="text-center h1">Login</span>
                
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  {this.renderInput("email", "Email")}
                  {this.renderInput("password", "Password", "password")}
                  {this.renderButton("Login", "btn btn-primary btn-block mb-5")}

                  <div className="text-center">
                    <spam>
                      Don’t have account?
                      <NavLink to="/">
                        <spam>Register Now</spam>
                      </NavLink>
                    </spam>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
