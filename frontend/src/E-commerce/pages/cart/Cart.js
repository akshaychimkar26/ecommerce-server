import { Button, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from 'styled-components';
import { addToCart, deleteFromCart, removeToCart } from '../../store/CartSlice';
import PayPalApis from '../../components/payment/Payment';

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const [showPayment, setShowPayment] = useState(false)

  const totalPrice = cart && cart.data.reduce((total, item) => {
    const itemPrice = Number(item.productId.costPrice.replace(/[^0-9]/g, "")) * item.quantity
    return total + itemPrice
  }, 0)

  const totalDiscount = cart && cart.data.reduce((total, item) => {
    const costPrice = Number(item.productId.costPrice.replace(/[^0-9]/g, ""))
    const discount = Number(item.productId.discount.replace(/[^0-9]/g, ""))
    const discountPrice = costPrice * (discount / 100) * item.quantity
    return total + Math.round(discountPrice)
  }, 0)

  const render = (
    <>
      <section className='leftSection'>
        <div className='title'>Shopping Cart</div>
        {
          cart.data && cart.data.map((item, index) =>
            <div className='CartCard' key={index}>
              <img src={item.productId.image} alt="not found" />
              <span className="name">{item.productId.title}</span>
              <p>{item.productId.sellingPrice}</p>
              <div>
                <IconButton aria-label="delete" size="large" onClick={() => dispatch(removeToCart(item.productId))}>
                  <FaMinus />
                </IconButton>
                <input name='quantity' value={item.quantity} />
                <IconButton aria-label="add" size="large" onClick={() => dispatch(addToCart(item.productId))}>
                  <FaPlus />
                </IconButton>
              </div>
              <Button className='delete' onClick={() => dispatch(deleteFromCart(item.productId))}>
                REMOVE
              </Button>
            </div>
          )}
        <div className='orderBar'>
          {
            showPayment
              ? <PayPalApis totalPrice={totalPrice} />
              : <Button xs={'large'} onClick={() => setShowPayment(!showPayment)}>Place Order</Button>
          }
        </div>
      </section>
      <section className='rightSection'>
        <div className='title'>PRICE DETAILS</div>
        <section>
          <div>
            <span>Price ({cart.data.length} item)</span>
            <span>₹{totalPrice.toLocaleString("en-IN")}</span>
          </div>
          <div>
            <span>Discount</span>
            <span>-₹{totalDiscount.toLocaleString("en-IN")}</span>
          </div>
          <div>
            <span>Delivery Charges</span>
            <span>₹40 Free</span>
          </div>
          <div>
            <span>Total Amount</span>
            <span>₹{(totalPrice - totalDiscount).toLocaleString("en-IN")}</span>
          </div>
          <div>You will save ₹{totalDiscount.toLocaleString("en-IN")} on this order</div>
        </section>
      </section>
    </>
  )

  return (
    <Wrapper>
      {
        cart.data.length !== 0
          ? render
          : <Typography
            sx={{
              background: '#fff',
            }}
          >
            Your Cart is Empty. Add the products from the products list to display it to cart
          </Typography>
      }
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: rgba(0, 0, 0, 0.1);
  margin: 1em auto;
  display: flex;
  gap: 2em;

  section{
    background-color: #fff;
  }
  
  .leftSection{
    width: 60vw;

    .title {
      font-size: 3em;
      color: #04364a;
      font-weight: bold;
      text-align: center;
    }
  
    .CartCard{
      border-top: 1px solid #0000001c;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
      align-items: center;
      gap: 1em 0;
      padding: 1em;
      
      img {
        height: 15vh;
      }

      .name{
        font-size: 1em;
        color: #212121;
      }

      input{
        width: 3em;
        height: 2em;
        font-size: 14px;
        font-weight: 500;
        vertical-align: middle;
        text-align: center;
      }

      .delete{
        color: #212121;
        text-transform: uppercase;
        font-size: 1em;
        font-weight: 500;
      }
    }

    .orderBar{
      text-align: right;
      box-shadow: 0 -2px 10px 0 rgba(0,0,0,.1);
      border-top: 1px solid #f0f0f0;
      padding: 1em 2.5em;
    }
  }

  .rightSection{
    height: 18em;

    .title{
      font-size: 1em;
      text-transform: uppercase;
      border-bottom: 1px solid #878787;
      font-weight: 500;
      padding: 13px 24px;
    }

    section{
      display: grid;
      gap: 1em;
      margin: 2em 1em;

      div{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
    }
  }

  @media only screen and (max-width:539px){
    width: 100%;
    padding: 1em;
    flex-direction: column;

    .leftSection{
      width: 100%;

      .CartCard{
        div{
          text-align: center;
        }
      }
    }
  }
  

`

export default Cart