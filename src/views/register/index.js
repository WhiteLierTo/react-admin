import React, { Component } from "react";
import "./index.scss";
import { Form, Input, Button, Row, Col, message } from "antd";
import { UserOutlined } from "@ant-design/icons";

//API
import { Login } from "../../api/account";
//组件
import Code from "../../components/code/index";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  onFinish = (values) => {
    console.log("参数:" + JSON.stringify(values));
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

  changeInput = (e) => {
    const value = e.target.value;
    this.setState({
      username: value,
    });
  };

  render() {
    const { username, password } = this.state;
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
                rules={[{ required: true, message: "邮箱不能为空" }]}
              >
                <Input
                  value={username}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="请输入邮箱"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "请输入密码" }]}
              >
                <Input
                  value={password}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="请输入密码"
                />
              </Form.Item>
              <Form.Item
                name="code"
                rules={[{ required: true, message: "请输入验证码" }]}
              >
                <Row gutter={13}>
                  <Col span={15}>
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="请输入验证码"
                    />
                  </Col>
                  <Col span={9}>
                    <Code username={username} />
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
