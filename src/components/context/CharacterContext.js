import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CharacterContext = createContext();

export const CharacterProvider = (props) => {
  const [skills, setSkills] = useState({});
  const [classes, setClasses] = useState({});
  const [stats, setStats] = useState({});

  //Skills
  useEffect(() => {
    axios.get("https://www.dnd5eapi.co/api/skills").then((res) => {
      setSkills(res.data.results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Classes
  useEffect(() => {
    axios.get("https://www.dnd5eapi.co/api/classes").then((res) => {
      setClasses(res.data.results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Stats
  useEffect(() => {
    axios.get("https://www.dnd5eapi.co/api/ability-scores").then((res) => {
      setStats(res.data.results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CharacterContext.Provider value={{ skills, classes, stats }}>
      {props.children}
    </CharacterContext.Provider>
  );
};
