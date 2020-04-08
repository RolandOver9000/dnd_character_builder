import { CharacterContext } from "../../context/CharacterContext";
import React, { useContext } from "react";

const AddCharacter = (props) => {
  const value = useContext(CharacterContext);
  const skills = value.skills;
  const classes = value.classes;
  const stats = value.stats;
  //skills.map(skill=>console.log(skill))
  return (
    <div>
      <h3>májashurka</h3>
      <form>
        <input type="text" required name="characterName"></input>

        <select>
        {skills.map((skill) => (
          <option value={skill.name}>{skill.name}</option>
        ))}
        </select>
        <select>
          <option value="grapefruit">Grapefruit</option>
        </select>
        <button>Create</button>
      </form>
      <h5>
        {skills.map((skill) => (
          <p>{skill.name}</p>
        ))}
      </h5>
      <h5>{JSON.stringify(classes)}</h5>
      <h5>{JSON.stringify(stats)}</h5>
    </div>
  );
};

export default AddCharacter;
