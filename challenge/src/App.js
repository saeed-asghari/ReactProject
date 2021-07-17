import "./App.css";
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./components/login";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <Switch>
          <Route path="/login" component={Login} />
          
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
