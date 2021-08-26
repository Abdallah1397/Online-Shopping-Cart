import Drawer, { Divider, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import {useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeLikes } from "../../redux/actions/likes";
import {GetTotalLikesLength} from '../../utils/helpers'
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
  },
});

const LikesDrawer = () => {
  // For Style
  const classes = useStyles();

  // Get the Likes from State management
  const allLikes = useSelector((state) => state.likes.likes);

  //   To disptach an specific action
  const dispatch = useDispatch();

  const Likes=GetTotalLikesLength();

  return (
    <div className={classes.drawer}>
      <Typography variant="h4" className={classes.typography}>Likes</Typography>
      <Divider style={{ marginTop: "10px" }} />

      {allLikes.map((item) => {
        if (item !== 0) {
          return (
            <div className={classes.drawerItem}>
              <img src={item.image} width="80px" />
              <h6>{item.title}</h6>
              <IconButton onClick={()=>{dispatch(removeLikes(item.id))}}>
                <DeleteIcon />
              </IconButton>
              <Divider />
            </div>
          );
        } else {
          <h1>No Item To Show</h1>;
        }
      })}
      <span>Total : {Likes} likes</span>
    </div>
  );
};
export default LikesDrawer;
