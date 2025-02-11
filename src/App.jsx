import React from 'react'
import { Layout } from './Components/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Explore from './Pages/Explore'
import Home from './Pages/Home'
import Aboutus  from './Pages/Aboutus'
import DryFruits  from './Pages/DryFruits'
import Giftting  from './Pages/Giftting'
import Namkeen  from './Pages/Namkeen'
import Sweets  from './Pages/Sweets'
import Carts from './Pages/Carts'
import NotFound from './Pages/NotFound'
import Checkout from './Pages/Checkout'



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Layout/>}>

      <Route index element={<Home/>} />
      <Route path='home' element={<Home/>} />
      <Route path='aboutus' element={<Aboutus/>} />
      <Route path='dryfruits' element={<DryFruits/>} />
      <Route path='explore' element={<Explore/>} />
      <Route path='giftting' element={<Giftting/>} />
      <Route path='namkeen' element={<Namkeen/>} />
      <Route path="sweets" element={<Sweets/>} />
      <Route path='carts' element={<Carts/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='checkout' element={<Checkout/>}/>
      
      


      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App