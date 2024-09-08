import React, { useState } from 'react';
import './UserProfile.css'; // Assuming you'll create a CSS file for styling

const UserProfile = () => {
    // State for user profile data
    const [user, setUser] = useState({
        name: 'John Doe',
        address: '123 Main St, Anytown, USA',
        creditCard: '**** **** **** 1234',
        expirationDate: '12/24',
        orders: [
            { id: 12345, status: 'Delivered', amount: 29.99 },
            { id: 67890, status: 'Shipped', amount: 49.99 },
            { id: 54321, status: 'Delivered', amount: 19.99 },
        ]
    });

    const handleContactFormSubmit = (event) => {
        event.preventDefault();
        alert('Message sent! Thank you for contacting us.');
        // Here you would typically handle the form submission, e.g., send data to a server.
    };

    return (
        <div className="container">
            <header className="header">
                <h1>User Profile</h1>
            </header>
            <div className="profile-container">
                <div className="profile-header">
                    <img src="profile-pic.jpg" alt="Profile Picture" className="profile-pic" />
                    <h2 className="username">{user.name}</h2>
                    <button className="edit-btn">Edit Profile</button>
                </div>
                <div className="section">
                    <h3>Address</h3>
                    <p><strong>Current Address:</strong> {user.address}</p>
                    <button className="edit-btn">Edit Address</button>
                </div>
                <div className="section">
                    <h3>Payment Options</h3>
                    <p><strong>Credit Card:</strong> {user.creditCard}</p>
                    <p><strong>Expiration Date:</strong> {user.expirationDate}</p>
                    <button className="edit-btn">Edit Payment Info</button>
                </div>
                <div className="section">
                    <h3>Your Orders</h3>
                    <ul>
                        {user.orders.map(order => (
                            <li key={order.id}>Order #{order.id} - {order.status} - ${order.amount.toFixed(2)}</li>
                        ))}
                    </ul>
                </div>
                <div className="section contact-form">
                    <h3>Contact Us</h3>
                    <form id="contact-form" onSubmit={handleContactFormSubmit}>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                        <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
