import React from "react";
import HomeStyle from "../style/HomeStyle";
import DnDLogo from "../../../fixLayout/style/dnd_5.png";

import { Link } from "react-router-dom";
import { Row, Col } from "antd";

export const Home = () => {
  return (
    <HomeStyle>
      <div className="home-page">
        <Col className="left-side-container">
          <Row className="first-row">
            <div className="side-picture">
              <img className="dnd-logo" alt="no image here" src={DnDLogo} />
            </div>
          </Row>
          <Row className="second-row">
            {" "}
            <div>
              <Link className="link" to="/">
                Home
              </Link>
              <span className="separator"> | </span>
              <Link className="link" to="/characters">
                Characters
              </Link>
              <span className="separator"> | </span>
              <Link className="link" to="/monsters">
                Monsters
              </Link>
              <span className="separator"> | </span>
              <Link className="link" to="/shop">
                Shop
              </Link>
            </div>
          </Row>
        </Col>
        <div className="register-login">Hi there adventurer!</div>
      </div>
    </HomeStyle>
  );
};

export default Home;
