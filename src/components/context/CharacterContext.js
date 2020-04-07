import React, { createContext, useState, useEffect } from "react";
import useFetcher from "../hooks/Fetcher";
import axios from "axios";

export const CharacterContext = createContext();

export const CharacterProvider = (props) => {
  const [skills, setSkills] = useState("");
  
  useEffect(() => {
            axios.get("http://dnd5eapi.co/api/skills").then((res) => {
              console.log(res.data)
              setSkills(res.data)}
            )
          console.log(skills)
    },[])
  
  return (
    <CharacterContext.Provider value ={[skills]}>
      {props.children}
    </CharacterContext.Provider>
  );
};
