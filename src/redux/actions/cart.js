import Types from "../types/cart";

export const addToCart = (content) => ({
  type: Types.ADD_TO_CART,
  payload: content,
});

export const removeFromCart = (itemId) => ({
  type: Types.REMOVE_FROM_CART,
  payload: itemId,
});


export const increaseOrder = (content) => {
    return {
      type: Types.INCREASE_ORDER,
      payload: content,
    };
  };
  
  export const decreaseOrder = (content) => {
    return {
      type: Types.DECREASE_ORDER,
      payload: content,
    };
  };
  
  export const changeQuantity = (content) => {
    return {
      type: Types.GHANGE_QTY,
      payload: content,
    };
  };

  
export const clearCart = () => {
    return {
      type: Types.CLEAR_CART,
    };
  };