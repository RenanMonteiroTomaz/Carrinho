import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const products = [
  { id: 1, name: 'Produto A', price: 100 },
  { id: 2, name: 'Produto B', price: 200 },
  { id: 3, name: 'Produto C', price: 300 },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCartItems(cartItems.filter(product => product !== productToRemove));
  };

  return (
    <div className="App">
      <h1>Twstore</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
