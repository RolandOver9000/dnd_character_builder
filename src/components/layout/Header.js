import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
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
