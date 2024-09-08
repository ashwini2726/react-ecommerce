import React, { useState } from 'react';
import './Login.css'; // Assuming you will create a CSS file for styling

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Basic validation
        if (username === '' || password === '') {
            alert('Please fill in both fields.');
            return;
        }

        // Simulate server-side authentication
        if (username === 'admin' && password === 'password') {
            // On successful login
            window.location.href = 'art.html';
        } else {
            alert('Invalid username or password.');
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Login</button>
                <div className="forgot-password">
                    <p><a href="forgot-password.html">Forgot Password?</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
