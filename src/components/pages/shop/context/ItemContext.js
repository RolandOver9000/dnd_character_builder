import React, { useState, createContext, useEffect } from "react";
import Axios from "axios";

export const ItemContext = createContext();

export const ItemProvider = (props) => {
  const [itemDetails, setItemDetails] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/item/list").then((items) => {
      items.data.map((singleItem) =>
        setItemDetails((prevItemDetails) => [...prevItemDetails, singleItem])
      );
    });
  }, []);

  return (
    <ItemContext.Provider value={{ itemDetails, setItemDetails }}>
      {props.children}
    </ItemContext.Provider>
  );
};
