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
    <div>
      {monsters.map((monster) => (
        <Monster name={monster.name} key={monster.index} />
      ))}
    </div>
  );
  //   }
};

export default Monsters;
