import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from '../login/Login'
import Navbar from '../header/Navbar'
import { Button, Dialog } from "@mui/material";
import styled from 'styled-components'
import IconButton from "@mui/material/IconButton"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { fetchCart } from '../../store/CartSlice';
import { useDispatch } from 'react-redux';
import SignUp from '../signup/Signup';

const Header = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()

  const token = localStorage.getItem("Token")
  const user = JSON.parse(localStorage.getItem("User"))
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [toggleDialog, setToggleDialog] = useState(true)
  const [searchName, setSearchName] = useState("")

  useEffect(() => {
    if (user) {
      dispatch(fetchCart(user._id))
    }
  }, [dispatch, user])

  const toggleLoginLogout = () => {
    if (token) {
      localStorage.clear();
      nav('/')
      return window.location.reload(true)
    }
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleLoginSignUp = () => {
    setToggleDialog(!toggleDialog)
  }

  const handleSearch = (e) => {
    setSearchName(e.target.value)
    setTimeout(() => {
      nav('/search', { state: { search: e.target.value } })
    }, 1500);
  }

  return (
    <>
      <Dialog open={isPopupOpen} onClose={toggleLoginLogout}>
        {
          toggleDialog
            ? <Login onClose={toggleLoginLogout} toggle={toggleLoginSignUp} />
            : <SignUp onClose={toggleLoginLogout} toggle={toggleLoginSignUp} />
        }
      </Dialog>

      <MainHeader>
        <Link to="/"><div className="title">The <span>SIREN</span></div></Link>
        <div className='rightBar'>

          <div className='searchBar'>
            <input
              id='search'
              type='text'
              value={searchName}
              placeholder="Search for products brands and more"
              onChange={handleSearch}
            />
            <label htmlFor='search'><SearchIcon /></label>
          </div>

          <div className="userMenu">
            <Button
              onClick={toggleLoginLogout}
              variant="contained"
              size="small" >
              {token ? "logOut" : "login"}
            </Button>

            {user &&
              <button className="userName">
                {user.name.slice(0, 1).toUpperCase()}
              </button>
            }
          </div>

          <IconButton onClick={() => nav("/cart")}>
            <ShoppingCartIcon />
          </IconButton>
        </div>
      </MainHeader>

      <Navbar />
    </>
  )
}

const MainHeader = styled.header`
      display: flex;
      justify-content: space-around;
      text-align: center;
      background-color: #fff;
      position: sticky;
      top: 0;
      padding: 0.5em 0;
      z-index: 10;

      .title{
        font-size: 2em;
        font-family: 'Abril Fatface', cursive;
      }

      .rightBar{
        display: flex;
        align-items: center;
        gap: 1em;
      }

      .searchBar{
        display: flex;
        height: 1.8em;
        background-color: white;
        border-radius: 10px;
        border: 1px groove gray;

        :focus-within{
          outline: 2px solid black;
          label{
            visibility: hidden;
          }
        }

        input{
          border-radius: 10px;
          padding-left: 10px;
          width: 20em;
          border: none;
          :focus{
            outline: none;
          }
        }

        label{
          color: gray;
          margin-right: 5px;
          svg{
          vertical-align: middle;
          }
        }
      }

      .userMenu button {
        height: 2em;
      }

      .userName{
        margin-left: 10px;
        width: 2em;
        border-radius: 50%;
        border: 1px solid #000;
        background-color: #48abe0;
        box-shadow: 0 1px 2px darkslategray;
        cursor: pointer;
      }

      @media only screen and (max-width:539px){

        flex-direction: column;
        padding: 0;

        .rightBar{
          justify-content: space-around;
        }

        .searchBar{
          input{
            width: 10em;
            border: none;
          }
          .userMenu button{
            height: 1em;
            width: 1em;
          }
        }
      }
`

export default Header