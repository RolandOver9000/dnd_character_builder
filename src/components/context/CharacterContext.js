import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CharacterContext = createContext();

export const CharacterProvider = (props) => {
  const [skills, setSkills] = useState([]);
  const [classes, setClasses] = useState([]);
  const [stats, setStats] = useState([]);
  const [characters, setCharacters] = useState([{id:1, name: 'Skandar Graun', class: 'warrior-priest',characterLvl: 1, img: 'https://skandargraun.eoldal.hu/img/picture/2/skandar2.jpg', stats:[], skills:[]}])
  
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
    <CharacterContext.Provider value={{ skills, setSkills, classes, setClasses, stats, setStats, characters, setCharacters }}>
      {props.children}
    </CharacterContext.Provider>
  );
};
