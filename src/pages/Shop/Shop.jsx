import React from 'react';
// În Shop.jsx (și orice alt fișier din pages/Shop/)
import { useShop } from '../../context/ShopContext';
import ShopSidebar from '../../components/ShopSidebar/ShopSidebar';
import productsData from '../../assets/products.json';
import './Shop.css';

function Shop() {
  const { cart, addToCart } = useShop();

  return (
    <div className="shop-container">
      <div className="shop-header">
        <h1>Magazin de Merchandise</h1>
        <p>{cart.length} produse în coș</p>
      </div>
      
      <div className="shop-content">
        <div className="products-grid">
          {productsData.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">${product.price}</p>
                <button 
                  onClick={() => addToCart(product)}
                  className="add-to-cart-btn"
                >
                  Adaugă în coș
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <ShopSidebar />
      </div>
    </div>
  );
}

export default Shop;