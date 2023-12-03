import React from 'react'
import "../../pages/home/Home.css"
import { useNavigate } from 'react-router-dom'

const CardLayout = ({ Data }) => {
  const navigator = useNavigate()
  return (
    <div className='cards'>
      {Data && Data.slice(0, 5).map((item, index) =>
        <div onClick={() => navigator(`/${item.category}/${item.id}`)} key={index}>
          <img src={item.image} alt='not found' />
          <span>{item.title}</span>
          <div className='cardBottom'>
            <p className='sellingPrice'>{item.sellingPrice}</p>
            <p className='costPrice'>{item.costPrice}</p>
            <p className='discount'>{item.discount}off</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CardLayout