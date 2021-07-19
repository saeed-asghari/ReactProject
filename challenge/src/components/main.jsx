import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import Logout from "./logout";
import AllArticles from "./allArticles";
const Main = () => {
  return (
    <React.Fragment>
      <main className="container col-9 offset-2">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/allArticles" component={AllArticles} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default Main;
