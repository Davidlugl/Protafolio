import React from 'react';
import { Product } from '../types';
import '../styles/ProductCard.scss';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onViewDetails?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart = () => {}, 
  onViewDetails = () => {} 
}) => {
  return (
    <div className="product-card">
      <div className="product-image" onClick={() => onViewDetails(product)}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button 
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
