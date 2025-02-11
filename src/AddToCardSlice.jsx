import { createSlice } from "@reduxjs/toolkit";

import '@ant-design/v5-patch-for-react-19';
import
{ message }
from
"antd"
;

const CartSlice = createSlice({
  "name":"mycart",
  initialState:{
    cart:[]
  },
  reducers:{
    addtoCart:(state,actions)=>{
      // console.log(actions.payload);
      const data = state.cart.filter(key=>key.id === actions.payload.id)
      // console.log(data);
      
      if(data.length>=1)
      {
        message.error("item already added in your Card...!")
        // message.info("item already added ...!")
        // alert("already added")
      }
      else
      {
        state.cart.push(actions.payload)
      }
      
    },
    qntyInc:(state, actions)=>{
      for(let i=0 ; i<state.cart.length;i++)
      {
        if(state.cart[i].id == actions.payload.id){
          state.cart[i].qnty++;
        }
      }
    },
    qntyDec:(state, actions)=>{
      for(let i=0; i<state.cart.length; i++)
      {
        if(state.cart[i].qnty<=1){
          message.error("Quantity not be less than 1")
          return;
        }
        else{
           state.cart[i].qnty--;
        }
      }
    },
    proDelete:(state ,actions)=>{
      console.log(actions.payload);
      
      state.cart = state.cart.filter(key=>key.id!= actions.payload)
    }

  }
})


export const {addtoCart ,qntyInc, qntyDec ,proDelete} = CartSlice.actions
export default CartSlice.reducer