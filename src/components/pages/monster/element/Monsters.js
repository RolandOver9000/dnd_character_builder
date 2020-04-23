import React, { useContext } from "react";

import Monster from "./Monster";
import { MonsterContext } from "../context/MonsterContext";
import { Link } from "react-router-dom";

const Monsters = (props) => {
  const [monsters, setMonsters] = useContext(MonsterContext);

  //   if (!isLoaded) {
  //     return (
  //       <div>
  //         ..Loading
  //       </div>
  //     );
  //   } else {

  return (
    <div
      style={{
        margin: `auto`,

        flexWrap: `wrap`,
        display: `flex`,
        justifyContent: `space-around`,
      }}
    >
      <Link to={`/AddMonster/`}>
        <button>Add a New Monster</button>
      </Link>
      {monsters.slice(0, 10).map((monster) => (
        <Monster
          name={monster.name}
          index={monster.index}
          key={monster.index}
        />
      ))}
    </div>
  );
  //   }
};

export default Monsters;
