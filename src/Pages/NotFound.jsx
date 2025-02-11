import React from 'react'
import Button from 'react-bootstrap/Button';
import v1 from "../Images/404.mp4"
import "../CSS/NotFound.css"
import { useNavigate } from 'react-router-dom'




const NotFound = () => {
  const navigate = useNavigate()
  return (
    <>
     <div id='videoWrapper'>

     <h1> Error 404 :- page not found</h1>
     <video id='videos' src={v1} height="500" width="500" loop autoPlay muted ></video>

     
     <Button variant="outline-dark" onClick={()=>{navigate("/home")}}>Back to home</Button>
     </div>
   
    </>
  )
}

export default NotFound