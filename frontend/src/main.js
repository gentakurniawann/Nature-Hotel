import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Dashboard from "./pages/dashboard/dashboard";
export default class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
      </Switch>
    );
  }
}
