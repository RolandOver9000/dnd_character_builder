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
      <p>{props.character.name}</p>
      <p>{props.character.class}</p>
    </div>
  );
}

export default Character;
