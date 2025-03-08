import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchProducts } from '../store/slices/productSlice';
import { RootState } from '../store/store';
import ProductCard from '../components/ProductCard';
import { useAppDispatch } from '../store/hooks';
import '../styles/Home.css';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts()); // Type assertion to fix TypeScript Dispatch type
    }
  }, [dispatch, status]);

  return (
    <div className="home-container">
      <div className="title">
        <h1>Shop Products</h1>
        {status === 'loading' && products.length === 0 && (
          <p>Loading products...</p>
        )}
        {status === 'failed' && products.length === 0 && (
          <p>Failed to load products. Try again later.</p>
        )}
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
