const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
  name:{ type: String, required: true },
  email:{ type: String, required: true },
  address:{ type: String, required: true },
  pin:{ type: Number, required: true },
  products:[
    {
    id:{ type: String, required: true },
    name:{ type: String, required: true },
    desc:{ type: String, required: true },
    price:{ type:Number, required: true },
    qnty:{ type: Number, required: true },
    image:{ type: String, required: true },
    }
  ]
})
module.exports =  mongoose.model("orderDetails", OrderSchema )