import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CharacterContext = createContext();

export const CharacterProvider = (props) => {
  const [skills, setSkills] = useState([]);
  const [classes, setClasses] = useState([]);
  const [stats, setStats] = useState([]);
  for (const stat of stats) {
    stat.lvl = 1;
  }
  for (const skill of skills) {
    skill.lvl = 0;
  }
  const [characters, setCharacters] = useState([
    // {
    //   id: 1,
    //   name: "Skandar Graun",
    //   clas: "warrior-priest",
    //   characterLvl: 1,
    //   img: "https://skandargraun.eoldal.hu/img/picture/2/skandar2.jpg",
    //   stats: [],
    //   skills: [],
    //   inventory: [],
    // },
    // {
    //   id: 2,
    //   name: "Peltar",
    //   clas: "wizard",
    //   characterLvl: 10,
    //   img:
    //     "https://i.pinimg.com/originals/95/ff/34/95ff3439cd8f575ae1807b1482514db3.jpg",
    //   stats: [],
    //   skills: [],
    //   inventory: [],
    // },
  ]);
  const addNewCharacter = (character) => {
    setCharacters([...characters,  character]
    );
  };
  //Characters
  useEffect(()=>{
    axios.get("http://localhost:8080/characters").then((res)=>{
      setCharacters(res.data)
    })
  },[])
  

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
    <CharacterContext.Provider
      value={{
        skills,
        setSkills,
        classes,
        setClasses,
        stats,
        setStats,
        characters,
        setCharacters,
        addNewCharacter,
      }}
    >
      {props.children}
    </CharacterContext.Provider>
  );
};
