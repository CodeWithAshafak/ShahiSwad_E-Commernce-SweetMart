import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';



import { FaPlusSquare } from "react-icons/fa";
import { FaSquareMinus } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { RiDeleteBin2Fill } from "react-icons/ri";


import { qntyInc , qntyDec ,proDelete} from '../AddToCardSlice';
import "../CSS/Card.css"
import { useNavigate } from 'react-router-dom';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emptyCart from "../Images/empty-cart.gif"


const Carts = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const Cart = useSelector(state=>state.mycart.cart)
  console.log(Cart);
  
  

  let totalAmount=0;
  const result = Cart.map((key)=>{

    totalAmount+= key.price*key.qnty
    return(
      <>
         <tr>
          <td> <img src={key.image} height="100" width="100"/> </td>
            
          <td> {key.name} </td>
          <td>{key.desc}</td>
          <td>
            <FaSquareMinus  onClick={()=>{dispatch(qntyDec({id:key.id}))}} />
            {key.qnty}

            <FaPlusSquare   onClick={()=>{dispatch(qntyInc({id:key.id}))}}/> 
          
            
            </td>
          <td> {key.price} </td>
          <td> {key.price * key.qnty}</td>

          <td >
          <RiDeleteBin2Fill onClick={()=>{dispatch(proDelete(key.id))}} style={{fontSize:"26px" ,cursor:"pointer" ,color:"red"}} />
          </td>

         </tr>
      </>
    )
  })

if(Cart.length=== 0 ){
  return(
  
  
   <div className="emptyCart">

      

    <img src={emptyCart} />
    <h5> Your Cart is Empty </h5>

   </div>
  


)
}

  return (
    <>



    <Container fluid className='cartWrapper'>


      <div className="heading">

         <h2>Your Cart </h2>

      </div>
    
    <main>
    <div className="table-responsive">

       


    <Table striped bordered hover style={{textAlign:"center"}}>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Item Name</th>
          <th>Description</th>
          <th>Total Quantity</th>
          <th>Price</th>
          <th>Total Amount</th>
          <th>Remove Item</th>
        </tr>
      </thead>
      <tbody>
        {result}
      </tbody>  
    </Table>


    </div>
 
    <div className="cartSummery">

     <h3>Cart Summery </h3>
   <h6> Your Total Bill is :  <FaIndianRupeeSign /> {totalAmount}</h6> 

   <Form>



      <Form.Group className="mb-3" 
      controlId="name">


        <Form.Label>Enter Name</Form.Label>


        <Form.Control type="email" placeholder="Ex. Rahul Mishra" />
       



      </Form.Group>

      



    </Form>



   <Button variant="outline-dark" onClick={()=>{navigate("/checkout")}} >Checkout</Button>

    </div>

    </main>


    </Container>

    </>
  )
}

export default Carts