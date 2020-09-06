import React, { Component } from "react";
// layout组件
import LayoutAside from "./components/aside";
import LayoutHeader from "./components/header";
import ContainerMain from "../../components/containerMain/Index";
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
        <Header className="layout-header">
          <LayoutHeader />
        </Header>

        <Layout>
          <Sider className="layout-side">
            <LayoutAside />
          </Sider>
          <Content className="layout-main">
            <ContainerMain />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
