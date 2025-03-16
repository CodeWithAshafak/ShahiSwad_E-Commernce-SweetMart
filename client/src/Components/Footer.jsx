import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


// icons
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


import { CiLocationArrow1 } from "react-icons/ci";

import { FaAngleRight } from "react-icons/fa";

import "../CSS/Footer.css";
const Footer = () => {




  
  return (
    <>
      <Container fluid >
        <Row id="row">

          <Col className="main_vertical-1"  >

          <h1>  <span>Shahi </span>Swad</h1>

          <p>Tax No. 08AAECT7203P1ZX</p>
          <p>
          At Shahi swad, tradition and innovation go hand-in-hand. Just as much
          as we love the authentic preparations of our traditional sweets and
          savoury, we are passionate to fuse flavours, and deliver gourmet
          delights. <br />
          <br />Be it sweets, savoury, dry fruits, dried fruits or hampers, all
          the offerings of Shahi Swad promise premium quality, delectable taste,
          hygiene and a smile on your face.
        </p>

        <h6>Follow Us</h6>
        <div  className="icons-social">
          <span> <FaInstagram /></span>
          <span>  <FaFacebook /></span>
          <span> <FaLinkedin /></span>
          <span> <FaSquareXTwitter /></span>
       
  
        </div>


          </Col>



          <Col className="col-2"  >
          <h5>our services</h5>
           <div className="flex_column">

           <span><CiLocationArrow1 /> About</span>
          <span><CiLocationArrow1 />    Bulk orders</span>
          <span><CiLocationArrow1 />Careers </span>
          <span><CiLocationArrow1 />    Contact us </span>
          <span><CiLocationArrow1 />  Our Story </span>

           </div>
         
          
         
          
          
          
          </Col>





          <Col  className="col-3"   >
          <h5>useful links</h5>
          <div className="flex_column">

            <span><FaAngleRight />  Refund & Cancellaion Policy </span>
            <span><FaAngleRight />   Store Policy </span>
            <span><FaAngleRight /> Disclaimer</span>
            <span><FaAngleRight /> Store Locator </span>
            <span><FaAngleRight />   Shop Global </span>
            <span><FaAngleRight />     Online Payment Policy </span>
            <span><FaAngleRight />   Terms & conditions </span>

          </div>



          </Col>



        </Row>
      </Container>
    </>
  );
};

export default Footer;
