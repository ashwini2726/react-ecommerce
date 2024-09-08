import React, { useState, useEffect } from 'react';
import './ShoppingCart.css'; // Assuming you will create a CSS file for styling

const ShoppingCart = () => {
    // Sample cart items data
    const initialCartItems = [
        { id: 1, name: 'Item 1', price: 29.99, quantity: 1, imgSrc: 'https://via.placeholder.com/80' },
        { id: 2, name: 'Item 2', price: 49.99, quantity: 2, imgSrc: 'https://via.placeholder.com/80' },
        { id: 3, name: 'Item 3', price: 19.99, quantity: 1, imgSrc: 'https://via.placeholder.com/80' }
    ];

    const [cartItems, setCartItems] = useState(initialCartItems);

    // Calculate total price
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    const handleQuantityChange = (id, operation) => {
        setCartItems(cartItems.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: operation === 'increase' ? item.quantity + 1 : Math.max(item.quantity - 1, 1)
                };
            }
            return item;
        }));
    };

    return (
        <div className="container">
            <header className="header">
                <h1>Shopping Cart</h1>
            </header>
            <div className="cart-container">
                {cartItems.length > 0 ? (
                    <>
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <div className="item-details">
                                    <img src={item.imgSrc} alt={item.name} className="item-img" />
                                    <div>
                                        <p className="item-name">{item.name}</p>
                                        <p className="item-price">${item.price.toFixed(2)}</p>
                                        <div className="item-quantity">
                                            <button onClick={() => handleQuantityChange(item.id, 'decrease')} className="decrease-btn">-</button>
                                            <input type="text" value={item.quantity} readOnly />
                                            <button onClick={() => handleQuantityChange(item.id, 'increase')} className="increase-btn">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="total">
                            <strong>Total: ${calculateTotalPrice()}</strong>
                        </div>
                        <button className="checkout-btn">Proceed to Checkout</button>
                    </>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;
