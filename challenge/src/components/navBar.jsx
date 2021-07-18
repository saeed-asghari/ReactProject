import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand  flex-column flex-md-row bd-navbar Background-color-nav ">
          <div className="navbar-header">
            <span className="navbar-brand">
              <NavLink to="/" className="text-white">
                Challenge
              </NavLink>
            </span>
            <span className="text-white">{user && `Welcome ${user.username}`}</span>
          </div>
          <div id="navb" className="collapse navbar-collapse ">
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
              <ul class="nav navbar-nav ml-auto">
                <li>
                  <button className="btn btn-outline-info">
                    <NavLink to="/logout">Logout</NavLink>
                  </button>
                </li>
              </ul>
            )}
          </div>
        
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
