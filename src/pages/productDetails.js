import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectProduct } from "../redux/actions/products";
import ProductCard from "../components/Card/card";
import Progress from "../components/Progress/progress";

const ProductDetails = () => {
  // to get the id
  const params = useParams();

  // Loading State
  const [loading,setLoading]=useState(false);

  const dispatch = useDispatch();
  const fetchData = () => {
    setLoading(true);
    axios.get(
      `https://fakestoreapi.com/products/${params.id}`
    ).then((res)=>{
      dispatch(selectProduct(res.data));
      setLoading(false);
    })
  };
  useEffect(() => {
    if (params.id) {
      fetchData();
    }
  }, []);

  const product = useSelector((state) => state.product.product);
  console.log(product, "product");
  return (
    <div>
      {product? (
        <ProductCard
          id={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
        />
      ) : (
        <Progress/>
      )}
    </div>
  );
};
export default ProductDetails;
