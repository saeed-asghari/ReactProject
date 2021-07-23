import React from "react";
import { Route, Switch ,Redirect} from "react-router-dom";
import ProtectedRoute from "./common/protectedRoute";
import Login from "./login";
import Register from "./register";
import Logout from "./logout";
import AllArticles from "./allArticles";
import NewArticle from "./newArticle";
import NotFound from "./notFound";

const Main = () => {
  return (
    <React.Fragment>
      <main className="container col-9 offset-2">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path="/articles"  component={AllArticles} />
          <ProtectedRoute exact path="/articles/page/:page"  component={AllArticles} />
          <ProtectedRoute exact path="/articles/create" component={NewArticle} />
          <Route path="/logout" component={Logout} />
          <Redirect from="/" exact to="/articles" />
          <Route path='/404' component={NotFound}></Route>
          <Redirect  to='/404' />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default Main;
