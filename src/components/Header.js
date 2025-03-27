import React, { useState, useContext } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext"; // Access cart context
import { ProductsContext } from "../context/ProductContext";

const Header = () => {
  // const { state } = useContext(CartContext); // Access the state from CartContext
  const [searchQuery, setSearchQuery] = useState("");
  const { filterProducts } = useContext(ProductsContext);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterProducts(query); // Call filterProducts from context whenever search query changes
  };

  const { cartItems } = useContext(CartContext); // Get the number of items in the cart

  return (
    <header className="header">
      <div className="header-left">
        {/* Logo */}
        <img src="/assets/images/logo.jpg" alt="Logo" className="logo" />
      </div>

      <div className="header-center">
        {/* Shop Name */}
        <h1>E-commerce</h1>

        {/* Navigation */}
        <nav className="header-menu">
          <a href="/">Home</a>
          <a href="/products">Products</a>
        </nav>
      </div>

      <div className="header-right">
        {/* Search Bar with Icon */}
        <div className="search-bar">
          <FaSearch />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange} // Handle search change
          />
        </div>

        {/* User Icon */}
        <FaUser className="header-icon" />

        {/* Cart Icon */}
        <div className="cart-icon">
          <FaShoppingCart size={24} />
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </div>
      </div>
    </header>
  );
};

export default Header;
