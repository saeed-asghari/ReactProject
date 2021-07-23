import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
import Main from "./components/main";
import auth from "./services/authService";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { alpha } from '@material-ui/core/styles'
class App extends Component {
  state = { user: "" };
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const user = this.state.user;
    return (
      <React.Fragment>
        <ToastContainer/>
        <NavBar user={user} />
        {user &&(<SideBar/>)}
        
        <Main/>
      </React.Fragment>
    );
  }
}

export default App;
