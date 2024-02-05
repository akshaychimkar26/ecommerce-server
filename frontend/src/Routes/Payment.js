// Payment.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../Features/cartAction';
import './Payment.css'; // Import your Payment.css file

function Payment() {
    const dispatch = useDispatch();

    const handleGoToHome = () => {
        // Dispatch the clearCart action
        dispatch(clearCart());
    };

    return (
        <div className="payment-container">
            <h1>Payment Successful</h1>
            <button className="home-button" onClick={handleGoToHome}>
                <Link to='/'>Go to Home</Link>
            </button>
        </div>
    );
}

export default Payment;
