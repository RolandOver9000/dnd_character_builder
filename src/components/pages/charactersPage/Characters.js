import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Character from "./Character";
import { CharacterContext } from "./context/CharacterContext";
import { Row, Col, Layout } from "antd";
import { v1 as uuid1 } from "uuid";
const Characters = () => {
  const value = useContext(CharacterContext);
  const characters = value.characters;

  useEffect(() => {}, [characters]);
  const { Content } = Layout;

  return (
    <div style={{ fontSize: "1.7em", fontWeight: "bold", color: "white" }}>
      <Link to="/add-new-character">
        {" "}
        <button>Create new character</button>
      </Link>
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
          key={uuid1()}
        >
          <Row gutter={[16, 24]} key={uuid1()}>
            {characters.map((character) => (
              <Col key={uuid1()} className="gutter-row" span={6}>
                <Character
                  key={character.id}
                  id={character.id}
                  character={character}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </div>
  );
};
export default Characters;
