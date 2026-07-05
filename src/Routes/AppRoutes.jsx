// src/Routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

// Pages
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Checkout from "../pages/Checkout";
import About from "../pages/About";
import OrderSuccess from "../pages/OrderSuccess";
import OrderHistory from "../pages/OrderHistory";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/orders" element={<OrderHistory />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;