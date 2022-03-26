import {
  INCREMENT,
  DECREMENT,
  ADD_TO_CART,
  DELETE_FROM_CART,
} from "./app-actions";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case DECREMENT:
      return {
        ...state,
        quantity: state.quantity === 0 ? 0 : state.quantity - 1,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [action.payload],
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
