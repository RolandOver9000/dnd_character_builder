import React from "react";

function Character(props) {
  return (
    <div id="card">
      <img
        src={props.character.img}
        alt="your character"
        width="140"
        height="200"
      ></img>
      <p>name: {props.character.name}</p>
      <p>class: {props.character.class}</p>
  <p>Lvl: {props.character.characterLvl}</p>
    </div>
  );
}

export default Character;
