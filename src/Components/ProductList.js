import React from 'react';
import './ProductList.css'; // Optional, for specific product styles

const products = [
  { img: 'product1.jpg', name: 'Product 1', price: '$19.99' },
  { img: 'https://via.placeholder.com/150', name: 'Product 2', price: '$29.99' },
  { img: 'https://via.placeholder.com/150', name: 'Product 3', price: '$39.99' },
  { img: 'https://via.placeholder.com/150', name: 'Product 4', price: '$55.90' },
  { img: 'https://via.placeholder.com/150', name: 'Product 5', price: '$22.99' },
  { img: 'https://via.placeholder.com/150', name: 'Product 6', price: '$33.99' },
  { img: 'https://via.placeholder.com/150', name: 'Product 7', price: '$44.99' },
  { img: 'https://via.placeholder.com/150', name: 'Product 8', price: '$59.99' },
];

function ProductList() {
  return (
    <div className="main">
      {products.map((product, index) => (
        <div className="product" key={index}>
          <img src={product.img} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
