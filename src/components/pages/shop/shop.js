import React, { useState, useContext } from "react";
import { ItemContext } from "./ItemContext";
import Item from "./Item";

const Shop = () => {
  const [items, setItems] = useContext(ItemContext);

  return (
    <div>
      {items.map((item) => (
        <Item name={item.name} price={item.price} />
      ))}
    </div>
  );
};

export default Shop;
