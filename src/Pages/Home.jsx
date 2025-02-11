import React, { useEffect, useState } from "react";
import "../CSS/Home.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addtoCart } from "../AddToCardSlice";
import { ImGoogle } from "react-icons/im";


const Home = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch()


  const loadData = async () => {
    const api = "http://localhost:3000/product";
    const res = await axios.get(api);
    // console.log(res.data);
    setProduct(res.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  const result = product.map((key) => {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={key.img} />
          <Card.Body>
            <Card.Title>{key.name}</Card.Title>
            <Card.Text>
             quantity: {key.quantity}
            </Card.Text>
            <Card.Text>
             price : {key.price}
            </Card.Text>
            <Button variant="primary"
             onClick={()=>{dispatch(addtoCart({id:key.id , name:key.name,desc:key.description 
               , price:key.price ,qnty:1 ,
             image:key.img}))}}>Add to cart</Button>
          </Card.Body>
        </Card>
      </>
    );
  });

  return (
    <>
      <Container className="mycart" fluid>
        <h1>Trending products</h1>

        <div id="cartwarapper">
          {result}
        </div>
      </Container>
    </>
  );
};

export default Home;
