import "./App.css";
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./components/login";
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";

class App extends Component {
  state = { user: "" };
  render() {
    return (
      <React.Fragment>
        <NavBar user={this.state.user} />
        <SideBar/>
        <main className="container col-9 offset-3">
          <Switch>
            <Route path="/login" component={Login} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
