import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./app.scss";
// import Home from "./views/Home.js";
import Login from "./views/login/Index";
import Home from "./views/home/Index";
//私有组件
import PrivateRouter from "./components/privateRouter/index";

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
            <Route exact render={() => <Login />} path="/" />
            <PrivateRouter component={Home} path="/home" />
            {/* <Route exact render={() => <Home />} path="/home" /> */}

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
