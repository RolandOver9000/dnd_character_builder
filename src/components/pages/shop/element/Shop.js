import React, { useContext } from "react";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ShopStyle } from "../style/ShopStyle";

import { CategoryContext } from "../context/CategoryContext";
import { ItemGrid } from "./ItemGrid";

export const Shop = () => {
  const classes = ShopStyle();
  const { itemCategories } = useContext(CategoryContext);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Divider />
        <List className={classes.list}>
          {itemCategories.map((category) => (
            <ListItem button key={category}>
              <ListItemText primary={category.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ItemGrid></ItemGrid>
      </main>
    </div>
  );
};

export default Shop;
