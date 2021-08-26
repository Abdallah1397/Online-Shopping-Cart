import { combineReducers } from "redux";
import productsReducer from './products';
import productDetailsReducer from './productDetail';
import cartReducer from "./cart";
import likesReducer from './likes';
const reducers=combineReducers({
    products:productsReducer,
    product:productDetailsReducer,
    cart:cartReducer,
    likes:likesReducer,

});
export default reducers;