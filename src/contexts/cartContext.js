import React, { createContext, useReducer } from "react";
import { CartReducer } from "./cartReducer";

export const cartContext = createContext();

const initialState = {
  cartItems: [],
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addProduct = (payload) => {
    dispatch({ type: "ADD", payload });
    return state.cartItems;
  };

  const removeProduct = (payload) => {
    dispatch({ type: "REMOVE", payload });
    return state.cartItems;
  };

  const increaseQuantity = (payload) => {
    dispatch({ type: "INCQTY", payload });
    return state.cartItems;
  };

  const decreaseQuantity = (payload) => {
    dispatch({ type: "DECQTY", payload });
    return state.cartItems;
  };

  const clearBasket = () => {
    dispatch({ type: "CLEAR", payload: undefined });
    return state.cartItems;
  };

  const getItems = () => {
    return state.cartItems;
  };

  const contextValue = {
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    clearBasket,
    getItems,
    ...state,
  };
  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  );
};

export default CartContextProvider;
