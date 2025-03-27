import React, { createContext, useReducer } from 'react';
import { cartReducer } from '../reducers/cartReducer';


// Initialize cart state
const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

// CartProvider component to wrap the app with cart context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
