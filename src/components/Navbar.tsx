import React from 'react';
import { Link } from 'react-router-dom';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const wishlistCount = useSelector(
    (state: RootState) => state.wishlist.items.length
  );
  const cartCount = useSelector((state: RootState) => state.cart.items.length);
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        ShopEasy
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/wishlist">Wishlist ({wishlistCount})</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
