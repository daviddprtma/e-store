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
  };

  const contextValue = {
    addProduct,
    ...state,
  };
  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  );
};

export default CartContextProvider;
