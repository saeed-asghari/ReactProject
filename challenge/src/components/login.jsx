import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Form from "./common/form";
import Joi from "joi-browser";
import auth from "../services/authService";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };
  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.email, data.password);
      const { state } = this.props.location;
     window.location = state ? state.from.pathname : '/'; //ارسال کاربر به صفحه ای که ازش اومده
    } catch (ex) {
      if (ex.response && ex.response.status === 422) {
        Object.keys(ex.response.data.errors).forEach(key => {
            toast.error(ex.response.data.errors[key][0]);
        });
      }
    }
  };
  render() {
    return (
      <div className="justify-content-center row">
        <div className="col-md-5">
          <div className="p-4 card-group">
            <div className="p-4 card Background-color">
                <span className="text-center h1">Login</span>
                
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  {this.renderInput("email", "Email")}
                  {this.renderInput("password", "Password", "password")}
                  {this.renderButton("Login", "btn btn-primary btn-block mb-5")}

                  <div className="text-center">
                    <span>
                      Don’t have account?
                      <NavLink to="/register">
                        <span>Register Now</span>
                      </NavLink>
                    </span>
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
