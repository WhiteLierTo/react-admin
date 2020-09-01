import React, { Component } from "react";

import { Button, message } from "antd";

import { GetCode } from "../../api/account";

//utils验证
// import validate_email from "../../utils/validate";
//定时器
let timer = null;

export default class Code extends Component {
  constructor(props) {
    super(props); //初始化默认值
    this.state = {
      username: "",
      button_text: "获取验证码",
      button_loading: false,
      button_disabled: false,
    };
  }
  //this.props.username 每次都会获取

  //实时监听父组件的变化,this.props.username这样每次触发都会从父组件取值，会有一定的性能损耗
  componentWillReceiveProps({ username }) {
    console.log(username);
    this.setState({
      username,
    });
  }

  //组件销毁
  componentWillUnmount() {
    clearInterval(timer);
  }

  //获取验证码
  getCode = () => {
    const { username } = this.state;
    if (!username) {
      message.warning("用户名不能为空");
      return;
    }
    // if (!validate_email(username)) {
    //   message.warning("邮箱格式不正确");
    //   return;
    // }
    this.setState({
      button_loading: true,
      button_text: "发送中",
    });
    const data = {
      username,
      module: "login",
    };
    GetCode(data)
      .then((res) => {
        //执行倒计时
        this.countDown();
      })
      .catch((err) => {
        this.setState({
          button_loading: false,
          button_text: "重新获取",
        });
      });
  };

  /**倒计时 */
  countDown = () => {
    //倒计时时间
    let sec = 60;
    //修改状态
    this.setState({
      button_loading: false,
      button_text: `${sec}S`,
      button_disabled: true,
    });

    timer = setInterval(() => {
      sec--;
      if (sec <= 0) {
        this.setState({
          button_text: "重新获取",
          button_disabled: false,
        });
        clearInterval(timer);
        return false;
      }
      this.setState({
        button_text: `${sec}S`,
      });
    }, 1000);
  };

  render() {
    const { button_disabled, button_loading } = this.state;
    return (
      <Button
        type="danger"
        block
        disabled={button_disabled}
        loading={button_loading}
        onClick={this.getCode}
      >
        {this.state.button_text}
      </Button>
    );
  }
}
