const orderModel = require("../models/orderModel")

const saveOrder = async (req,res)=>{

  

   try {
    console.log(req.body);
    const { user,  products} = req.body
    const response = await orderModel.create({
        
        name:user.name,
        email:user.email,
        address:user.address,
        pin:user.pin,
        products:
        products.map((key)=>({
            id:key.id,
            name:key.name,
            desc:key.desc,
            price:key.price,
            qnty:key.qnty,
             image: key.image
          }))
    })
    res.status(200).json(response)
   } catch (error) {
    console.log(error);
    res.status(404).send({msg:"error at controller level"})
   }

  
  
}
 
module.exports={
  saveOrder
}