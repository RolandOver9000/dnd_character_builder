import React, { useState, useContext, useEffect } from "react";
import { ItemContext } from "./ItemContext";
import Item from "./Item";
import Axios from "axios";

const Shop = () => {
  const [items, setItems] = useContext(ItemContext);

  useEffect(() => {
    Axios.get("http://dnd5eapi.co/api/equipment").then((items) => {
      items.map((item) => {
        Axios.get(item.url).then((itemObject) => setItems({ ...items, item }));
      });
    });
  }, []);

  return (
    <div>
      {items.map((item) => (
        <Item name={item.name} price={item.price} />
      ))}
    </div>
  );
};

export default Shop;
