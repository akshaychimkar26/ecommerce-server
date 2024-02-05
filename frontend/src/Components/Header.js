import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import styled from 'styled-components';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import axios from 'axios';
import './Header.css'
import useLocalStorage from '../Components/Uselocalstorage';

const Header = () => {
    const [token, setToken] = useState(localStorage.getItem("token"))
    useEffect(() => {
        const storedToken = localStorage.getItem("token")
        if (storedToken) {
            setToken(storedToken)
        }
    }, [])
    const handlelogout = () => {
        localStorage.removeItem("token")
        setToken(null)
    }
    const cart = useSelector(state => state.cart)
    const [isMobile, setIsMobile] = useState(false)
    const [isFashion, setIsFashion] = useState(false)
    const [isElectronics, setIsElectronics] = useState(false)
    const [isAppliances, setIsAppliances] = useState(false)
    const [isDropMenu, setIsDropMenu] = useState(false)

    const mobileDropDown = (e) => {
        e.preventDefault();
        setIsMobile(!isMobile)
    }
    const fashionDropDown = (e) => {
        e.preventDefault();
        setIsFashion(!isFashion)
    }
    const electronicsDropDown = (e) => {
        e.preventDefault();
        setIsElectronics(!isElectronics)
    }
    const appliancesDropDown = (e) => {
        e.preventDefault();
        setIsAppliances(!isAppliances)
    }

    const toggleDropMenu = () => {
        setIsDropMenu(!isDropMenu);
    };

    const [query, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = async () => {
        try {
            // Fetch JSON data from the server based on the search query
            const response = await axios.get(`https://ecommerce-app-rc3k.onrender.com/api/search?query=${query}`);
            const searchData = response.data
            // Redirect to the search route with the search results
            navigate('/search', { state: { searchResults: searchData } });
            console.log(searchData);
            // Clear the search query
            setSearchQuery('');
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                if (token) {
                    // Extract user ID from the token
                    const decodedToken = JSON.parse(atob(token.split('.')[1]));
                    const userId = decodedToken.userId;

                    // Fetch user details using the user ID
                    const response = await axios.get(`https://ecommerce-app-rc3k.onrender.com/api/user/${userId}`);
                    setUser(response.data);
                }
            } catch (error) {
                console.error('Error fetching user details:', error.message);
            }
        };

        fetchUserDetails();
    }, [token]);
    const handlecart = () => {
        const token = localStorage.getItem("token")
        if (token) {
            navigate('/cartpage')
        } else {
            alert("please login first")
        }
    }


    return (
        <>
            <DropMenuIcon onClick={toggleDropMenu}>
                {
                    isDropMenu ? <MenuOpenIcon /> : <MenuIcon />
                }
            </DropMenuIcon>
            <MainNavbar>
                <h1 className='logo'>iSHOP</h1>
                <input className='srh1'
                    type="text"
                    value={query}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter a keyword to search"
                />
                {/* Use Link to navigate to the search route */}
                <Link to="/search">
                    <button className='srh2' onClick={handleSearch}>Search</button>
                </Link>
                <button onClick={() => handlecart()} style={{ backgroundColor: "white", border: "none" }}><FaShoppingCart style={{ color: "blue" }} className='cart' /></button>
                <span className='no'>{cart.cart.length}</span>

                {token ? (
                    <div className='nav3'>
                        <button style={{ backgroundColor: "lightblue", fontSize: "14px" }} onClick={() => setShowDropdown(!showDropdown)}>Profile</button>
                        {showDropdown && (
                            <div>
                                {/* Display user data here */}
                                <p>{user.name}</p>
                                <button onClick={handlelogout}>Logout</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link className='nav2' to="/login">Login</Link>
                )}

                <nav className={isDropMenu ? "" : "DropMenuHidden"}>
                    <Link className='topBox' to="/">
                        <span className=''>Home</span>
                    </Link>
                    <div className='dropDownBox' onMouseEnter={mobileDropDown} onMouseLeave={mobileDropDown}>
                        <Link className='topBox' to="/mobile">
                            <span>Mobiles</span>
                        </Link>
                        {
                            <div onClick={toggleDropMenu} className={isMobile ? "dropDown" : "dropDown isDropDownHidden"} >
                                <Link to='/mobile/realme'>realme</Link>
                                <Link to='/mobile/samsung'>Samsung</Link>
                                <Link to='/mobile/motorola'>Motorola</Link>
                            </div>
                        }
                    </div>
                    <div className='dropDownBox' onMouseEnter={fashionDropDown} onMouseLeave={fashionDropDown}>
                        <Link className='topBox' to="/fashion">
                            <span>Fashion</span>
                        </Link>
                        {
                            <div onClick={toggleDropMenu} className={isFashion ? "dropDown" : "dropDown isDropDownHidden"} >
                                <Link to='/fashion/men'>Men</Link>
                                <Link to='/fashion/women'>Women</Link>
                                <Link to='/fashion/kids'>Kids</Link>
                            </div>
                        }
                    </div>
                    <div className='dropDownBox' onMouseEnter={electronicsDropDown} onMouseLeave={electronicsDropDown}>
                        <Link className='topBox' to="/electronics">
                            <span>Electronics</span>
                        </Link>
                        {
                            <div onClick={toggleDropMenu} className={isElectronics ? "dropDown" : "dropDown isDropDownHidden"} >
                                <Link to='/electronic/laptop'>Laptop</Link>
                                <Link to='/electronic/tablet'>Tablet</Link>
                                <Link to='/electronic/headphone'>Headphone</Link>
                            </div>
                        }
                    </div>
                    <div className='dropDownBox' onMouseEnter={appliancesDropDown} onMouseLeave={appliancesDropDown}>
                        <Link className='topBox' to="/appliances">
                            <span>Appliances</span>
                        </Link>
                        {
                            <div onClick={toggleDropMenu} className={isAppliances ? "dropDown" : "dropDown isDropDownHidden"} >
                                <Link to='/appliance/television'>Television</Link>
                                <Link to='/appliance/washingmachine'>Washing Machine</Link>
                                <Link to='/appliance/refrigerator'>Refrigerator</Link>
                            </div>
                        }
                    </div>
                </nav>
            </MainNavbar>
        </>
    )
}

const MainNavbar = styled.div`
    nav{
      display: flex;
      justify-content: space-around;
      text-align: center;
      background-color: #fff;
      margin: 1em auto;
      padding: 1em 0;
      width: 90%;
    }

    .topBox{
      display: flex;
      flex-direction: column;
      text-decoration:none;

      img{
        align-self: center;
        height: 4em;
        width: 4em;
      }
    }

    .dropDownBox{
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }

    .dropDown{
      border:1px solid black;
      display: grid;
      grid-template-columns: 9em;
      gap: 0.5em;
      padding: 10px 0;
      background-color: #fff;
      visibility: visible;
      position: absolute;
      top: 1em;
      z-index: 2;
      
        a{
            text-decoration:none;
        }
    }

    .isDropDownHidden{
      display: none;
    }

    @media only screen and (max-width:539px){
      nav{
       width: 100%;
       flex-direction: column;
       margin: 0;
       padding: 0.5em 0;
       box-shadow: inset 0 0 5px gray;
       border-radius: 0px 0px 10px 10px;
      }

      .DropMenuHidden {
        display: none;
      }

      img{
        display:none;
      }

      .dropDownBox{
        display:block;
      }

      .dropDown{
        position:unset;
        grid-template-columns: 100%;
        background-color: #dbdbdb;
        border-radius:0;
        gap:0;
        padding:0;
      }
    }
      
`

const DropMenuIcon = styled.div`
    display:none;

    @media only screen and (max-width:539px){
      display:block;
      background-color: #fff;
      text-align: left;
      padding-top: 10px;
      padding-left: 2em;
    }

`


export default Header