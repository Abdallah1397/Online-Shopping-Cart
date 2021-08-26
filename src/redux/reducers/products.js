import Types from '../types/products';

const INITIAL_STATE={
    products:[]
}

export default function productStore(state=INITIAL_STATE,actions){
    const {type,payload}=actions;
    switch(type){
        case Types.SET_PRODUCTS:
            return{
                ...state,
                products:payload,
            };
        default:
            return{
                ...state,
            };
    }
}