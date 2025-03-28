import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  const navigate = useNavigate();
  const handleAddToBag = () => {
    if (product) {
      dispatch({ type: "ADD_TO_CART", payload: product });
      navigate("/cart");
    }
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img className="product-image" src={product.image} alt={product.title} />
        <div className="product-title">{product.title}</div>
        </Link>
        <div className="product-description">{product.description}</div>
        <div className="product-reviews">
          {/* Render 5 stars (this can be dynamic based on the product rating) */}
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} color={index < product.rating.rate ? "#FFD700" : "#ccc"} />
          ))}
        </div>
        <div className="product-cost">${product.price}</div>
      
      
      {/* Product description is not inside Link, so no blue color or cursor */}
      

      <button className="add-to-bag-btn" onClick={handleAddToBag}>Add to Bag</button>
    </div>
  );
};

export default ProductCard;
