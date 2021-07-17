import "./App.css";
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./components/login";
import NavBar from "./components/navBar";

class App extends Component {
  state = { user: "" };
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Switch>
            <NavBar user={this.state.user} />
            <Route path="/login" component={Login} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
