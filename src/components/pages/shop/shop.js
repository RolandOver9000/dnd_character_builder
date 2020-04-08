import React, { useContext } from "react";
import { ItemContext } from "./ItemContext";
import Item from "./Item";

const Shop = () => {
  const [items, setItems] = useContext(ItemContext);
  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <Item name={item.name} key={item._id} />
      ))}
    </div>
  );
};

export default Shop;
