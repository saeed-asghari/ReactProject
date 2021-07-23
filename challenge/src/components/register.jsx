import React from "react";
import Joi, { resolve } from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", username: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().min(8).label("Password"),
    username: Joi.string().required().label("Username"),
  };

  doSubmit = async () => {
    try {
      loadProgressBar()
      const data = { ...this.state.data };
      this.setState({ data });
      const response = await userService.register(this.state.data);
      this.props.history.push("/login");
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
              <span className="text-center h1">Register</span>
              <div className="p-4 card-body ">
                <form onSubmit={this.handleSubmit}>
                  {this.renderInput("username", "User")}
                  {this.renderInput("email", "Email")}
                  {this.renderInput("password", "Password","password")}
                  {this.renderButton("Register", "btn btn-primary btn-block mb-5")}
                  
                  <div className="text-center">
                    <span>
                    Already Registered?
                      <NavLink to="/login">
                        <span>Login</span>
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

export default RegisterForm;
