const express = require("express")
const route = express.Router()
const orderController = require("../controllers/orderController")
route.post("/payment",orderController.saveOrder)

module.exports=route