import { CharacterContext } from "../../context/CharacterContext";
import React, { useContext } from "react";

const AddCharacter = (props) => {
  const value = useContext(CharacterContext);
  const [skills, classes, stats] = value;
  
  return (
    <div>
      <h3>májashurka</h3>
      <form>
        <input type="text" required name="characterName"></input>

        <select></select>
        <select>
          <option value="grapefruit">Grapefruit</option>
        </select>
        {skills.map()}
        <button>Create</button>
      </form>
      {/* <h5>{JSON.stringify(skills.results)}</h5>
      <h5>{JSON.stringify(classes.results)}</h5>
      <h5>{JSON.stringify(stats.results)}</h5> */}
    </div>
  );
};

export default AddCharacter;
