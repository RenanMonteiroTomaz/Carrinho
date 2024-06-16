import React from 'react';
import Product from './Product';
import './ProductList.css';

function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>Produtos</h2>
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
