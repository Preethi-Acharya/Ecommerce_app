// OrderConfirmationPage.js

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/OrderConfirmationPage.scss';

const OrderConfirmationPage = () => {
  const [shippingDetails, setShippingDetails] = useState(null);
  const location = useLocation(); // For retrieving passed data from navigation (if any)

  useEffect(() => {
    // Fetch shipping details or get them from location if passed from CheckoutPage
    const fetchShippingDetails = async () => {
      try {
        // Replace with the actual API call for shipping details
        const response = await fetch('/api/shipping-details');
        const data = await response.json();
        setShippingDetails(data || { address: '123 Random Street, City, Country' });
      } catch (error) {
        console.error('Error fetching shipping details:', error);
        setShippingDetails({ address: '123 Random Street, City, Country' }); // fallback
      }
    };
    
    fetchShippingDetails();
  }, []);

  return (
    <div className="order-confirmation-page">
      <h1 className="confirmation-title">Order Confirmation</h1>
      
      <div className="shipping-details-box">
        <h3>Shipping Details</h3>
        <div className="shipping-details-content">
          <p><strong>Address:</strong> {shippingDetails?.address || 'Loading address...'}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
