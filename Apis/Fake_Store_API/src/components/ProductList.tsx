import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { fetchProducts, fetchCategories, fetchProductsByCategory } from '../services/api';
import ProductCard from './ProductCard';
import '../styles/ProductList.scss';

interface ProductListProps {
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onViewDetails, onAddToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadCategories = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
    };
    
    loadCategories();
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      let fetchedProducts;
      
      if (selectedCategory) {
        fetchedProducts = await fetchProductsByCategory(selectedCategory);
      } else {
        fetchedProducts = await fetchProducts();
      }
      
      setProducts(fetchedProducts);
      setLoading(false);
    };
    
    loadProducts();
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="product-list-container">
      <div className="category-filter">
        <h2>Categorías</h2>
        <div className="category-buttons">
          <button 
            className={selectedCategory === '' ? 'active' : ''} 
            onClick={() => handleCategoryChange('')}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => handleCategoryChange(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {loading ? (
          <div className="loading">Cargando productos...</div>
        ) : (
          products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onViewDetails={onViewDetails}
              onAddToCart={onAddToCart}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
