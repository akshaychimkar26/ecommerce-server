// Cartpage.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { removeFromCart, incrementQuantity, decrementQuantity, removeIfZeroQuantity } from '../Features/cartAction';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Cartpage.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

function Cartpage() {
    const handleCheckout = () => {
        // Check if token is available in localStorage
        const localStorageToken = localStorage.getItem('token');
        if (!localStorageToken) {
            // If token is not present, show an alert and prevent further processing
            alert('Please login first.');
            return;
        }
    }
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrement = (id, quantity) => {
        if (quantity === 1) {
            // If quantity is 1, remove the item from the cart
            dispatch(removeIfZeroQuantity(id));
        } else {
            dispatch(decrementQuantity(id));
        }
    };

    // Function to calculate subtotal for an individual item
    const calculateItemSubtotal = (item) => {
        return item.quantity * item.price;
    };

    // Function to calculate total amount for all items in the cart
    const calculateTotalAmount = (cartItems) => {
        return cartItems.reduce((total, item) => total + calculateItemSubtotal(item), 0);
    };

    const makePayment = (token) => {
        const body = {
            token,
            cartData: cart.cart,
        };
        const headers = {
            'Content-Type': 'application/json',
        };

        return fetch(`https://ecommerce-app-rc3k.onrender.com/api/payment`, {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        })
            .then((response) => {
                console.log('RESPONSE', response);
                if (response.status === 200) {
                    // Payment successful, you may want to clear the cart or perform additional actions
                    console.log('Payment successful!');
                } else {
                    // Handle payment failure
                    console.log('Payment failed!');
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className='flexm'>
            <Header />
            {cart.cart.map((item) => (
                <div key={item.id} className='flexsp'>
                    <div>
                        <img className='ctimg' src={item.img} alt='not found' />
                    </div>
                    <div className='ctinfo'>
                        <p className='ct1'>{item.name}</p>
                        <p className='ct2'>Price: ${item.price}</p>
                        <p className='ct3' style={{ textDecoration: 'line-through' }}>
                            MRP: ${item.MRP}
                        </p>
                        <p className='ct2'>Discount: {item.discount}%</p>
                    </div>
                    <div className='ctit'>
                        <div>
                            <button className='ctbtn' onClick={() => handleDecrement(item.id, item.quantity)}>
                                -
                            </button>
                            <span className='ctbtn'>{item.quantity}</span>
                            <button className='ctbtn' onClick={() => handleIncrement(item.id)}>
                                +
                            </button>
                        </div>
                        <div>
                            Item Subtotal: ${calculateItemSubtotal(item)}
                        </div>
                        <div>
                            <button className='rem' onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                </div>
            ))}
            <div>
                <p className='ctsub'>Total Amount: ${calculateTotalAmount(cart.cart)}</p>
                <button onClick={handleCheckout}><Link to='/payment'>Checkout</Link></button>
            </div>
            <Footer />
        </div>
    );
}

export default Cartpage;