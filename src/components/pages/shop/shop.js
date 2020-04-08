import React, { useContext } from "react";
import { ItemContext } from "./ItemContext";
import { CategoryContext } from "./CategoryContext";
import Item from "./Item";

import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";

const Shop = () => {
  const [items, setItems] = useContext(ItemContext);
  const [itemCategories, setItemCategories] = useContext(CategoryContext);
  const { Header, Content, Footer, Sider } = Layout;
  console.log(items);

  return (
    <div>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="1">
              <UserOutlined />
              <span className="nav-text">All</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <div>
                {items.map((item) => (
                  <Item name={item.name} key={item._id} />
                ))}
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
      , mountNode,
    </div>
  );
};

export default Shop;
