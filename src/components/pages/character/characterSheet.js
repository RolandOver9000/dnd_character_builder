import React from "react";
import "./charactersheet.css";

const CharacterSheet = () => {
  return (
    <div className="grid-container">
      <div className="Character-Name borders">name</div>
      <div className="Skills borders">skills</div>
      <div className="Class borders">class</div>
      <div className="HP borders">hp</div>
      <div className="Inventory borders">inventory</div>
      <div className="Traits borders">traits</div>
      <div className="Attacks borders">attacks</div>
      <div className="STR borders">str</div>
      <div className="DEX borders">dex</div>
      <div className="CONST borders">const</div>
      <div className="Int borders">int</div>
      <div className="WIS borders">wis</div>
      <div className="CHAR borders">char</div>
    </div>
  );
};

export default CharacterSheet;

/*

  return (
    <div>
      <Row>
        <Col span={24}>
          <p>Character Name</p>
        </Col>
      </Row>
      <Row span={24}>
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
          <Row>HP</Row>
          <Row>Inventory</Row>
        </Col>

        <Col span={7}>
          <Row span={24}>
            <p>Traits</p>
          </Row>
          <Row span={24}>
            <p>Attacks</p>
          </Row>
        </Col>
      </Row>
    </div>
  );

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
