import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CharacterContext = createContext();

export const CharacterProvider = (props) => {
  const [skills, setSkills] = useState({});
  const [classes, setClasses] = useState({});
  const [stats, setStats] = useState({});

  //Skills
  useEffect(() => {
    axios.get("http://dnd5eapi.co/api/skills").then((res) => {
      setSkills(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Classes
  useEffect(() => {
    axios.get("http://dnd5eapi.co/api/classes").then((res) => {
      setClasses(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Stats
   //Classes
   useEffect(() => {
    axios.get("http://dnd5eapi.co/api/ability-scores").then((res) => {
      setStats(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <CharacterContext.Provider value={[skills, classes, stats]}>
      {props.children}
    </CharacterContext.Provider>
  );
};
