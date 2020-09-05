import React, { Component, Fragment } from "react";

//css
import "./aside.scss";

export default class Header extends Component {
  constructor(prpos) {
    super(prpos);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <h1 className="logo">
          <span>LOGO</span>
        </h1>
      </Fragment>
    );
  }
}
