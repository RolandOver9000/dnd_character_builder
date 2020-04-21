import React from "react";

function Character(props) {
  return (
    <div
      class="card"
      style={{ width: "18rem", background: "#F9EAD7", padding: "15px" }}
    >
      <img
        src={props.character.img}
        alt="your character"
        width="140"
        height="200"
        class="card-img-top"
      ></img>
      <div class="card-body">
        <h5 class="card-title">name: {props.character.name}</h5>
        <p class="card-text">class: {props.character.class}</p>
        <p>Lvl: {props.character.characterLvl}</p>
      </div>
    </div>
  
  );
}

export default Character;
