import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create context for products
export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // Initialize as an empty array
  const [filteredProducts, setFilteredProducts] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    // Fetch products when the component mounts
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data); // Initially, show all products
        setLoading(false); 
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError(error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  return (
    <ProductsContext.Provider value={{ products, filteredProducts, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
