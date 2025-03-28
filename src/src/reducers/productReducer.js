export const productReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_PRODUCTS_SUCCESS":
        return { ...state, products: action.payload, loading: false };
      case "FETCH_PRODUCTS_ERROR":
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  