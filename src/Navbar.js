import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Contact.js';
import Services from './Services.js';
import About from './About.js';
import Products from './Products.js';
import Home from './Home.js';
import Menu from "./Menu.js";

export default function Navbar(){
   
    function getAlert(){
        alert("working...");
    }
    return(
      <BrowserRouter>
     <Menu />
          <Routes>
            <Route path='/task' element={<Home param={getAlert} />} />
            <Route path='' element="" />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/products/:pid' element={<Products />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
      </BrowserRouter>          
    );

}