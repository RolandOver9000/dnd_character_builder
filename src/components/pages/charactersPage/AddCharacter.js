import { CharacterContext } from "./context/CharacterContext";
import React, { useContext, useState, useEffect } from "react";
import IncrementButton from "./elements/IncrementButton";
import { v1 as uuid4 } from "uuid";
import { Link } from "react-router-dom";
import axios from "axios";

const AddCharacter = (props) => {
  const value = useContext(CharacterContext);
  const skills = value.skills;
  const classes = value.classes;
  const stats = value.stats;
  const [characters] = value.characters;
  const [statPointsLeft, setStatPointsLeft] = useState(16);
  const [skillPointsLeft, setSkillPointsLeft] = useState(10);
  const { addNewCharacter } = useContext(CharacterContext);
  const [characterName, setCharacterName] = useState("");
  const updateCharacterName = (e) => setCharacterName(e.target.value);

  const [characterClass, setCharacterClass] = useState("");
  const updateClass = (e) => setCharacterClass(e.target.value);

  const setStatLvl = (stat, modifier) => {
    if (stat.lvl + modifier === 0 || stat.lvl + modifier > 10) {
      console.log("skill lvl cant be lower then 1 and higher then 10");
    } else if (statPointsLeft - modifier < 0) {
      console.log("out of statpoints");
    } else {
      stat.lvl = stat.lvl + modifier;
      setStatPointsLeft(statPointsLeft - modifier);
    }
  };

  const setSkillLvl = (skill, modifier) => {
    if (skill.lvl + modifier < 0 || skill.lvl + modifier > 10) {
      console.log("skill lvl cant be lower then 1 and higher then 10");
    } else if (skillPointsLeft - modifier < 0) {
      console.log("out of skillpoints");
    } else {
      skill.lvl = skill.lvl + modifier;
      setSkillPointsLeft(skillPointsLeft - modifier);
    }
  };

  const createNewCharacter = () => {
    const character = {
      id: uuid4(),
      name: characterName,
      clas: characterClass,
      characterLvl: 1,
      img:
        "https://cdnb.artstation.com/p/assets/images/images/007/886/327/large/samuel-marcano-andres1web.jpg?1509138117",
      stats: stats,
      skills: skills,
      // inventory: [],
      skillPoints: skillPointsLeft,
      statpoints: statPointsLeft,
    };
    console.log(character);
    //enable to frontend way add created  character to characters page
    addNewCharacter(character);
    console.log(characters);
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.post("http://localhost:8080/add-new-character", character);
  };

  useEffect(() => {
    console.log("useeffect stats");
  }, [stats]);
  useEffect(() => {
    console.log("useeffect skills");
  }, [skills]);

  // useEffect(() => {
  //   console.log("useeffect characters");
  // }, [characters]);

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
            <Link to="/characters">
              <button onClick={createNewCharacter}>Create Character</button>
            </Link>
          </form>
        </div>
      </div>

      <div className="row" style={{ padding: "15px" }}>
        <div id="stats" className="col-4">
          <h4>Stats: Stat points left: {statPointsLeft}</h4>
          {stats.map((stat) => (
            <p key={stat.index}>
              <IncrementButton onClick={() => setStatLvl(stat, -1)}>
                {" "}
                -{" "}
              </IncrementButton>
              {stat.name}: {stat.lvl}
              <IncrementButton onClick={() => setStatLvl(stat, 1)}>
                {" "}
                +{" "}
              </IncrementButton>
            </p>
          ))}
        </div>

        <div id="skills" className="col-4" style={{ padding: "5px" }}>
          <h4> Skills: Skill points left: {skillPointsLeft}</h4>
          {skills.map((skill) => (
            <p key={skill.index}>
              <IncrementButton onClick={() => setSkillLvl(skill, -1)}>
                {" "}
                -{" "}
              </IncrementButton>
              {skill.name}: {skill.lvl}
              <IncrementButton onClick={() => setSkillLvl(skill, 1)}>
                {" "}
                +{" "}
              </IncrementButton>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddCharacter;
