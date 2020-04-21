import { CharacterContext } from "../../context/CharacterContext";
import React, { useContext, useState } from "react";
import IncrementButton from "../../elements/IncrementButton";

const AddCharacter = (props) => {
  const value = useContext(CharacterContext);
  const skills = value.skills;
  const classes = value.classes;
  const stats = value.stats;

  const [statPointsLeft, setStatPointsLeft] = useState(20);
  const [skillPointsLeft, setskillPointsLeft] = useState(10);

  const [characterName, setCharacterName] = useState("");
  const updateCharacterName = (e) => setCharacterName(e.target.value);

  const [characterClass, setCharacterClass] = useState("");
  const updateClass = (e) => setCharacterClass(e.target.value);

  
  const increaseStat = (e) => {
    if (statPointsLeft > 0) {
      setStatPointsLeft(statPointsLeft - 1);
      console.log(e.target.value)

    } else {
      console.log("out of stat points");
    }
  };

  const decreaseStat = (e, stat) => {
    if (parseInt(stat.lvl) > 0) {
      setStatPointsLeft(statPointsLeft + 1);
      console.log(stat);
      console.log(e.targer.value);

      stat.lvl--;
    } else {
      console.log("stat lvl cant be lower then 0");
    }
  };

  return (
    <div>
      <div className="container-fluid ">
        <h2>Create a new character</h2>

        <div>
          <form>
            Character Name:{" "}
            <input
              type="text"
              required
              name="characterName"
              value={characterName}
              onChange={updateCharacterName}
            ></input>
            Class:{" "}
            <select onClick={updateClass}>
              {classes.map((clas) => (
                <option value={clas.name} key={clas.index}>
                  {clas.name}
                </option>
              ))}
            </select>
          </form>
        </div>
      </div>

      <div className="row" style={{ padding: "15px" }}>
        <div id="stats" className="col-4">
          <h4>Stats: Stat points left: {statPointsLeft}</h4>
          {stats.map((stat) => (
            <p key={stat.index}>
              <IncrementButton value ={stat} onClick={decreaseStat}> - </IncrementButton>
              {stat.name}: {stat.lvl}
              <IncrementButton onClick={increaseStat}> + </IncrementButton>
            </p>
          ))}
        </div>

        <div id="skills" className="col-4" style={{ padding: "5px" }}>
          <h4> Skills: Skill points left: {skillPointsLeft}</h4>
          {skills.map((skill) => (
            <p key={skill.index}>
              <IncrementButton> - </IncrementButton>
              {skill.name}: {skill.lvl}
              <IncrementButton> + </IncrementButton>
            </p>
          ))}
        </div>
      </div>
      <button>Create</button>
    </div>
  );
};

export default AddCharacter;
