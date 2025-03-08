import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useAppDispatch } from '../store/hooks';
import { removeFromWishlist } from '../store/slices/wishlistSlice';
import '../styles/Wishlist.css';

const Wishlist: React.FC = () => {
  const dispatch = useAppDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  return (
    <div className="wishlist-page">
      <h1>Your Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-list">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)}</p>
                <button onClick={() => dispatch(removeFromWishlist(item.id))}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
