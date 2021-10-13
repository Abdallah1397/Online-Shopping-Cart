import {
  AppBar,
  Badge,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import { Drawer } from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { GetTotalLength, GetTotalLikesLength } from "../../utils/helpers";
import LikesDrawer from "../Drawer/likesdrawer";

import CartDrawer from "../Drawer/cartDrawer";

// makeStyles
const useStyle = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: "0",
    left: "0",
    zIndex: "1",
    marginBottom: 80,
  },
  navbar: {},
  menuButton: {
    marginRight: theme.spacing(5),

    color: "white",
    textDecoration: "none",
  },
  title: {
    flexGrow: 1,
    '& #link':{
      color:'#fff',
      textDecoration:'none',
      fontFamily:'cursive',
    },
    
  },

  // for the the responsive
  sectionDesktop: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

// Navbar Component
const Navbar = () => {
  // state for Likes Drawer
  const [drawerStatus, setDrawerStatus] = useState({ right: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerStatus({ ...drawerStatus, [anchor]: open });
  };
  // state for Cart Drawer
  const [drawerCartStatus, setDrawerCartStatus] = useState({ right: false });
  const toggleCartDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerCartStatus({ ...drawerCartStatus, [anchor]: open });
  };

  // get the cart length
  const length = GetTotalLength();
  // get the Likes length
  const likesLength = GetTotalLikesLength();
  // state for togle icon
  const [anchor, setAnchor] = useState(false);
  const handleClick = () => {
    setAnchor(true);
  };
  const handleClose = () => {
    setAnchor(false);
  };
  // Declare useStyle ('MakeStyle Hook style')
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar}>
        <Toolbar>
          {/* Logo */}

          <Typography variant="h5" className={classes.title}>
            <Link exat to='/' id="link">Products</Link>
          </Typography>
          {/* Desktop Display */}
          <div className={classes.sectionDesktop}>
            {/* Likes Section */}
            <IconButton
              color="inherit"
              aria-label="show the likes number"
              onClick={toggleDrawer("right", true)}
            >
              <Badge badgeContent={likesLength} color="secondary">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            {/* Likes Drawer */}
            <Drawer
              anchor={"right"}
              open={drawerStatus["right"]}
              onClose={toggleDrawer("right", false)}
            >
              <LikesDrawer />
            </Drawer>

            {/* Cart Section */}
            <IconButton
              color="inherit"
              aria-label="show the cart number"
              onClick={toggleCartDrawer("right", true)}
            >
              <Badge badgeContent={length} color="secondary">
                <AddShoppingCartIcon />
              </Badge>
            </IconButton>
            {/* Likes Drawer */}
            <Drawer
              anchor={"right"}
              // Side from which the drawer will appear.
              open={drawerCartStatus["right"]}
              // If true, the drawer is open.
              onClose={toggleCartDrawer("right", false)}
            >
              <CartDrawer />
            </Drawer>
          </div>

          {/* Mobile Disblay */}
          {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              color="inherit"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchor}
              keepMounted
              open={anchor}
              onClose={handleClose}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              variant={"selectedMenu"}
            >
              <MenuItem onClick={handleClose}>
                <IconButton color="inherit" aria-label="show the likes number">
                  <Badge badgeContent={likesLength} color="secondary">
                    <FavoriteIcon />
                  </Badge>
                </IconButton>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <IconButton color="inherit" aria-label="show the cart number">
                  <Badge badgeContent={length} color="secondary">
                    <AddShoppingCartIcon />
                  </Badge>
                </IconButton>
              </MenuItem>
            </Menu>
          </div> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
