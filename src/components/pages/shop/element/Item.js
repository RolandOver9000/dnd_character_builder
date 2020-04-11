//ant designt still hereeee

import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const Item = ({ name, price, priceUnit }) => {
  return (
    <div>
      <Card
        className="card"
        hoverable
        style={{ width: "100%", backgroundColor: "#db0f29" }}
        // cover={<img alt="Place of image" src="" />}
      >
        <Meta
          title={name}
          description={price + " " + priceUnit}
          style={{ textAlign: "center" }}
        />
      </Card>
    </div>
  );
};

export default Item;
