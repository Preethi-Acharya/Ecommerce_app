import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import "../styles/CheckoutPage.scss"; 

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
//   const [shippingDetails, setShippingDetails] = useState('Standard Shipping');
//   const [itemCount, setItemCount] = useState(cartItems.length);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch('/api/user-details');
      const data = await response.json();
      
      if (data) {
        setUserData({
          name: data.name || 'John Doe',
          email: data.email || 'john@example.com',
          address: data.address || '123 Random Street, City, Country',
        });
        setPaymentMethod(data.paymentMethod || 'Credit Card');
        // setShippingDetails(data.shippingDetails || 'Standard Shipping');
      } else {
        setUserData({
          name: 'John Doe',
          email: 'john@example.com',
          address: '123 Random Street, City, Country',
        });
        setPaymentMethod('Credit Card');
        // setShippingDetails('Standard Shipping');
      }
    } catch (error) {
      console.error('Failed to fetch user data', error);
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handlePlaceOrder = () => {
    // Here, you can add functionality to submit the order.
    console.log('Placing Order:', { ...userData, totalPrice: calculateTotalPrice() });
    navigate('/order-confirmation');
  };

  return (
    <div className="checkout-page">
      {/* Left Section: Shipping Details, Payment, Your Items */}
      <div className="left-section">
        <div className="box">
          <h3>Shipping Details</h3>
          <div className="box-content">
            <p>{userData.address}</p>
          </div>
        </div>

        <div className="box">
          <h3>Payment Details</h3>
          <div className="box-content">
            <p>Payment Method: {paymentMethod}</p>
          </div>
        </div>

        <div className="box">
          <h3>Your Items</h3>
          <div className="box-content">
            <div className="item-summary">
              {/* <span>{itemCount} Item(s)</span> */}
              <span className="edit-bag" onClick={() => navigate('/cart')}>
                Edit Bag
              </span>
            </div>
            <div className="item-image">
              <img src={cartItems[0]?.image} alt={cartItems[0]?.title} style={{ width: '20%', height: '20%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Order Summary */}
      <div className="right-section">
        <h3>Order Summary</h3>
        <div className="summary-row">
          <div className="summary-column">Sub Total</div>
          <div className="summary-column">${calculateTotalPrice()}</div>
        </div>
        <div className="summary-row">
          <div className="summary-column">Shipping</div>
          <div className="summary-column">Free</div>
        </div>
        <div className="summary-row">
          <div className="summary-column">Estimated Tax</div>
          <div className="summary-column">---</div>
        </div>
        <div className="summary-row">
          <div className="summary-column bold">Estimated Total</div>
          <div className="summary-column bold">${calculateTotalPrice()}</div>
        </div>
        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
