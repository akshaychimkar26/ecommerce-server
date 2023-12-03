import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const HomeCards = ({ Data }) => {
  const navigator = useNavigate()
  return (
    <Cards>
      {Data && Data.map((item, index) =>
        <div className='singleCard' onClick={() => navigator(`/${item.category}/${item.brand}/${item.id}`)} key={index}>
          <img src={item.image} alt='not found' />
          <span>{item.title}</span>
          <div className='cardBottom'>
            <span className='sellingPrice'>{item.sellingPrice}</span>
            <span className='costPrice'>{item.costPrice}</span>
            <span className='discount'>{item.discount}off</span>
          </div>
        </div>
      )}
    </Cards>
  )
}

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 1em;
  margin-top: 1em;
  
  .singleCard{
      background-color: rgba(0, 0, 0, 0.025);
      border: 1px groove grey;
      border-radius: 10px;
      padding: 10px;
      width: 11em;
      
      img{
        height: 11em;
        width: 100%;
        padding: 10px;
      }

      span{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }

      .cardBottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .sellingPrice{
        font-size: 15px;
        font-weight: 500;
        color: #212121;
      }
      
      .costPrice{
        text-decoration: line-through;
        font-size: 13px;
        color: #878787;
      }

      .discount{
        color: #388e3c;
        font-size: 12px;
        letter-spacing: -.2px;
        font-weight: 500;
        margin-left: 5px;
      }
    }

    @media only screen and (max-width:539px){
      flex-direction: column;
      gap: 1em;
      .singleCard{
        width: 80%;
        margin: 0 auto;

        img{
          height: 20em;
        }

        span{
          padding: 0 1em;
        }

        .cardBottom{
          align-items: center;
        }
      }
    }

`

export default HomeCards