import React, { useContext , useEffect} from "react";
import { Link } from "react-router-dom";
import Character from "./Character";
import { CharacterContext } from "../../context/CharacterContext";

const Characters = () => {
  const value = useContext(CharacterContext);
  const characters = value.characters;
  useEffect(() => {
  }, [characters])
  return (
    <div>
      <Link to="/add-new-character">
        {" "}
        <button>Create new character</button>
      </Link>
      <div className="row" >
        {characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};
export default Characters;
