import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Appliances() {
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
        navi(`/appliances/${d.id}`, { state: d })
    }
    return (
        <div>
            <Header />
            <div className='flex1'>
                {data.filter((item) => item.category === "appliances").map((d) => {
                    return (
                        <img className='img1' src={d.img} onClick={() => handleimg(d)} alt="not found" />
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}

export default Appliances