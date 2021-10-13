import { createSelector } from "reselect";

// All Products
const allProductState = state=>state.products
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

