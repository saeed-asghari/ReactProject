import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import Logout from "./logout";
const Main = () => {
  return (
    <React.Fragment>
      <main className="container col-9 offset-3">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default Main;
