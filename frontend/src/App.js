import React, { useState } from 'react'
import Home from './Routes/Home'
import Mobiles from './Routes/Mobiles'
import Fashion from './Routes/Fashion'
import Electronics from './Routes/Electronics'
import Appliances from './Routes/Appliances'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style.css'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Singlepage from './Routes/Singlepage'
import './App.css'
import Realme from './Routes/Realme'
import Samsung from './Routes/Samsung'
import Motorola from './Routes/Motorola'
import Men from './Routes/Men'
import Women from './Routes/Women'
import Kids from './Routes/Kids'
import Laptop from './Routes/Laptop'
import Tablet from './Routes/Tablet'
import Headphone from './Routes/Headphone'
import Television from './Routes/Television'
import Washingmachine from './Routes/Washingmachine'
import Refrigerator from './Routes/Refrigerator'
import Cartpage from './Routes/Cartpage'
import Search from './Routes/Search'
import Payment from './Routes/Payment'


function App() {

  return (
    <div>
      <div>

      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mobile' element={<Mobiles />} />
          <Route path='/mobile/:id' element={<Singlepage />} />
          <Route path='/fashion' element={<Fashion />} />
          <Route path='/fashion/:id' element={<Singlepage />} />
          <Route path='/electronics' element={<Electronics />} />
          <Route path='/electronics/:id' element={<Singlepage />} />
          <Route path='/appliances' element={<Appliances />} />
          <Route path='/appliances/:id' element={<Singlepage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/mobile/realme' element={<Realme />} />
          <Route path='/mobile/realme/:id' element={<Singlepage />} />
          <Route path='/mobile/samsung' element={<Samsung />} />
          <Route path='/mobile/samsung/:id' element={<Singlepage />} />
          <Route path='/mobile/motorola' element={<Motorola />} />
          <Route path='mobile/motorola/:id' element={<Singlepage />} />
          <Route path='/fashion/men' element={<Men />} />
          <Route path='/fashion/men/:id' element={<Singlepage />} />
          <Route path='/fashion/women' element={<Women />} />
          <Route path='fashion/women/:id' element={<Singlepage />} />
          <Route path='/fashion/kids' element={<Kids />} />
          <Route path='/fashion/kids/:id' element={<Singlepage />} />
          <Route path='/electronic/laptop' element={<Laptop />} />
          <Route path='/electronic/laptop/:id' element={<Singlepage />} />
          <Route path='/electronic/tablet' element={<Tablet />} />
          <Route path='/electronic/tablet/:id' element={<Singlepage />} />
          <Route path='/electronic/headphone' element={<Headphone />} />
          <Route path='electronic/headphone/:id' element={<Singlepage />} />
          <Route path='/appliance/television' element={<Television />} />
          <Route path='/appliance/television/:id' element={<Singlepage />} />
          <Route path='/appliance/washingmachine' element={<Washingmachine />} />
          <Route path='/appliance/washingmachine/:id' element={<Singlepage />} />
          <Route path='/appliance/refrigerator' element={<Refrigerator />} />
          <Route path='/appliance/refrigerator/:id' element={<Singlepage />} />
          <Route path='/cartpage' element={<Cartpage />} />
          <Route path='/search' element={<Search />} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App