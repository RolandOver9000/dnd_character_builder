import React, { useState, createContext, useEffect } from "react";
import Axios from "axios";

export const ItemContext = createContext();

export const ItemProvider = (props) => {
  const [items, setItems] = useState([""]);
  const [itemCategories, setItemCategories] = useState([""]);

  useEffect(() => {
    Axios.get("https://www.dnd5eapi.co/api/equipment").then((resp) => {
      resp.data.results.map((item) => {
        return Axios.get("https://www.dnd5eapi.co" + item.url).then(
          (itemObject) => {
            setItems((items) => [...items, itemObject.data]);
          }
        );
      });
    });
  }, []);

  useEffect(() => {
    Axios.get("https://www.dnd5eapi.co/api/equipment-categories").then(
      (resp) => {
        setItemCategories([resp.data.results]);
      }
    );
  }, []);

  return (
    <ItemContext.Provider value={[items, setItems]}>
      {props.children}
    </ItemContext.Provider>
  );
};
