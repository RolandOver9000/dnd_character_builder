import React from "react";
import { Card } from "antd";
import "./ItemCard.css";

const { Meta } = Card;

const Item = ({ name, price }) => {
  return (
    <div>
      <Card
        className="card"
        hoverable
        style={{ width: 240 }}
        cover={<img alt="Place of image" src="" />}
      >
        <Meta title={name} description={price} />
      </Card>
    </div>
  );
};

export default Item;
