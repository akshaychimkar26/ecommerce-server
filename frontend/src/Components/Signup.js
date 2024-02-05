import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import './Signup.css'
import { useNavigate } from 'react-router-dom';
function Signup() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerStatus, setRegisterStatus] = useState("");
    const handleSignup = () => {
        // Make a POST request to the backend API
        axios.post('https://ecommerce-app-rc3k.onrender.com/api/signup', { name, email, password })
            .then(response => {
                const resp = response.data
                const token = resp.token;
                localStorage.setItem("token", token);

                setRegisterStatus(resp.msg);
                if (resp.token) {
                    console.log(resp.data);
                    alert("Signin successfully!")
                    navigate("/");
                }
            })
            .catch(error => {
                console.error(error.resp.data);
                alert('Signup failed. Please check the console for details.');
            });
    };

    return (
        <div >
            <Header />
            <div className='su'>
                <h2>Signup Form</h2>
                <label>Username:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button onClick={handleSignup}>Signup</button>
            </div>
            <Footer />
        </div>
    );
}

export default Signup;
