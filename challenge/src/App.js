import "./App.css";
import React, { Component } from "react";

import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
import Main from "./components/main";

class App extends Component {
  state = { user: "" };
  render() {
    return (
      <React.Fragment>
        <NavBar user={this.state.user} />
        <SideBar/>
        <Main/>
      </React.Fragment>
    );
  }
}

export default App;
