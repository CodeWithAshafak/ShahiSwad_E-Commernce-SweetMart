import React from 'react'
import { BsCartCheckFill } from "react-icons/bs";

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const TopHeader = () => {

  const navigate = useNavigate()
  const cart = useSelector((state)=>state.mycart.cart)
  console.log(cart);
  const cartLenght = cart.length
  return (
   <>
   
   <div id='topheader'>
   <BsCartCheckFill onClick={()=>{navigate("/carts")}} /> {cartLenght}
   </div>
   </>
  )
}

export default TopHeader