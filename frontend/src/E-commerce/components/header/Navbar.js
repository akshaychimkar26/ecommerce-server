import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import styled from 'styled-components';

const Navbar = () => {
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

  return (
    <>
      <DropMenuIcon onClick={toggleDropMenu}>
        {
          isDropMenu ? <MenuOpenIcon /> : <MenuIcon />
        }
      </DropMenuIcon>
      <MainNavbar>
        <nav className={isDropMenu ? "" : "DropMenuHidden"}>
          <Link className='topBox' to="/">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/4f84f7cf33100b5d.png?q=100" alt='top offers' />
            <span>Top Offers</span>
          </Link>
          <div className='dropDownBox' onMouseEnter={mobileDropDown} onMouseLeave={mobileDropDown}>
            <Link className='topBox' to="/mobiles">
              <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt='Fuck' />
              <span>Mobiles</span>
            </Link>
            {
              <div onClick={toggleDropMenu} className={isMobile ? "dropDown" : "dropDown isDropDownHidden"} >
                <Link to='/mobiles/apple'>Iphone</Link>
                <Link to='/mobiles/samsung'>Samsung</Link>
                <Link to='/mobiles/vivo'>Vivo</Link>
                <Link to='/mobiles/redmi'>Redmi</Link>
              </div>
            }
          </div>
          <div className='dropDownBox' onMouseEnter={fashionDropDown} onMouseLeave={fashionDropDown}>
            <Link className='topBox' to="/fashion">
              <img src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" alt='not found' />
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
              <img src="https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100" alt='not found' />
              <span>Electronics</span>
            </Link>
            {
              <div onClick={toggleDropMenu} className={isElectronics ? "dropDown" : "dropDown isDropDownHidden"} >
                <Link to='/electronics/laptop'>Laptop</Link>
                <Link to='/electronics/tablet'>Tablet</Link>
                <Link to='/electronics/headphone'>Headphone</Link>
              </div>
            }
          </div>
          <div className='dropDownBox' onMouseEnter={appliancesDropDown} onMouseLeave={appliancesDropDown}>
            <Link className='topBox' to="/appliances">
              <img src="https://rukminim1.flixcart.com/flap/80/80/image/0ff199d1bd27eb98.png?q=100" alt='not found' />
              <span>Appliances</span>
            </Link>
            {
              <div onClick={toggleDropMenu} className={isAppliances ? "dropDown" : "dropDown isDropDownHidden"} >
                <Link to='/appliances/television'>Television</Link>
                <Link to='/appliances/washingMachine'>Washing Machine</Link>
                <Link to='/appliances/refrigerator'>Refrigerator</Link>
                <Link to='/appliances/airConditioner'>Air Conditioner</Link>
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
      display: grid;
      grid-template-columns: 9em;
      gap: 0.5em;
      padding: 10px 0;
      border-radius: 0 0 10px 10px;
      background-color: #fff;
      visibility: visible;
      position: absolute;
      top: 5.4em;
      z-index: 2;

        a:hover{
          text-shadow: 0 0 1px #0800ff;
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


export default Navbar