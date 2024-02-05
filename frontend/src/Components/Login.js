import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerStatus, setRegisterStatus] = useState("");

    const handleLogin = () => {
        // Make a POST request to the backend API
        axios.post('https://ecommerce-app-rc3k.onrender.com/api/login', { email, password })
            .then(response => {
                const resp = response.data
                const token = resp.token;
                localStorage.setItem("token", token);
                console.log(resp.data);
                setRegisterStatus(resp.msg);
                if (resp.token) {
                    alert("Login successfully!")
                    navigate("/");
                }
            })
            .catch(error => {
                console.error(error.response.data);
                alert('Login failed. Please check the console for details.');
            });
    };

    return (
        <div>
            <Header />
            <div className='su'>
                <h2>Login Form</h2>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button onClick={handleLogin}>Login</button>
                <p style={{ margin: "10px" }}>Please sign in first<Link className='nav1' to='/signup'>Signup</Link></p>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
