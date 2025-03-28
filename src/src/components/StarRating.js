import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const stars = Array(5)
    .fill()
    .map((_, index) => {
      if (rating >= index + 1) {
        return <FaStar key={index} />;
      } else if (rating > index && rating < index + 1) {
        return <FaStarHalfAlt key={index} />;
      } else {
        return <FaRegStar key={index} />;
      }
    });
  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
