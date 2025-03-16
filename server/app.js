const express = require("express")
const mongoose = require("mongoose");
const app = express()
require("dotenv").config()
port= process.env.PORT
db=process.env.DBCONN
const orderRoute=require("./routes/userOrderRoute")
const bodyparser = require('body-parser')
const cors = require('cors');
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());


app.use("/user",orderRoute)
mongoose.connect(db).then(()=>{
  console.log(`MongoDB Atals Connected...`);
  
})
app.listen(port,()=>{
  console.log(`server run on ${port}`);
  
})