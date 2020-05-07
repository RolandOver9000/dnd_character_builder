import React, { useState, createContext } from "react";
import Axios from "axios";

export const MonsterDetailContext = createContext();

export const MonsterDetailProvider = (props) => {
  const [monsterDetail, setMonsterDetail] = useState(null);

  const getMonsterDetail = (monsterIndex) => {
    Axios.get(
      `https://www.dnd5eapi.co/api/monsters/${monsterIndex}`
    ).then(({ data }) => setMonsterDetail(data));
  };

  return (
    <MonsterDetailContext.Provider
      value={{ monsterDetail, setMonsterDetail, getMonsterDetail }}
    >
      {props.children}
    </MonsterDetailContext.Provider>
  );
};
