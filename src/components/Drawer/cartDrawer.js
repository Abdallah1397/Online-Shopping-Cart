import Drawer, { Divider, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeLikes } from "../../redux/actions/likes";

const useStyles = makeStyles({
  drawer: {
    padding: "10px",
    fontWeight: "bolder",
    textAlign: "center",
  },
  drawerItem: {
    paddingTop: "20px",
    textAlign: "center",
  },
  typography:{
    fontFamily:'fantasy',
  }
});

const CartDrawer = () => {
  // For Style
  const classes = useStyles();

  //   Total Sum
  let sum=0;

  // Get the Cart from State management
  const allCart = useSelector((state) => state.cart.cart);

  //   To disptach an specific action
  const dispatch = useDispatch();

  return (
    <div className={classes.drawer}>
      <Typography variant="h3" className={classes.typography}>Cart</Typography>
      <Divider style={{ marginTop: "10px" }} />

      {allCart.map((item) => {
        if (item !== 0) {
          {sum=sum+(item.price * item.qty)}

          return (
            <div className={classes.drawerItem} key={item.id}>
              <img src={item.image} width="200px" />
              {/* <h5>{item.title}</h5> */}
              <h6>
                {item.price} * {item.qty} = {item.price * item.qty} LE
              </h6>
              
              <Divider />
            </div>
          );
        } else {
          <h1>No Item To Show</h1>;
        }
      })}
      <span >Total : {sum} LE</span>
    </div>
  );
};
export default CartDrawer;
