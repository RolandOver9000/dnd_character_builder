import React, { useState, createContext, useEffect } from "react";
import Axios from "axios";

export const ItemContext = createContext();

export const ItemProvider = (props) => {
  const [items, setItems] = useState([]);
  const [itemDetails, setItemDetails] = useState([]);

  useEffect(() => {
    Axios.get("https://www.dnd5eapi.co/api/equipment").then((resp) => {
      setItems(resp.data.results);
    });
  }, []);

  useEffect(() => {
    Promise.all(
      items.map((item) => {
        Axios.get("https://www.dnd5eapi.co" + item.url).then(
          (resp) =>
            setItemDetails((prevItemDetails) => [...prevItemDetails, resp.data])
          // setItemDetails((itemDetails) => [...itemDetails, resp.data])
        );
      })
    );
  }, [items]);

  return (
    <ItemContext.Provider value={{ itemDetails, setItemDetails }}>
      {props.children}
    </ItemContext.Provider>
  );
};
