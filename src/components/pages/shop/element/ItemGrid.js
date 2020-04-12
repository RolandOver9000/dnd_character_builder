import React, { useContext } from "react";
import { Row } from "antd";

import Item from "./Item";

import { ItemContext } from "../context/ItemContext";

export const ItemGrid = (props) => {
  const { itemDetails } = useContext(ItemContext);

  return (
    <Row>
      {itemDetails.map((itemDetail) => (
        <Item
          name={itemDetail.name}
          price={itemDetail.cost.quantity}
          priceUnit={itemDetail.cost.unit}
          key={itemDetails._id}
        />
      ))}
    </Row>
  );
};
