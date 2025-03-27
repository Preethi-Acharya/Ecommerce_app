import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate  } from "react-router-dom"; // Hook to get params from URL
import { ProductsContext } from "../context/ProductContext"; // Assuming you're using a context to store products
import StarRating from "./StarRating"; // Assuming you have a StarRating component
import "../styles/SingleProductPage.scss"; // Your updated styles
import { CartContext } from "../context/CartContext";

const SingleProductPage = () => {
  const { productId } = useParams(); // Get productId from URL
  const { products } = useContext(ProductsContext); // Fetch products from context
  const { dispatch } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Find the product with the matching ID
    const foundProduct = products.find((product) => product.id.toString() === productId);
    setProduct(foundProduct);
  }, [productId, products]); // Re-run the effect when productId changes

  const handleAddToBag = () => {
    if (product) {
      dispatch({ type: "ADD_TO_CART", payload: product });
      navigate("/cart");
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  // Use the product's images, or fallback to the main image repeated if no other images are available
  const hasImages = product.images && product.images.length > 0;
  const mainImage = product.image || "path/to/placeholder/image.jpg"; // Fallback image if no product image is available

  const thumbnailImages = hasImages ? product.images.slice(0, 5) : Array(5).fill(mainImage); // Ensure 5 thumbnails, even if there's only one image

  return (
    <div className="single-product-page">
      {/* Left Section: Product Image and Thumbnails */}
      <div className="left-section">
        <div className="main-image-container">
          <img src={mainImage} alt={product.title || "Product"} className="main-image" />
        </div>

        {/* Thumbnails Section below the main image */}
        <div className="image-thumbnails">
          {thumbnailImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className="thumbnail"
              onClick={() => console.log(`Clicked on thumbnail ${index}`)} // Handle thumbnail click
            />
          ))}
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="right-section">
        <h2>{product.title}</h2>
        <p>{product.description}</p>

        {/* Star Reviews */}
        <div className="reviews">
          <div className="stars">
            <StarRating rating={product.rating.rate} /> {/* Using StarRating component */}
          </div>
          <div className="reviews-actions">
            <button className="reviews-btn">Reviews</button>
            <button className="qa-btn">Q & A</button>
          </div>
        </div>

        {/* Price */}
        <div className="price">${product.price}</div>

        {/* Availability Box */}
        <div className="availability-box">
          <div>Available to ship: Yes</div>
          <div>Check In-store Availability</div>
          <div>Same Day Eligibility</div>
        </div>

        {/* Add to Bag */}
        <button className="add-to-bag-btn" onClick={handleAddToBag}>Add to Bag</button>
      </div>
    </div>
  );
};

export default SingleProductPage;
