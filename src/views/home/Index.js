import React, { Component } from "react";
// layout组件
import Aside from "./components/aside";
// css
import "./layout.scss";
// antD
import { Layout } from "antd";
const { Sider, Header, Content } = Layout;

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout className="layout-wrap">
        <Sider width="250px">
          <Aside />
        </Sider>
        <Layout>
          <Header className="layout-header">头部</Header>
          <Content className="layout-main">内容</Content>
        </Layout>
      </Layout>
    );
  }
}
