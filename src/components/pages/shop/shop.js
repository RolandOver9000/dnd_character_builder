import React, { useContext } from "react";
import { ItemContext } from "./ItemContext";
import Item from "./Item";

import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

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
