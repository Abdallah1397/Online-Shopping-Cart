import { useSelector } from "react-redux";

export const LoadCart = () => {
  const cart = useSelector(state =>(state? state.cart.cart:null));
  return cart;
};


export const GetTotalLength = () => {
  const cart = LoadCart();
  return( cart? cart.reduce((total, item) => {
        return total+item.qty;
      }, 0)
    : 0)
};

export const LoadLikes = () => {
  const likes = useSelector(state =>(state? state.likes.likes:null));
  return likes;
};

export const GetTotalLikesLength = () => {
  const likes = LoadLikes();
  return( likes? likes.reduce((total, item) => {
        return total+item.qty;
      }, 0)
    : 0)
};

