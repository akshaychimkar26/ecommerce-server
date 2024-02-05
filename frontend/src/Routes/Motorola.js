import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Motorola() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the backend API
        axios.get('https://ecommerce-app-rc3k.onrender.com/api/getallproducts')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    const navi = useNavigate()
    const handleimg = (d) => {
        navi(`/mobile/motorola/${d.id}`, { state: d })
    }
    return (
        <div>
            <Header />
            <div className='flex1'>
                {data.filter((item) => item.brand === "motorola").map((d) => {
                    return (
                        <div className='box'>
                            <img className='img1' src={d.img} onClick={() => handleimg(d)} alt="not found" />
                            <p className='p1'>{d.name}</p >
                            <p className='p2'>price:{d.price}</p>
                            <p className='p3'>MRP:{d.MRP}</p>
                            <p className='p1'>discount:{d.discount}%</p>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}

export default Motorola