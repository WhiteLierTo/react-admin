import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./views/Home.js";
import About from "./views/About.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={About} exact path="/about" />
        </Switch>
      </BrowserRouter>
    );
  }
}
