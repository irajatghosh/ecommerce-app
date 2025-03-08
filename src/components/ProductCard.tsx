import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import {
  addToWishlist,
  removeFromWishlist,
} from '../store/slices/wishlistSlice';
import { Product } from '../types/product';
import { CartItem } from '../types/cart';
import { RootState } from '../store/store';
import { FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  //   console.log('product is', product);
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const isWishlisted = wishlistItems.some((item) => item.id === product.id);
  const handleAddToCart = () => {
    // convert product to cart item by adding quantity field
    const item: CartItem = {
      ...product,
      quantity: 1,
    };
    dispatch(addToCart(item));
  };
  const handleToggleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>
      <Link to={`/product/${product.id}`}>
        <h3>{product.title}</h3>
      </Link>
      <p>${product.price.toFixed(2)}</p>
      <div className="product-card-buttons">
        <button onClick={handleAddToCart}>
          <FaShoppingCart /> Cart
        </button>
        <button
          onClick={handleToggleWishlist}
          className={isWishlisted ? 'wishlist-btn active' : 'wishlist-btn'}
        >
          {isWishlisted ? <FaHeart /> : <FaRegHeart />} Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
