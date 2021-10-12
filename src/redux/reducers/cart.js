import Types from '../types/cart';

const INITIAL_STATE={
    cart:[],
}

export default function cartReducer(state=INITIAL_STATE,actions){
    const {type,payload}=actions;
    
    switch(type){
        case Types.ADD_TO_CART:
            // to show the item already exists in the cart
            const found=state.cart.find((item)=>item.id===payload.id);
            if(found){
                // if exists set the qty ++
                payload.qty++;
                return state;
            }else{
                // else set the qty =1 xk
                payload.qty=1;
                return{
                    cart: [...state.cart, payload],
                }
            }
            default:
                return{
                    ...state,
                };
         
    }
}