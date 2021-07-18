import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand  flex-column flex-md-row bd-navbar Background-color-nav ">
        <span className="navbar-brand">
          <NavLink to="/" className="text-white"> Challenge </NavLink>
        </span>
        <span className="text-white">
          WelCome {user.username}
        </span>
        <div id="navb" className="navbar-collapse collapse hide">
          {!user && (
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/login"> Login </NavLink> /
              </li>
              <li className="nav-item">
                <NavLink to="/register"> Register </NavLink>
              </li>
            </ul>
          )}
          {user && (
            <button className="btn btn-outline-info">
              <NavLink to="/logout">Logout</NavLink>
            </button>
          )}
        </div>
            </nav>
    </React.Fragment>
  );
};

export default NavBar;
