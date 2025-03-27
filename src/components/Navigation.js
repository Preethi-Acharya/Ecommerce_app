import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.scss"; 

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/cart" className="nav-link">Cart</Link>
      <Link to="/checkout" className="nav-link">Checkout</Link>
      <Link to="/orderconfirmation" className="nav-link">Order Confirmation</Link>
    </div>
  );
};

export default Navigation;