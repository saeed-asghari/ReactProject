import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import * as userService from "../services/userService";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
class NewArticle extends Form {
  
  state = {
    data: { title: "", description: "", body: "", tagList: [] },
    errors: {},
    tags: [],
    filterTags: [],
  };
  
  schema = {
    title: Joi.string().required().label("Title"),
    description: Joi.optional(),
    body: Joi.optional(),
    tagList: Joi.optional(),
  };

  
  getAllTags = async () => {
    loadProgressBar()
    const tags = await userService.getAllTags();
    var tagsRow = tags.tags.slice(10).sort();
    this.setState({ tags: tagsRow, filterTags: tagsRow });
  };
  async componentDidMount() {
    await this.getAllTags();
    toast("Test");
    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_LEFT
    });
  }

  doSubmit = async () => {
    try {
      loadProgressBar()
      const { data } = this.state;
      await userService.createArticle(data);
    } catch (ex) {
      if (ex.response && ex.response.status === 422) {
        Object.keys(ex.response.data.errors).forEach((key) => {
          toast.error(ex.response.data.errors[key][0]);
        });
      }
    }
  };
  selectedTags = (event) => {
    const tagList = this.state.data.tagList;
    tagList.push(event.target.name);
    this.setState({ tagList: tagList });
  };
  filter = (event) => {
    let tags = this.state.tags;
    if (!event.target.value) {
      this.setState({ filterTags: tags });
    }
    let filtered = tags.filter((tag) => {
      return tag.toLowerCase().includes(event.target.value);
    });
    this.setState({ filterTags: filtered });
  };
  render() {
    toast.success("Hello"); 
    const filterTags = this.state.filterTags;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-9 p-3">

            <form onSubmit={this.handleSubmit}>
              {this.renderInput("title", "Title")}
              {this.renderInput("description", "Description")}
              {this.renderTextArea("body", "Body", "5")}
              {this.renderButton("Submit", "btn btn-primary")}
              </form>
            </div>
            <div className="col-3 p-3">
              <label>Search</label>
              <input
                type="text"
                onChange={this.filter}
                name="Search"
                className="form-control"
              />
              <ul className="list-unstyled">
                {filterTags.map((item, index) => (
                  <li key={index}>
                    <input
                      type="checkbox"
                      onChange={this.selectedTags}
                      name={item}
                    />
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
