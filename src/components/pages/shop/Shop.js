import React, { useContext } from "react";
import { ItemContext } from "./ItemContext";
import { CategoryContext } from "./CategoryContext";
import Item from "./Item";

import { NestedGrid } from "/home/csosz/Projects/Advanced/dnd-project/src/components/pages/shop/shopElemenet/ItemGrid.js";

const Shop = () => {
  const { itemDetails } = useContext(ItemContext);
  const { itemCategories } = useContext(CategoryContext);

  return (
    <div>
      {itemDetails.map((itemDetail) => (
        <Item
          name={itemDetail.name}
          price={itemDetail.cost.quantity}
          priceUnit={itemDetail.cost.unit}
          key={itemDetails._id}
        />
      ))}
      <NestedGrid></NestedGrid>
    </div>
  );
};

export default Shop;
