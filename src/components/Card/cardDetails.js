import {
  makeStyles,
  Paper,
  Card,
  Grid,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@material-ui/core";

import IndeterminateCheckBoxOutlinedIcon from "@material-ui/icons/IndeterminateCheckBoxOutlined";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";

// for the style
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "80%",
    margin: "10%",
    padding: "3%",
  },
  image: {
    marginLeft: "10%",
  },
  title: {
    fontWeight: "bolder",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
    },
  },
  subTitle: {
    marginTop: "5%",
  },
  actions: {
    textAlign: "right",
    marginTop: "3%",
  },
}));

// Card Details Component
const CardDetails = ({
  id,
  image,
  title,
  subTitle,
  likedClick,
  qty,
  onClickCart,
}) => {

  // call the style
  const classes = useStyles();
  return (
    //   OutLined Card
    <Card className={classes.root} variant="outlined" id={id}>
      {/* to handle responsive style */}
      <Grid xs={12} container>
        <Grid md={3} xs={12}>
          <CardMedia>
            <img
              src={image}
              width="80%"
              height="250"
              className={classes.image}
            />
          </CardMedia>
        </Grid>
        <Grid md={9} xs={12}>
          <CardContent>
            <Typography variant="h4" className={classes.title}>
              {title}
            </Typography>
            <Typography variant="body2" className={classes.subTitle}>
              {subTitle}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Grid xs={12} className={classes.actions}>
        {typeof qty === "undefined" ? (
          <IconButton
            color="inherit"
            aria-label="show the cart number"
            onClick={onClickCart}
          >
            <AddShoppingCartIcon />
          </IconButton>
        ) : (
          <>
            <IconButton color="inherit" aria-label="show the cart number">
              <IndeterminateCheckBoxOutlinedIcon />
            </IconButton>
            {qty}
            <IconButton color="inherit" aria-label="show the cart number">
              <AddBoxOutlinedIcon />
            </IconButton>
          </>
        )}
        <IconButton color="inherit" aria-label="show the likes number" onClick={likedClick}>
          <FavoriteBorder />
        </IconButton>
      </Grid>
    </Card>
  );
};
export default CardDetails;
