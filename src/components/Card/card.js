import {
  makeStyles,
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  IconButton,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Book from "../../assets/images/the-paris-library-9781982134198_hr.jpg";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  title: {
    height:'85px',
    textAlign: "center",
    fontFamily: "italic",
    alignItems: "baseLine",
  },
  navLink:{
    textDecoration:'none',
    color:"black",
  },
  img:{
    marginLeft:'20%',
  }
});
const ProductCard = ({ id, image, title, description,liked,onClickCart,onClickLikes }) => {
  const classes = useStyles();


  
  return (
    <Card className={classes.root} key={id}>
      <CardActionArea>
      <NavLink exact to={`/${id}`} className={classes.navLink}>
          <CardMedia>
            <img src={image} width="60%" height="250" className={classes.img} />
          </CardMedia>
          <CardContent>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </CardContent>
        </NavLink>
        <CardActions>
          <IconButton color="inherit" aria-label="show the likes number" onClick={onClickLikes}>
            {liked?<FavoriteIcon/>:<FavoriteBorder />}
          </IconButton>
          <IconButton color="inherit" aria-label="show the cart number" onClick={onClickCart}>
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
export default ProductCard;
