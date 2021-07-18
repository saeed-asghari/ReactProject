import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./login";
const Main = () => {
  return (
    <React.Fragment>
      <main className="container col-9 offset-3">
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default Main;
