import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../../store/CartSlice'
import styled from '@emotion/styled'
import { Button, CircularProgress } from '@mui/material'

const ProductDetail = () => {
  const { id } = useParams()
  const token = localStorage.getItem("Token")
  const [Data, setData] = useState([])

  const fetchData = useSelector((state) => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    setData(fetchData.data.find((i) => i.id === id))
  }, [fetchData.data, id])

  const addCart = () => {
    if (token) {
      dispatch(addToCart(Data))
    }
  }
  const render = (
    <Wrapper>
      <div className='leftSection'>
        <img src={Data.image} alt='not found' />
        <div className='bottomButton'>
          <Button
            onClick={addCart}
            variant="contained"
          >
            Add Cart
          </Button>
          <Button
            // onClick={toggleLoginLogout}
            variant="contained"
          >
            Buy Now
          </Button>
        </div>
      </div>
      <div className='rightSection'>
        <div className='productTitle'>{Data.title}</div>
        <div className='productMRP'>MRP : <span>{Data.costPrice}</span></div>
        <div className='productDiscount'>Discount  : <span>{Data.discount} off</span></div>
        <div className='productSP'>Sale Price  : <span>{Data.sellingPrice}</span></div>
      </div>
    </Wrapper>
  )

  return (
    <>
      {!fetchData.loading
        ? render
        : <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: "100%" }}>
          <CircularProgress />
        </div>
      }
    </>
  )
}

const Wrapper = styled.section`
  display:flex;
  justify-content: space-evenly;
  
  .leftSection{
      margin: 1em 0;
      display:flex;
      flex-direction: column;
      gap:2em;
      
      img{
        height: 20em;
        width: 16em;
      }
      
      .bottomButton{
        display: flex;
        justify-content: space-evenly;
      }
    }

    .rightSection{
      margin: 1em 0;

        .productTitle{
          font-size: 2.4em;
          font-weight: 300;
          white-space: normal;
        }

        .productMRP{
          span{
            color: gray;
            padding: 5px;
            text-decoration: line-through;
          }
        }

        .productDiscount{
          span{
            color: #11a411;
            font-size: 1.1rem;
            font-weight: 700;
          }
        }

        .productSP{
          span{
            font-size: 1.8rem;
            font-weight: 700;
          }
        }
    }

  @media only screen and (max-width:539px){
    flex-direction: column;
    align-items: center;
    padding: 2em;
  }

`

export default ProductDetail