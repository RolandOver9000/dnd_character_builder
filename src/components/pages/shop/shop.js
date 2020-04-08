import React, { useContext } from "react";
import { ItemContext } from "./ItemContext";
import { CategoryContext } from "./CategoryContext";
import Item from "./Item";

import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
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
            {itemCategories.map((category) => (
              <Menu.Item key={category.name}>
                <UserOutlined />
                <span className="nav-text">{category.name}</span>
              </Menu.Item>
            ))}
            <span>=======================</span>
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
                <Row gutter={[16, 24]}>
                  {items.map((item) => (
                    <Col className="gutter-row" span={6}>
                      <Item
                        name={item.name}
                        price={item.cost.quantity}
                        key={item._id}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Shop;
