import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About.js';
import Home from './Home.js';
import Menu from "./Menu.js";
import UsersList from './UsersList.js';
import Task from "./Task.js";

export default function Navbar(){
   
    function getAlert(){
        alert("working...");
    }
    return(
      <BrowserRouter>
          <Menu />
          <Routes>
            <Route path='/task' element={<Task param={getAlert} />} />
            <Route path='' element="" />
            <Route path='/about' element={<About />} />
          
            <Route path='/users' element={<UsersList />} />
          </Routes>
      </BrowserRouter>          
    );

}