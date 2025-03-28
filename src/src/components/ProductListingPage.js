import React, { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";

const ProductListingPage = () => {
  const { filteredProducts } = useContext(ProductsContext); // Get filtered products from context
  const [currentPage, setCurrentPage] = useState(1); // Tracking current page
  const productsPerPage = 6; // Number of products per page

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <div className="main-menu">
        <h2>Product Listing</h2> 

        <div className="product-grid">
          {currentProducts && currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1} className="pagination-button">
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages} className="pagination-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductListingPage;
