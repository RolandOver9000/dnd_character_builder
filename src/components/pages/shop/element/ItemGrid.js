import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { ItemGridStyle } from "../style/ItemGridStyle";

import Item from "./Item";

import { ItemContext } from "../context/ItemContext";

export const ItemGrid = (props) => {
  const classes = ItemGridStyle();
  const { itemDetails } = useContext(ItemContext);

  function FormRow() {
    return (
      <React.Fragment>
        {itemDetails.map((itemDetail) => (
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Item
                name={itemDetail.name}
                price={itemDetail.cost.quantity}
                priceUnit={itemDetail.cost.unit}
                key={itemDetails._id}
              />
            </Paper>
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
};
