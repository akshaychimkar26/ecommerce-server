import React, { useEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import HomeCards from '../../components/cards/HomeCards'
import { CircularProgress } from '@mui/material'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


const Home = () => {
  const [Data, setData] = useState([])

  const fetchData = useSelector((state) => state.product)

  useEffect(() => {
    setData(fetchData.data)
  }, [fetchData.data])

  const Mobiles = Data.filter((j) => j.category === "mobiles").slice(0, 5)
  const Fashion = Data.filter((j) => j.category === "fashion").slice(0, 5)
  const Electronics = Data.filter((j) => j.category === "electronics").slice(0, 5)
  const Appliances = Data.filter((j) => j.category === "appliances").slice(0, 5)

  const render = <Wrapper>
    <Carousel className='slider' interval={2000} animation="slide"
      navButtonsAlwaysVisible
      indicatorContainerProps={{
        style: {
          position: "absolute",
          zIndex: "2",
          bottom: "1em",
        }
      }}
    >
      <img src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6af15eda66fd7747.jpg?q=20' alt='not found' />
      <img src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ffeb169a27907387.jpg?q=20' alt='not found' />
      <img src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b670c1e6617a6b9d.jpeg?q=20' alt='not found' />
    </Carousel>
    <section>
      <h1>Trending Mobiles</h1>
      <HomeCards Data={Mobiles} />
    </section>
    <section>
      <h1>Trending Fashion</h1>
      <HomeCards Data={Fashion} />
    </section>
    <section>
      <h1>Trending Electronics</h1>
      <HomeCards Data={Electronics} />
    </section>
    <section>
      <h1>Trending Appliances</h1>
      <HomeCards Data={Appliances} />
    </section>
    <div className='bigBillion'>
      <img src='https://imgeng.jagran.com/images/2023/sep/Flipkart%20Big%20Billion%20Day%20Sale%202023%20Date1695273513411.jpg' alt='not found' />
    </div>
  </Wrapper >

  return (
    <>
      {!fetchData.loading
        ? render
        : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: "100%" }}>
          <CircularProgress />
        </div >
      }
    </>
  )
}

const Wrapper = styled.div`

  .slider{
    img{
      height: 15em;
      width: 100%;
    }
  }

  section{
    background-color: #fff;
    padding: 1em;   
  }

  .bigBillion img{
    width: 100%;
  }

  @media only screen and (max-width:539px){
    section{
        width: 100%;
    }
    .slider{
        width: 100%;
        & img{
            height: 8em;
        }
    }
  }
`

export default Home