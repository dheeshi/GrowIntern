import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/shop";
import Auth from "./pages/Auth/Auth";
import Cart from "./pages/cart";
import Checkout from "./components/items/checkout";
import Thankyou from "./components/items/thankyou";
import User from "./pages/User/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/user" element={<User />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
