import React, { Component } from "react";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: "login",
    };
  }

  switchForm = (value) => {
    console.log(value);
    this.setState({
      formType: value,
    });
  };

  render() {
    return (
      <div className="form-wrap">
        <div>
          {this.state.formType === "login" ? (
            <LoginForm switchForm={this.switchForm} />
          ) : (
            <RegisterForm switchForm={this.switchForm} />
          )}
        </div>
      </div>
    );
  }
}
