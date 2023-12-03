import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const PageCards = ({ Data }) => {
  const navigator = useNavigate()
  return (
    <Card onClick={() => navigator(`/${Data.category}/${Data.brand}/${Data.id}`)}>
      <img src={Data.image} alt='not found' />
      <span>{Data.title}</span>
      <div className='cardBottom'>
        <p className='sellingPrice'>{Data.sellingPrice}</p>
        <p className='costPrice'>{Data.costPrice}</p>
        <p className='discount'>{Data.discount}off</p>
      </div>
    </Card>
  )
}

const Card = styled.div`
  padding:1em;
  height: 20em;
  width: 12em;
  display:flex;
  flex-direction:column;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align:center;

    img{
      height: 10em;
      width: 8em;
      margin: 0 auto;
    }

    .cardBottom{
      display: flex;
      justify-content: space-between;
      align-items: center;

      .sellingPrice{
        font-size: 15px;
        font-weight: 500;
        color: #212121;
      }

      .costPrice{
          text-decoration: line-through;
          font-size: 13px;
          color: #878787;
          margin-left: 8px;
      }
      
      .discount{
          color: #388e3c;
          font-size: 12px;
          letter-spacing: -.2px;
          font-weight: 500;
          margin-left: 5px;
      }
    }

`

export default PageCards