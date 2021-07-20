import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import * as userService from "../services/userService";
class NewArticle extends Form {
  state = {
    data: { title: "", description: "", body: "", tagList: "" },
    errors: {},
    tags: [],
    selectedTags:[],
  };
  schema = {
    title: Joi.string().required().label("Title"),
    description: Joi.optional(),
    body: Joi.optional(),
    tagList: Joi.optional(),
  };
  getAllTags = async () => {
    const tags = await userService.getAllTags();
    this.setState({ tags: tags.tags.slice(10).sort() });
  };
  async componentDidMount() {
    await this.getAllTags();
  }

  onChange = (event) => {
    const selectedTags = this.state.selectedTags;
     selectedTags.push(event.target.name);
     this.setState({selectedTags:selectedTags})
  };

  render() {
    const tags = this.state.tags;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-9 p-3">
              {this.renderInput("title", "Title")}
              {this.renderInput("description", "Description")}
              {this.renderTextArea("body", "Body", "5")}
              {this.renderButton("Submit", "btn btn-primary")}
            </div>
            <div className="col-3">
              <ul className="list-unstyled">
                {tags.map((item, index) => (
                  <li key={index}>
                    <input type="checkbox" onChange={this.onChange} name={item}/>
                    <label>{item}</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NewArticle;
