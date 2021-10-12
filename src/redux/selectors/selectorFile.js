import { createSelector } from "reselect";
import products from "../types/products";

// All Products
// state.rootReducer
const allProductState = state=>state.products
// rootReducer.specificState
export const selectProduct =createSelector(
    [allProductState],
    products=>products.products
)


// Get a Specific Product
const oneProduct =state=>state.product
export const selectOneProduct=createSelector(
    [oneProduct],
    product=>product.product
)