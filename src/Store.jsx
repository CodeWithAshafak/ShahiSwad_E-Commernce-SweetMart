import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./AddToCardSlice"
const store = configureStore({
  reducer:{
    mycart:cartReducer
  }
})

export default store