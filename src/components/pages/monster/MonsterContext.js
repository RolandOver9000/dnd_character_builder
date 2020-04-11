import React, { useState, createContext, useEffect } from "react";
import Axios from "axios";

export const MonsterContext = createContext();

export const MonsterProvider = (props) => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    Axios.get("https://www.dnd5eapi.co/api/monsters").then((resp) =>
      setMonsters(resp.data.results)
    );
  }, []);

  return (
    <MonsterContext.Provider value={[monsters, setMonsters]}>
      {props.children}
    </MonsterContext.Provider>
  );
};
