import Types from "../types/likes";

const INITIAL_STATE = {
  likes: [],
};
export default function likesReducre(state = INITIAL_STATE, actions) {
  const { type, payload } = actions;
  switch (type) {
    case Types.ADD_LIKES:
      const found = state.likes.find((item) => item.id === payload.id);
      if (found) {
        //   payload.qty=0;
          return state;
      } else {
        payload.qty = 1;
        payload.liked=true;
        return {
          likes: [...state.likes, payload],
        };
      }
      case Types.RMOVE_LIKES:
        return{
            likes:[...state.likes.filter((index)=>index.id !== actions.payload)]
        }

    default:
      return {
        ...state,
      };
  }
}
