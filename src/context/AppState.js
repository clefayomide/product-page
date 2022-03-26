import { useState, useReducer } from "react";
import AppContext from "./AppContext";
import reducer from "./app-reducer";
import {
  INCREMENT,
  DECREMENT,
  ADD_TO_CART,
  DELETE_FROM_CART,
} from "./app-actions";

const AppState = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const getCart = localStorage.getItem("cart");
  const convertToObject = getCart && JSON.parse(getCart);

  const initialState = {
    cart: convertToObject ? convertToObject : [],
    quantity: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // increment
  const increment = () => {
    dispatch({ type: INCREMENT });
  };

  // decrement
  const decrement = () => {
    dispatch({ type: DECREMENT });
  };

  // addToCart
  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  // deleteFromCart
  const deleteFromCart = (id) => {
    dispatch({ type: DELETE_FROM_CART, payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        openMenu,
        setOpenMenu,
        openCart,
        setOpenCart,
        quantity: state.quantity,
        cart: state.cart,
        increment,
        decrement,
        addToCart,
        deleteFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
