import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListingPage from "./components/ProductListingPage";
import './styles/main.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsProvider from "./context/ProductContext";
import SingleProductPage from "./components/SingleProductPage";
import { CartProvider } from "./context/CartContext";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import OrderConfirmationPage from "./components/OrderConfirmationPage";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <ProductsProvider>
      <CartProvider>
      <Router>
        <Header/>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<ProductListingPage />} />
            <Route path="/products" element={<ProductListingPage />}/>
            <Route path="/product/:productId" element={<SingleProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage/>} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage/>}/>
          </Routes>
        </main>

        <Footer />
      </Router>
    </CartProvider>
    </ProductsProvider>
  );
};

export default App;
