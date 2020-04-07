import React, { Component } from "react";
import { Row, Col, Divider } from "antd";
import "antd/dist/antd.css";

const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

function Character() {
  return (
    <div>
      <Row>
        <Col span={24}>Character Name</Col>
      </Row>
      <Row>
        <Col span={4}>
          <Row span={2}>Strength</Row>
          <Row span={2}>Dexterity</Row>
          <Row span={2}>Constitution</Row>
          <Row span={2}>Intelligence</Row>
          <Row span={2}>Wisdom</Row>
          <Row span={2}>Charisma</Row>
        </Col>

        <Col span={4}>
          <Row>Skills</Row>
        </Col>

        <Col span={9}>
          <Row>
            <Col span={8}>Armor Class</Col>
            <Col span={8}>Initiative</Col>
            <Col span={8}>Speed</Col>
          </Row>
          <Row span={24}>HP</Row>
          <Row span={24}>Inventory</Row>
        </Col>

        <Col span={7}>
          <Row span={24}>Traits</Row>
          <Row span={24}>Attacks</Row>
        </Col>
      </Row>
    </div>
  );
}

export default Character;

/*

          <div>
      <Layout>
        <Header style={{ background: "yellow" }}>Character name</Header>
      </Layout>
      <Layout>
        <Sider style={{ background: "yellow" }}>
          <Content>Strength</Content>
          <Content>Dexterity</Content>
          <Content>Constitution</Content>
          <Content>Intelligence</Content>
          <Content>Wisdom</Content>
          <Content>Charisma</Content>
        </Sider>
        <Sider style={{ background: "yellow" }}>Skills</Sider>
        <Layout>
          <Sider>
            <Content>
              <Sider style={{ background: "yellow" }}>Armor Class</Sider>
            </Content>
            <Content>
              <Sider style={{ background: "yellow" }}>Initiative</Sider>
            </Content>
            <Content>
              <Sider style={{ background: "yellow" }}>Speed</Sider>
            </Content>
          </Sider>
          <Sider>
            <Content>HP</Content>
            <Content>Inventory</Content>
          </Sider>
        </Layout>
      </Layout>
    </div>
      */
