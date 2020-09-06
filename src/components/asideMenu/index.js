import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

//antd
import { UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";

//路由
import Router from "../../router/index";

const { SubMenu } = Menu;

export default class AsideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 无子级菜单处理
  renderMenu = ({ title, key }) => {
    return (
      <Menu.Item key={key}>
        <Link to={key}>{title}</Link>
      </Menu.Item>
    );
  };

  // 子级判断处理(递归)
  renderSubMenu = ({ title, key, child }) => {
    return (
      <SubMenu key={key} icon={<UserOutlined />} title={title}>
        {child &&
          child.map((item) => {
            return item.child && item.child.length > 0
              ? this.renderSubMenu(item)
              : this.renderMenu(item);
          })}
      </SubMenu>
    );
  };

  render() {
    return (
      <Fragment>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
          theme="dark"
        >
          {Router &&
            Router.map((firstItem) => {
              return firstItem.child && firstItem.child.length > 0
                ? this.renderSubMenu(firstItem)
                : this.renderMenu(firstItem);
            })}
        </Menu>
      </Fragment>
    );
  }
}
