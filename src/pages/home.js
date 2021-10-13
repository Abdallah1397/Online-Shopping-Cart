import { Grid, makeStyles } from "@material-ui/core";
import ProductCard from "../components/Card/card";

import axios from "axios";
import { setProducts } from "../redux/actions/products";

import { addToCart } from "../redux/actions/cart";
import { addLikes } from "../redux/actions/likes";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import Progress from "../components/Progress/progress";

import { selectProduct } from "../redux/selectors/selectorFile";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

// import Paginate
import ReactPaginate from "react-paginate";


// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    justifyContent: "center",
    width: "80%",
    marginLeft: "10%",
  },
  paginate:{
    display:"flex",
    justifyContent: "center",
    width: "100%",
    marginTop:"15px",
  }
}));


// Component
const Home = (props) => {
  // for styles
  const classes = useStyles();

  // Loading State
  const [loading, setLoading] = useState(false);

  // 1st Dispatch actions
  const dispatch = useDispatch();

  // Fetch Data
  const fetechData = () => {
    // Set loading true to show the loading icon
    setLoading(true);
    axios.get("https://fakestoreapi.com/products").then((res) => {
      dispatch(setProducts(res.data));
      setLoading(false);
    });
  };
  // 2 useEffect to render data after the first rendering
  useEffect(() => {
    fetechData();
  }, []);

  // 3 mapStateToProps
  // const products = useSelector((state) => state.products.products);

  // get the likes State
  // const loadLikes = useSelector((state) => (state ? state.likes.likes : null));

  // Paginate
  // Page Number State
  const [pageNumber, setPageNumber] = useState(0);
  // Num of Product per Page
  const productsPerPage = 6;

  const pageVisited = pageNumber * productsPerPage;
  const pageCount = Math.ceil(props.products.length / productsPerPage);
  /* Changing Page Function  */
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className={classes.root}>
      {!loading ? (
        <Grid container spacing={1} className={classes.grid}>
          {props.products
            .slice(pageVisited, pageVisited + productsPerPage)
            .map((item) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                  <ProductCard
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    // dispath actions
                    onClickCart={() => {
                      dispatch(addToCart(item));
                    }}
                    onClickLikes={() => {
                      dispatch(addLikes(item));
                    }}
                  />
                </Grid>
              );
            })}
          <Grid className={classes.paginate}>
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              pageCount={pageCount}
              onPageChange={changePage}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          </Grid>
        </Grid>
      ) : (
        <Progress />
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectProduct,
});

export default connect(mapStateToProps)(Home);
