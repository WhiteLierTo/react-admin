import React, { Component } from "react";
import "./index.scss";
import { Form, Input, Button, Row, Col, message } from "antd";
import { UserOutlined } from "@ant-design/icons";

//API
import { Login, GetCode } from "../../api/account";

//utils验证
// import { validate_email } from "../../utils/validate";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      code_button_loading: false,
      code_button_disabled: false,
      code_button_text: "获取验证码",
    };
  }

  onFinish = (values) => {
    Login(values)
      .then((res) => {
        message.success("登录成功");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Received values of form: ", values);
  };
  //获取验证码
  getCode = () => {
    if (!this.state.username) {
      message.warning("用户名不能为空");
      return;
    }
    this.setState({
      code_button_loading: true,
      code_button_text: "发送中",
    });
    const data = {
      username: this.state.username,
      module: "login",
    };
    GetCode(data)
      .then((res) => {
        //执行倒计时
        this.countDown();
      })
      .catch((err) => {
        this.setState({
          code_button_loading: false,
          code_button_text: "重新获取",
        });
      });
  };

  changeInput = (e) => {
    const value = e.target.value;
    this.setState({
      username: value,
    });
  };

  /**倒计时 */
  countDown = () => {
    //定时器
    let timer = null;
    //倒计时时间
    let sec = 5;
    //修改状态
    this.setState({
      code_button_loading: false,
      code_button_text: `${sec}S`,
      code_button_disabled: true,
    });

    timer = setInterval(() => {
      sec--;
      if (sec <= 0) {
        this.setState({
          code_button_text: "重新获取",
          code_button_disabled: false,
        });
        clearInterval(timer);
        return false;
      }
      this.setState({
        code_button_text: `${sec}S`,
      });
    }, 1000);
  };

  render() {
    const {
      username,
      code_button_loading,
      code_button_text,
      code_button_disabled,
    } = this.state;
    return (
      <div className="form-wrap">
        <div className="form-main">
          <div className="form-header">
            <h4 className="column">登录</h4>
            <span>账号注册</span>
          </div>
          <div className="form-content">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
            >
              <Form.Item
                name="username"
                onChange={this.changeInput}
                style={{ width: "100%" }}
                rules={[
                  { required: true, message: "邮箱不能为空" },
                  // ({ getFieldValue }) => ({
                  //   validator(rule, value) {
                  //     if (validate_email(value)) {
                  //       _this.setState({
                  //         code_button_disabled: false,
                  //       });
                  //       return Promise.resolve();
                  //     }
                  //     return Promise.reject("邮箱格式不正确");
                  //   },
                  // }),
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="请输入邮箱"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "请输入密码" }]}
              >
                <Input
                  value={username}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="请输入密码"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "请输入密码" }]}
              >
                <Row getter={13}>
                  <Col span={15}>
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="请输入验证码"
                    />
                  </Col>
                  <Col span={9}>
                    <Button
                      type="danger"
                      block
                      onClick={this.getCode}
                      loading={code_button_loading}
                      disabled={code_button_disabled}
                    >
                      {code_button_text}
                    </Button>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  block
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
