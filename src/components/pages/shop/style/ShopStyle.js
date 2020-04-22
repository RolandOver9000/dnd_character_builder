import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export const ShopStyle = makeStyles((theme) => ({
  listItem: {
    borderBottom: "2px black",
  },
  list: {
    backgroundColor: "#db0f29",
    color: "black",
  },
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));
