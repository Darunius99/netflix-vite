import React from 'react';
import './ShopSidebar.css';

function MiniProductCard({ product, onRemove }) {
  return (
    <div className="mini-product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h4>{product.name}</h4>
        <p>${product.price}</p>
        <button onClick={onRemove}>Șterge</button>
      </div>
    </div>
  );
}

export default MiniProductCard;