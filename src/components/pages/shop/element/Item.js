import React from "react";
import { Card, Col } from "antd";
import ItemStyle from "../style/ItemStyle";

const { Meta } = Card;

const Item = ({ name, price, priceUnit }) => {
  return (
    <ItemStyle>
      <div className="card-container">
        <Card className="card-content" hoverable>
          <p className="card-title">{name}</p>
          <br />
          <p className="card-value">{price + " " + priceUnit}</p>
        </Card>
      </div>
    </ItemStyle>
  );
};

export default Item;
