import { CharacterContext } from "../../context/CharacterContext";
import React, { useContext } from "react";

const AddCharacter = (props) => {
  const value = useContext(CharacterContext);
  const skills = value.skills;
  const classes = value.classes;
  const stats = value.stats;
  for(const stat of stats){
    stat.lvl = 1;
    console.log(stat)
  }
  console.log(stats)
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
        {skills.map((skill) => (
          <div>
            <input
              type="checkbox"
              id={skill.name}
              name={skill.name}
              value={skill.name}
            ></input>
            <label for={skill.name}> {skill.name}</label>
          </div>
        ))}
        <button>Create</button>
      </form>
      <h5>
        Stats:
        {stats.map((stat) => (
          <div>{JSON.stringify(stat)}</div>
        ))}
      </h5>
    </div>
  );
};

export default AddCharacter;
