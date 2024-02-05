import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Header from '../Components/Header'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Features/cartAction'
import './Singlepage.css'
import Footer from '../Components/Footer'
function Singlepage() {
    const dispatch = useDispatch()
    const location = useLocation()
    const handleAddToCart = () => {
        const { img, name, price, MRP, discount, quantity, id } = location.state;
        // Dispatch addToCart action
        dispatch(addToCart({ img, name, price, MRP, discount, quantity, id }));
    };
    return (
        <div>
            <Header />
            <div ><Link className='back' to='/'>Back</Link></div>
            <div className='flexsp'>
                <div>
                    <img className='simg' src={location.state.img} alt="not found" />
                </div>
                <div>
                    <p className='sp1'>{location.state.name}</p >
                    <p className='sp2'>price:{location.state.price}</p>
                    <p className='sp3'>MRP:{location.state.MRP}</p>
                    <p className='sp2'>discount:{location.state.discount}%</p>
                    <p className='sp2'>Quantity:{location.state.quantity}</p>
                    <button className='sp2' onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
            <div className='ft'><Footer /></div>
        </div>
    )
}

export default Singlepage