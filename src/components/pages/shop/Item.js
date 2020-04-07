import React from "react";

const Item = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{price}</h4>
    </div>
  );
};

export default Item;
