// Cart reducer
export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newCart = [...state.cartItems, action.payload];
      localStorage.setItem('cartItems', JSON.stringify(newCart));
      return { cartItems: newCart };

    case 'REMOVE_FROM_CART':
      const updatedCart = state.cartItems.filter(item => item.id !== action.payload.id);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      return { cartItems: updatedCart };

    case 'CLEAR_CART':
      localStorage.removeItem('cartItems');
      return { cartItems: [] };

    default:
      return state;
  }
};
