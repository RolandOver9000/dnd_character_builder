import React, { useContext } from "react";
import { MonsterContext } from "./MonsterContext";
import "./styling.css";
import { MonsterDetailContext } from "./MonsterDetailContext";

const Monsters = (props) => {
  const [monsters, setMonsters] = useContext(MonsterContext);
  const { monsterDetail } = useContext(MonsterDetailContext);
  //   if (!isLoaded) {
  //     return (
  //       <div>
  //         ..Loading
  //       </div>
  //     );
  //   } else {

  return (
    <React.Fragment>
      {monsterDetail === null ? (
        "loading"
      ) : (
        <div>
          <div
            class="grid-container"
            style={{
              padding: `42px`,
              margin: `30px 0px 0px 0px`,
              background: `#F5F5DC`,
            }}
          >
            <div
              class="Character-Name"
              style={{
                outline: `2px solidblack`,
                padding: `42px`,
                margin: `15px 0px 0px 0px`,
              }}
            >
              <h2>
                {monsterDetail.name}{" "}
                <img
                  src="https://pngimage.net/wp-content/uploads/2018/05/dragon-png-images.png"
                  height="60"
                  width="60"
                ></img>
              </h2>
            </div>
            <div class="Skills" style={{ outline: `2px solid black` }}>
              <p>
                <b>Common Action name:</b>
              </p>
              {monsterDetail.actions[0].name}
              <p>
                <b>Common Action Description:</b>
              </p>
              {monsterDetail.actions[0].desc}
            </div>
            <div class="Class" style={{ outline: `2px solid blue` }}>
              <p>
                <b>Language:</b>
              </p>
              {monsterDetail.languages}
            </div>
            <div class="HP" style={{ outline: `2px solid blue` }}>
              <h6>
                <b>Challenge Rating</b>
              </h6>
              {monsterDetail.challenge_rating}
            </div>
            <div class="Inventory" style={{ outline: `2px solid blue` }}>
              <b>Special Ability 1:</b>
              {monsterDetail.special_abilities[0].name}
              <p>
                <b>Description:</b>
              </p>
              {monsterDetail.special_abilities[0].desc}
              <p>
                <b>Special Ability 2:</b>
              </p>
              {monsterDetail.special_abilities[1].name}
              <p>
                <b>Description:</b>{" "}
              </p>
              {monsterDetail.special_abilities[1].desc}
            </div>
            <div class="Traits" style={{ outline: `2px solid blue` }}>
              <p>
                <b>Action:</b>
              </p>
              {monsterDetail.actions[0].name}
              <p>
                <b>Description:</b>
              </p>
              {monsterDetail.actions[0].desc}
            </div>
            <div class="Attacks" style={{ outline: `2px solid blue` }}>
              <p>
                <b>Legendary Attack:</b>
              </p>
              {monsterDetail.legendary_actions[2].name}
              <p>
                <b>Special Ability 2:</b>
              </p>
              {monsterDetail.legendary_actions[2].desc}
            </div>
            <div class="STR" style={{ outline: `2px solid blue` }}>
              <p>
                <b>Attack Bonus</b>
              </p>
              {monsterDetail.actions[1].attack_bonus}
            </div>
            <div class="DEX" style={{ outline: `2px solid blue` }}>
              <p>
                <b>Damage Type:</b>
              </p>
              {monsterDetail.actions[1].damage[0].damage_type.name}
            </div>
            <div class="CONST" style={{ outline: `2px solid blue` }}>
              <p>
                <b>Big Action:</b>
              </p>
              {monsterDetail.actions[1].name}
              <p>
                <b>Big Action Description:</b>
              </p>
              {monsterDetail.actions[1].desc}
            </div>
            <div class="Int" style={{ outline: `2px solid blue` }}>
              <p>
                <b>Damage Dice:</b>
              </p>
              {monsterDetail.actions[1].damage[0].damage_dice}
            </div>
            <div class="WIS" style={{ outline: `2px solid blue` }}>
              <p>
                <b>Type:</b>
              </p>
              {monsterDetail.actions[1].damage[1].type}
            </div>
            <div class="CHAR" style={{ outline: `2px solid blue` }}>
              <p>
                <b>Bonus:</b>
              </p>
              {monsterDetail.actions[1].damage[1].bonus}
            </div>
          </div>
          ;
          <button type="button" class="btn btn-info">
            Add New Monster
          </button>
        </div>
      )}
    </React.Fragment>
  );
  //   }
};

export default Monsters;
