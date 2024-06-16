import React from 'react';
import './Cart.css';

function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((sum, product) => sum + product.price, 0);

  return (
    <div>
      <h2>Carrinho</h2>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div>
          {cartItems.map((product, index) => (
            <div key={index} className="cart-item">
              <p>{product.name} - R${product.price}</p>
              <button onClick={() => removeFromCart(product)}>Remover</button>
            </div>
          ))}
          <h3>Total: R${total}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
