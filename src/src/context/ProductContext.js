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
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError(error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  // Function to filter products based on the search query
  const filterProducts = (query) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <ProductsContext.Provider value={{ products, filteredProducts, loading, error, filterProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
