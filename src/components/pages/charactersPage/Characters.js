import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Character from "./Character";
import { CharacterContext } from "../../context/CharacterContext";
import { Row, Col, Layout } from "antd";
import "antd/dist/antd.css";

const Characters = (props) => {
  const value = useContext(CharacterContext);
  const characters = value.characters;
  const { Content } = Layout;

  return (
    <div>
      <Link to="/add-new-character">
        {" "}
        <button>Create new character</button>
      </Link>
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <Row gutter={[16, 24]}>
            {characters.map((character) => (
              <Col className="gutter-row" span={6}>
                <Character character={character} />
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </div>
  );
};
export default Characters;
