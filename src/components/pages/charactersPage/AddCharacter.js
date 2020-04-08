import { CharacterContext } from "../../context/CharacterContext";
import React, { useContext, useState } from "react";

const AddCharacter = (props) => {
  const value = useContext(CharacterContext);
  const skills = value.skills;
  const classes = value.classes;
  const stats = value.stats;
  for (const stat of stats) {
    stat.lvl = 1;
    stat.setLvl = function (amount) {
      if (this.lvl + amount >= 1 && this.statlvl + amount <= 10)
        stat.lvl += amount;
    };
  }
  for (const skill of skills) {
    skill.lvl = 0;
    skill.setLvl = function (amount) {
      if (this.lvl + amount >= 0 && this.statlvl + amount <= 10)
      skill.lvl += amount;
    };
  }
  const [statPointsLeft, setStatPointsLeft] = useState(20);
  const [skillPointsLeft, setskillPointsLeft] = useState(10);
  // const changeStatPointsLeft = (amount, skill) => {
  //   if (statPointsLeft + amount > 0) {
  //     setStatPointsLeft(statPointsLeft - amount);
  //     //stat.setLvl(amount)
  //   }
  // };
  console.log(stats);
  return (
    <div>
      <form>
        Character Name:{" "}
        <input type="text" required name="characterName"></input>
        <p>
          Class:{" "}
          <select>
            {classes.map((clas) => (
              <option value={clas.name}>{clas.name}</option>
            ))}
          </select>
        </p>
        {/* {skills.map((skill) => (
          <div>
            <input
              type="checkbox"
              id={skill.name}
              name={skill.name}
              value={skill.name}
            ></input>
            <label for={skill.name}> {skill.name}</label>
          </div>
        ))} */}
      </form>
      <div id="skills">
        SKills: Skill points left: {skillPointsLeft}
        {skills.map((skill) => (
          <p>
            <button> - </button>
            {skill.name}: {skill.lvl}
            <button> + </button>
          </p>
        ))}
      </div>
      <div id="stats">
        Stats: Stat points left: {statPointsLeft}
        {stats.map((stat) => (
          <p>
            <button> - </button>
            {stat.name}: {stat.lvl}
            <button> + </button>
          </p>
        ))}
      </div>
      <button>Create</button>
    </div>
  );
};

export default AddCharacter;
