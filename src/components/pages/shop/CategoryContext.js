import React, { useState, createContext, useEffect } from "react";
import Axios from "axios";

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
  const [itemCategories, setItemCategories] = useState([]);

  useEffect(() => {
    Axios.get("https://www.dnd5eapi.co/api/equipment-categories").then(
      (resp) => {
        setItemCategories(resp.data.results);
      }
    );
  }, []);

  return (
    <CategoryContext.Provider value={[itemCategories, setItemCategories]}>
      {props.children}
    </CategoryContext.Provider>
  );
};
