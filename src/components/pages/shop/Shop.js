import React, { useContext } from "react";
import { ItemContext } from "./ItemContext";
import { CategoryContext } from "./CategoryContext";
import Item from "./Item";

import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import ShopImage from "./shopStyle/shop.jpg";

const Shop = () => {
  const { itemDetails } = useContext(ItemContext);
  const { itemCategories } = useContext(CategoryContext);
  const { Header, Content, Footer, Sider } = Layout;

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
          <Menu
            style={{
              color: "white",
              backgroundColor: "black",
              border: "5px #db0f29",
              borderWidth: "3px",
            }}
            mode="inline"
            defaultSelectedKeys={["4"]}
          >
            {itemCategories.map((category) => (
              <Menu.Item key={category.name}>
                <UserOutlined />
                <span className="nav-text">{category.name}</span>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header
            // className="site-layout-sub-header-background"
            style={{
              padding: 0,
              backgroundColor: "black",
            }}
          >
            <Content>
              <h2
                style={{
                  color: "white",
                  verticalAlign: "middle",
                }}
              >
                D&D Shop
              </h2>
            </Content>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                minHeight: 360,
              }}
            >
              <div>
                <Row gutter={[16, 24]}>
                  {itemDetails.map((itemDetail) => (
                    <Col
                      className="gutter-row"
                      key={itemDetails._id + "1"}
                      span={6}
                    >
                      <Item
                        name={itemDetail.name}
                        price={itemDetail.cost.quantity}
                        priceUnit={itemDetail.cost.unit}
                        key={itemDetails._id}
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
