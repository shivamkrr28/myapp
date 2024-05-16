import React from "react";
import { Link } from "react-router-dom";

export default function Menu(){
   let product_id = '5';
    return(
        <>
          <Link to="">Home</Link> |  
          <Link to="task">Task</Link> |  
          <Link to="about">About</Link> |   
          <Link to="services">Services</Link>|
          <Link to={"products/"+product_id}>Products</Link>|
          <Link to="contact">Contact</Link>          
        </>        
    );

}