import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <React.Fragment>
      <div className="col-2 px-1 bg-primary position-fixed" id="sticky-sidebar">
        <span className="text-white h2">Post</span>
        <div className="nav flex-column flex-nowrap vh-100 overflow-auto text-white p-2">
          <NavLink to="/articles" className="text-white h4  ml-3 active">
            {" "}
            All Articles{" "}
          </NavLink>
          <NavLink to="/articles/create" className="text-white h4 ml-3">
            {" "}
            New Article{" "}
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
