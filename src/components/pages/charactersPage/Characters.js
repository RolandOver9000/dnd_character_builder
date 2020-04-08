import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Character from "./Character";
import { CharacterContext } from "../../context/CharacterContext";

const Characters = (props) => {
  const value = useContext(CharacterContext);
  const characters = value.characters;
  return (
    <div>
      <Link to="/add-new-character">
        {" "}
        <button>Create new character</button>
      </Link>
      <div className="row">
        {characters.map((character) => (
          <Character character={character} />
        ))}
      </div>
    </div>
  );
};
export default Characters;
