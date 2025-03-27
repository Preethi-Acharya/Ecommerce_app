import React, { useState, useContext } from "react";
import { ProductsContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const MainMenu = () => {
  const { products, loading, error, filteredProducts } = useContext(ProductsContext);
  
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 12;

  // total number of pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // products for current page
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="main-menu">
      <h2 className="listing-heading">Product Listing</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="product-grid">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainMenu;
