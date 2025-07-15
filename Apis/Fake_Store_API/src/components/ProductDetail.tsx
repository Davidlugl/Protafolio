import React, { useState } from 'react';
import { Product } from '../types';
import '../styles/ProductDetail.scss';

interface ProductDetailProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ 
  product, 
  isOpen, 
  onClose, 
  onAddToCart 
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="product-detail-overlay">
      <div className="product-detail-modal">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="product-detail-content">
          <div className="product-detail-image">
            <img src={product.image} alt={product.title} />
          </div>
          
          <div className="product-detail-info">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <div className="product-description">
              <h3>Descripción</h3>
              <p>{product.description}</p>
            </div>
            
            <div className="product-meta">
              <div className="product-category">
                <span>Categoría:</span> {product.category}
              </div>
              <div className="product-stock">
                <span>Stock:</span> {product.rating.count} unidades
              </div>
              <div className="product-rating">
                <span>Valoración:</span> {product.rating.rate} / 5
              </div>
            </div>
            
            <div className="product-actions">
              <div className="quantity-control">
                <button 
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input 
                  type="number" 
                  min="1" 
                  value={quantity} 
                  onChange={handleQuantityChange}
                />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              
              <button 
                className="add-to-cart-btn"
                onClick={handleAddToCart}
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
