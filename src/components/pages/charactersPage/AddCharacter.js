import { CharacterContext } from "../../context/CharacterContext";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import CreateCharacterButton from "../../elements/CreateCharacterButton";
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
  for (const stat of stats) {
    stat.lvl = 1;
  }
  for (const skill of skills) {
    skill.lvl = 0;
  }

  return (
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
        <p>
          Class:{" "}
          <select>
            {classes.map((clas) => (
              <option value={clas.name} onChange={updateClass}>
                {clas.name}
              </option>
            ))}
          </select>
        </p>
      </form>
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
      <div id="skills">
        Skills: Skill points left: {skillPointsLeft}
        {skills.map((skill) => (
          <p>
            <button> - </button>
            {skill.name}: {skill.lvl}
            <button> + </button>
          </p>
        ))}
      </div>

      <CreateCharacterButton>Create</CreateCharacterButton>
    </div>
  );
};

export default AddCharacter;
