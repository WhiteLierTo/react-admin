import React, { Component } from "react";
import { Form, Input, Button, Row, Col, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./index.scss";
import { validate_pas } from "../../utils/validate";

//API
import { Register } from "../../api/account";
//组件
import Code from "../../components/code/index";
//加密
import CryptoJs from "crypto-js";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      module: "register",
    };
  }
  onFinish = (values) => {
    const { username, password, code } = JSON.parse(JSON.stringify(values));
    const requestData = {
      username,
      password: CryptoJs.MD5(password).toString(), //加密
      code,
    };
    Register(requestData)
      .then((res) => {
        const data = res.data;
        message.success(data.message);
        if (data.resCode === 0) {
          this.toogleForm();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  changeInput = (e) => {
    const value = e.target.value;
    this.setState({
      username: value,
    });
  };
  toggleForm = () => {
    this.props.switchForm("login");
  };
  render() {
    const { username, password, module } = this.state;
    return (
      <div className="form-main">
        <div className="form-header">
          <h4 className="column">注册</h4>
          <span onClick={this.toggleForm}>登录</span>
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
                { type: "email", message: "邮箱格式不正确" },
              ]}
            >
              <Input
                value={username}
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="请输入邮箱"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "密码不能为空！！" },
                ({ getFieldValue }) => ({
                  validator(role, value) {
                    console.log(value);
                    const password_value = getFieldValue("passwords"); //获取再次输入的密码的值

                    if (!validate_pas(value)) {
                      return Promise.reject("请输入大于6位小于20位数字+字母");
                    }

                    if (password_value && value !== password_value) {
                      return Promise.reject("两次密码不一致");
                    }
                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <Input
                value={password}
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="请输入密码"
                type="password"
              />
            </Form.Item>
            <Form.Item
              name="passwords"
              rules={[
                { required: true, message: "请输入密码" },
                ({ getFieldValue }) => ({
                  validator(role, value) {
                    if (value !== getFieldValue("password")) {
                      return Promise.reject("两次密码不一致");
                    } else {
                      return Promise.resolve();
                    }
                  },
                }),
              ]}
            >
              <Input
                value={password}
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="请输入密码"
                type="password"
              />
            </Form.Item>
            <Form.Item
              name="code"
              rules={[
                { required: true, message: "请输入长度6位验证码", len: 6 },
              ]}
            >
              <Row gutter={13}>
                <Col span={15}>
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="请输入验证码"
                  />
                </Col>
                <Col span={9}>
                  <Code username={username} module={module} />
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
                注册
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
