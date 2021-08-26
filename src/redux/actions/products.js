import Types from '../types/products';

export const setProducts=(products)=>({
    type:Types.SET_PRODUCTS,
    payload:products,
});

export const selectProduct=(product)=>({
    type:Types.SELECT_PRODUCT,
    payload:product,
})