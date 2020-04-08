import React from "react";
import { Link } from "react-router-dom";
import DnDLogo from "./dnd_5.png";

function Header() {
  return (
    // <header style={{ headerStyle, backgroundImage: `url(${DnDLogo})` }}>
    <header style={headerStyle}>
      <img
        alt="no image here"
        src={DnDLogo}
        style={{ width: "7%", height: "7%" }}
      />
      <h1>Dungeons & Dragons</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/characters">
        Characters
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/monsters">
        Monsters
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/shop">
        Shop
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

export default Header;
