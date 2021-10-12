import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { selectProduct } from "../redux/actions/products";
import { addToCart } from "../redux/actions/cart";
import { addLikes } from "../redux/actions/likes";

import CardDetails from "../components/Card/cardDetails";
import Progress from "../components/Progress/progress";

import { selectOneProduct } from "../redux/selectors/selectorFile";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const ProductDetails = (props) => {
  // to get the id
  const params = useParams();

  // Loading State
  const [loading,setLoading]=useState(false);

  // to dispatch actions 
  const dispatch = useDispatch();

  // get the data of specific ID
  const fetchData = () => {
    setLoading(true);
    axios.get(
      `https://fakestoreapi.com/products/${params.id}`
    ).then((res)=>{
      dispatch(selectProduct(res.data));
      setLoading(false);
    })
  };

  // to render the data
  useEffect(() => {
    if (params.id) {
      fetchData();
    }
  }, []);

  // mapStateToProps => to get the product
  // const product = useSelector((state) => state.product.product);

  const [clicked,setClicked]=useState(true);

  return (
    <div>
      {props.product?
      (
        // if the product exists 
        <>
        <CardDetails
          id={props.product.id}
          image={props.product.image}
          title={props.product.title}
          subTitle={props.product.description}
          onClickCart={()=>{
            dispatch(addToCart(props.product));
          }}
          likedClick={()=>{
            dispatch(addLikes(props.product));
          }}
          qty={props.product.qty}

        />

        </>
      ) : (
        // else : load until the data is acquired
        <Progress/>
      )}
    </div>
  );
};
const mapStateToProps=createStructuredSelector({
  product:selectOneProduct
})
export default connect(mapStateToProps)(ProductDetails);
