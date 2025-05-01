import React from 'react';
import { useShop } from '../../context/ShopContext';
// Schimbă de la "../context/ShopContext" la "../../context/ShopContext"
import MiniProductCard from './MiniProductCard';
import './ShopSidebar.css';

function ShopSidebar() {
  const { cart, removeFromCart } = useShop();

  return (
    <div className="shop-sidebar">
      <h3>Coșul tău ({cart.length})</h3>
      {cart.length === 0 ? (
        <p className="empty-cart">Coșul este gol</p>
      ) : (
        <div className="cart-items">
          {cart.map(product => (
            <MiniProductCard 
              key={`${product.id}-${Math.random()}`}
              product={product}
              onRemove={() => removeFromCart(product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ShopSidebar;