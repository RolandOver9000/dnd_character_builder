import React, { useContext } from "react";
import AddCharacter from "./AddCharacter";
import {CharacterContext} from "../../context/CharacterContext";

const Characters = (props) => {
  const value = useContext(CharacterContext);
  console.log(value)
  return (
    <div>
      {/* <AddCharacter /> */}
  <h1>répa retek mogyoró </h1>
  <h2>{JSON.stringify(value)}</h2>

    </div>
  );
};
export default Characters;
