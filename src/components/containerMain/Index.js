import React, { Component, Fragment } from "react";
import { Switch } from "react-router-dom";
//组件
import User from "../../views/user/index";
import UserAdd from "../../views/user/Add";
//私有路由组件
//私有组件方法
import PrivateRouter from "../privateRouter/index";

export default class ContainerMain extends Component {
  constructor(prpos) {
    super(prpos);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Switch>
          <PrivateRouter exact path="/home/user/list" component={User}></PrivateRouter>
          <PrivateRouter exact path="/home/user/add" component={UserAdd}></PrivateRouter>
        </Switch>
      </Fragment>
    );
  }
}
