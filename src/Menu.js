import React from "react";
import { Link } from "react-router-dom";

export default function Menu(){
   let product_id = '5';
    return(
        <>
          <Link to="">Home</Link> |  
          <Link to="task">Task</Link> |  
          <Link to="about">About</Link> |   
        
          <Link to="users">Users</Link> | 
          <Link to="s01">S01</Link> |       
          <Link to="s02">S02</Link> |
                   
        </>        
    );

}