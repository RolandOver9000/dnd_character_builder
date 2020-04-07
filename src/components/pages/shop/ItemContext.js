import React, { useState, createContext } from "react";
import Axios from "axios";

export const ItemContext = createContext();

export const ItemProvider = (props) => {
  const [items, setItems] = useState([
    {
      name: "sword",
      price: "12",
    },
    {
      name: "shield",
      price: "8",
    },
  ]);
  return (
    <ItemContext.Provider value={[items, setItems]}>
      {props.children}
    </ItemContext.Provider>
  );
};
