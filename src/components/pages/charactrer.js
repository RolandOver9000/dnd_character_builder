import React, { Component } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";

const { Header, Footer, Sider, Content } = Layout;

function Character() {
  return (
    <div>
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default Character;

/*
      <Row>
        <Col span={24}>Character name</Col>
      </Row>
      <Row>
        <Col span={2}>Strength</Col>
        <Col span={2}>
          <Demobox value={100}>Skills</Demobox>
        </Col>
      </Row>
      */
