import React from "react";
import { Link } from "react-router-dom";
import HeaderStyle from "../style/HeaderStyle";
import DnDLogo from "../style/dnd_5.png";

function Header() {
  return (
    <HeaderStyle>
      {/* <header style={{ headerStyle, backgroundImage: `url(${DnDLogo})` }}> */}
      <header>
        <img
          alt="no image here"
          src={DnDLogo}
          style={{ width: "7%", height: "7%" }}
        />
        {/* <h1>Dungeons & Dragons</h1> */}
        <div>
          <Link className="link" to="/">
            Home
          </Link>
          |{"   "}
          <Link className="link" to="/characters">
            Characters
          </Link>
          |{"   "}
          <Link className="link" to="/monsters">
            Monsters
          </Link>
          |{"   "}
          <Link className="link" to="/shop">
            Shop
          </Link>
        </div>
      </header>
    </HeaderStyle>
  );
}

// const headerStyle = {
//   background: "#333",
//   color: "#fff",
//   textAlign: "center",
//   padding: "10px",
// };

// const linkStyle = {
//   color: "#fff",
//   textDecoration: "none",
// };

export default Header;
