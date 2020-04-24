import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Character from "./Character";
import { CharacterContext } from "./context/CharacterContext";
import { Row, Col, Layout } from "antd";

const Characters = () => {
  const value = useContext(CharacterContext);
  const characters = value.characters;
  
  useEffect(() => {}, [characters]);
  const { Content } = Layout;

  return (
    <div style={{fontSize: "1.7em", fontWeight: "bold", color: "white"}}>
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
              <Col id={character.id} className="gutter-row" span={6}>
                <Character id={character.id} character={character} />
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </div>
  );
};
export default Characters;
