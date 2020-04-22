import React from "react";

function Character(props) {
  return (
    <div
      class="card"
      style={{ width: "18rem", background: "#db0f29", padding: "15px" }}
    >
      <img
        src={props.character.img}
        alt="your character"
        width="140"
        height="200"
        className="card-img-top"
      ></img>
      <div className="card-body">
        <h5 className="card-title">name: {props.character.name}</h5>
        <p className="card-text">class: {props.character.clas}</p>
        <p>Lvl: {props.character.characterLvl}</p>
      </div>
    </div>
  
  );
}

export default Character;
