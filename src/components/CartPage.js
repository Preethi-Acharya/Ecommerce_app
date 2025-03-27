import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
import { VscSave } from "react-icons/vsc";
import "../styles/CartPage.scss";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const { cartItems, dispatch } = useContext(CartContext);
    const navigate = useNavigate();

    const handleRemoveFromCart = (product) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: product });
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    const handleCheckout = () => {
        navigate("/checkout");
    };

    return (
        <div className="cart-page">
            <div className="cart-page-left-section">
                <div className="pickup-options">
                    <h3>Pickup and Delivery Options</h3>
                    <div className="pickup-options-box">
                        <div className="pickup-option">Ship via Amazon</div>
                        <div className="pickup-option">Pickup from Store</div>
                        <div className="pickup-option">Same Day Delivery</div>
                    </div>
                </div>
                <div className="bag-details">
                    <h3>Bag</h3>
                    {cartItems.map((item) => (
                        <div className="bag-item" key={`${item.id}-${item.title}-${item.description}`} >
                            <div className="image">
                                <img src={item.image} alt={item.title} className="bag-item-image" />
                            </div>
                            <div className="title">{item.title}<br />
                                {item.description}<br />
                                Color: Red
                            </div>
                            <div className="dropdown">
                                <select className="dropdown-select">
                                    <option value="item1">Item 1</option>
                                    <option value="item2">Item 2</option>
                                    <option value="item3">Item 3</option>
                                    <option value="item4">Item 4</option>
                                    <option value="item5">Item 5</option>
                                </select>
                            </div>
                            <div>
                            </div>
                            <div className="price">${item.price}</div>
                            <div></div>
                            <div></div>
                            <div className="remove-save-container">
                                <div className="remove-save">
                                    <FaTrash onClick={() => handleRemoveFromCart(item)} />
                                    <span>Remove</span>
                                </div>
                                <div className="remove-save">
                                    <VscSave onClick={() => handleRemoveFromCart(item)} />
                                    <span>Save for later</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="right-section">
                <h3>Order Summary</h3>
                <div className="summary-item">
                    <span>Sub Total</span>
                    <span>${calculateTotalPrice()}</span>
                </div>
                <div className="summary-item">
                    <span>Shipping</span>
                    <span>Free</span>
                </div>
                <div className="summary-item">
                    <span>Estimated Tax</span>
                    <span>---</span>
                </div>
                <div className="summary-item total">
                    <span><b>Estimated Total</b></span>
                    <span><b>${calculateTotalPrice()}</b></span>
                </div>
                <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
                <button className="coupon-btn">Add a Coupon Code</button>
            </div>
        </div>
    );
};

export default CartPage;
