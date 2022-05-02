import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function NestedDropdown() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [menuName, setMenuName] = React.useState(null);

  const mainMenuListArr = ["a", "b", "c"];

  const subMenuObj = {
    a: ["a.1", "a.2", "a.3"],
    b: ["b.1", "b.2", "b.3"],
    c: ["c.1", "c.2", "c.3"]
  };

  const list = anchor => {
    let arr = menuName ? subMenuObj[menuName] : mainMenuListArr;
    const clickListener = text => {
      if (!menuName) {
        return setMenuName(text);
      } else {
        return alert(`${text} clicked`);
      }
    };
    return (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === "top" || anchor === "bottom"
        })}
        role="presentation"
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {arr.map((text, index) => (
            <ListItem button key={text} onClick={() => clickListener(text)}>
              <ListItemText primary={text} />
              {!menuName && <ChevronRightIcon />}
            </ListItem>
          ))}
        </List>
      </div>
    );
  };

  return (
    <div>
      {["left", "right", "top", "bottom"].map(anchor => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {menuName && (
              <ListItem button onClick={() => setMenuName(null)}>
                <ListItemText primary="Back to main menu" />
                <ChevronLeftIcon />
              </ListItem>
            )}
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
