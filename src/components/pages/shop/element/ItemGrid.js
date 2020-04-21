import React, { useContext } from "react";
import { Row, Col } from "antd";
import ShopStyle from "../style/ItemGridStyle";

import Item from "./Item";

import { ItemContext } from "../context/ItemContext";
import { CategoryContext } from "../context/CategoryContext";

export const Shop = (props) => {
  const { itemDetails } = useContext(ItemContext);
  const { itemCategories } = useContext(CategoryContext);

  return (
    <ShopStyle>
      <div>
        <div className="category-menu">
          <Col>
            {itemCategories.map((category) => (
              <Row className="category" button key={category.index}>
                <p>{category.name}</p>
              </Row>
            ))}
          </Col>
        </div>
        <div className="item-grid">
          <Row>
            {itemDetails.map((itemDetail) => (
              <Item
                name={itemDetail.name}
                price={itemDetail.price}
                priceUnit={itemDetail.unit}
                key={itemDetails._id}
              />
            ))}
          </Row>
        </div>
      </div>
    </ShopStyle>
  );
};

export default Shop;
