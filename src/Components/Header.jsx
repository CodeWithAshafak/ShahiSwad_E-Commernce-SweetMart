
import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsCartCheckFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

import "../CSS/Header.css"

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


// Model





const Header = () => {

  const navigate = useNavigate()
    const cart = useSelector((state)=>state.mycart.cart)
    console.log(cart);
    const cartLenght = cart.length


    
 //  model
 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
    

  return (

   
    <>

    



    <Navbar  variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Shahi <span>Swad</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/sweets">Sweets</Nav.Link>
            <Nav.Link as={Link} to="/namkeen">Namkeen</Nav.Link>
            <Nav.Link as={Link} to="/dryfruits">Dry Fruits</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/explore">Explore</NavDropdown.Item>
            </NavDropdown>
          </Nav>




          <Nav className="nav-icons">          
              <Nav.Link as={Link} to="/carts" >
              <BsCartCheckFill size="25" />
              {cartLenght}
              </Nav.Link>


            <Nav.Link as={Link} to="/user">

            <FaUserAlt size="20"  />


             </Nav.Link>

             

             <button  onClick={handleShow}>click me</button>
           </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>





    {/* model */}

 

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registration page</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          Enter name: <input type="text" />


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;
