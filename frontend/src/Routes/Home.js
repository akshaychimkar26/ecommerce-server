import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
const Home = () => {
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
        navi(`/${d.category}/${d.id}`, { state: d })
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <Header />
            <Slider className='slide'  {...settings}>
                <div>
                    <img className='carousell' src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg" alt="Image 1" />
                </div>
                <div>
                    <img className='carousell' src="https://www.searchenginejournal.com/wp-content/uploads/2021/05/googles-top-products-carousels-seo-teardown-609a61dc7dd86.png" alt="Image 2" />
                </div>
                {/* Add more slides as needed */}
            </Slider>
            <h1 style={{ marginLeft: "20px" }}>Trending mobiles</h1>
            <div className='flex1'>
                {data.filter((item) => item.sp === "home" && item.for === "trending-mobiles").map((d) => {
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
            <h1 style={{ marginLeft: "20px" }}>Trending fashion</h1>
            <div className='flex1'>
                {data.filter((item) => item.sp === "home" && item.for === "trending-fashion").map((d) => {
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
            <h1 style={{ marginLeft: "20px" }}>Trending electronics</h1>
            <div className='flex1'>
                {data.filter((item) => item.sp === "home" && item.for === "trending-electronics").map((d) => {
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
            <h1 style={{ marginLeft: "20px" }}>Trending appliances</h1>
            <div className='flex1'>
                {data.filter((item) => item.sp === "home" && item.for === "trending-appliances").map((d) => {
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
    );
}

export default Home