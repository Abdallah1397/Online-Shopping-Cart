import Types from '../types/products';

const INITIAL_STATE={
    product:[],
}

export default function productDetails(state,actions){
    const {type,payload}=actions;
    switch(type){
        case Types.SELECT_PRODUCT:
            return{
                ...state,
                product:payload,
            }
        default:
            return{
                ...state,
            }
    }
}