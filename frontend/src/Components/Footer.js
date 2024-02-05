// Footer.js
import React from 'react';
import './Footer.css'; // Create this file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Contact Us</h3>
                        <p>Email: info@example.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Follow Us</h3>
                        <p>Facebook | Twitter | Instagram</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Newsletter</h3>
                        <p>Subscribe to our newsletter for updates</p>
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
