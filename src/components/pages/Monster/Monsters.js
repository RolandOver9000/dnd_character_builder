import React, {
  Component,
  useState,
  useEffect,
  useLayoutEffect,
  forceUpdate,
  useContext,
} from "react";
import { Router, Route, Link, RouteHandler } from "react-router-dom";

import Axios from "axios";
import Monster from "./Monster";
import { MonsterContext } from "./MonsterContext";

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
      {monsters.map((monster) => (
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
