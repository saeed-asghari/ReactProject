import React from "react";
import Joi, { resolve } from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", username: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().min(5).label("Username"),
    username: Joi.string().required().label("Username"),
  };

  doSubmit = async () => {
    try {
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
        <div className="col-md-9 col-lg-7 col-xl-6">
          <div className="p-4 card-group">
            <div className="mx-4 card Background-color">
              <span className="text-center h1">Register</span>
              <div className="p-4 card-body ">
                <form onSubmit={this.handleSubmit}>
                  {this.renderInput("username", "User")}
                  {this.renderInput("email", "Email")}
                  {this.renderInput("password", "Password")}
                  {this.renderButton("Register", "btn btn-primary btn-block mb-5")}
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
