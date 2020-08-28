import React, { Component } from "react";
import "./index.scss";
import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  render() {
    return (
      <div className="form-wrap">
        <div>
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
                rules={[{ required: true, message: "请输入用户名" }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="请输入用户名"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "请输入密码" }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="请输入密码"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
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
