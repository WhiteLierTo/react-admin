import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./app.scss";
// import Home from "./views/Home.js";
import Login from "./views/login/Index";
import Home from "./views/home/Index";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="title">
        <BrowserRouter>
          <Switch>
            <Route component={Login} exact path="/" />
            <Route component={Home} exact path="/home" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
