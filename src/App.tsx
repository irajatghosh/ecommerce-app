import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Navbar from './components/Navbar';
import './App.css'; // Import Navbar styles

import ProductDetails from './pages/ProductDetails';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="home-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
