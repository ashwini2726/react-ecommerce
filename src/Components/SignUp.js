import { useImperativeHandle } from 'react';
import { useNavigate } from 'react-router-dom';

// Inside your component
const navigate = useNavigate();

const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage('');

    if (!otpVerified) {
        setErrorMessage('Please verify your OTP.');
        return;
    }

    if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match!');
        return;
    }

    if (otp !== correctOtp) {
        setErrorMessage('Invalid OTP!');
        return;
    }

    // Redirect to art.html on successful validation
    navigate('/art');
};




signup
import React, { useState } from 'react';
import './SignUp.css'; // Assuming you will create a CSS file for styling

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [otpVerified, setOtpVerified] = useState(false);

    const correctOtp = '123456'; // Example OTP for verification

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorMessage('');

        if (!otpVerified) {
            setErrorMessage('Please verify your OTP.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }

        if (otp !== correctOtp) {
            setErrorMessage('Invalid OTP!');
            return;
        }

        // Redirect to art.html on successful validation
        window.location.href = 'art.html';
    };

    const handleVerifyOtp = () => {
        if (otp !== correctOtp) {
            setErrorMessage('Invalid OTP!');
        } else {
            setErrorMessage('OTP Verified!');
            setOtpVerified(true);
        }
    };

    return (
        <div className="container">
            <h2>Sign Up</h2>
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

                <label htmlFor="mobile">Mobile Number:</label>
                <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                />

                <label htmlFor="email">Email ID:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="otp">OTP:</label>
                <input
                    type="text"
                    id="otp"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                />
                <button
                    type="button"
                    id="verifyOtp"
                    onClick={handleVerifyOtp}
                >
                    Verify OTP
                </button>

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <label htmlFor="confirm_password">Confirm Password:</label>
                <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <button type="submit">Sign Up</button>
                {errorMessage && <p id="error-message" className="error">{errorMessage}</p>}
            </form>
            <div className="login-link">
                <p>Already have an account? <a href="login.html">Login here</a></p>
            </div>
        </div>
    );
};

export default SignUp;

